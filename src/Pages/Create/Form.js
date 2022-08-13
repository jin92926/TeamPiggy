import React from "react";
import { addDoc, collection } from "firebase/firestore";

import { useState } from "react";
import { dbService } from "../../firebase";
import { storageService } from "../../firebase"; // 사진 업로드
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
// import { storageService } from "../../firebase";

function Form() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      //파일 경로 참조 만들기
      const attachmentRef = ref(storageService, `image/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
      setAttachment(null);
    }
    // 사진 없이 submit 하면 오류나오는 상태 !
    const submitHappy = {
      제목: title,
      날짜: new Date(),
      날씨: weather,
      내용: text,
      url: attachmentUrl,
    };
    await addDoc(collection(dbService, "happy"), submitHappy);
    setTitle("");
    setWeather("");
    setText("");
  };

  const onFileChange = (event) => {
    // 이미지 파일 보여주기 위해
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null); // 이미지 삭제

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeWeather = (event) => {
    setWeather(event.target.value);
  };
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div onSubmit={onSubmit}>
        <form>
          {attachment && <img src={attachment} width="50px" height="50px" />}
          <div>
            <input type="file" accept="image/*" onChange={onFileChange} />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
          <span>{new Date().toLocaleDateString().slice(0, -1)}</span>
          <input
            value={weather}
            type="text"
            placeholder="날씨는 어때요?"
            onChange={onChangeWeather}
          />
          <input
            value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="제목"
          />
          <textarea
            value={text}
            onChange={onChangeText}
            placeholder="행복을 입력해주세요"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
