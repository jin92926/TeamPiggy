import React from "react";
import styled from "styled-components";

import { addDoc, collection } from "firebase/firestore";

import { useState } from "react";
import { dbService } from "../../firebase";
import { storageService } from "../../firebase"; // 사진 업로드
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import CreatedHappy from "./CreatedHappy";

function Form(userObj) {
  const [title, setTitle] = useState("");
  const [weather, setWeather] = useState("");
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [happyObj, setHappyObj] = useState({});
  // console.log(userObj.userObj.displayName)
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
      setAttachment("");
    }

    const submitHappy = {
      작성자: userObj.userObj.displayName,
      제목: title,
      날짜: new Date(),
      날씨: weather,
      내용: text,
      url: attachmentUrl,
    };

    setHappyObj(submitHappy);
    console.log(happyObj);

    await addDoc(collection(dbService, "happy"), submitHappy);
    setTitle("");
    setWeather("");
    setText("");

    setSubmitted(!submitted);
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
  const onClearAttachment = () => setAttachment(""); // 이미지 삭제

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
      {!submitted ? (
        <FormContainer onSubmit={onSubmit}>
          <FormBackground>
            <DivContainer>
              {attachment ? (
                <ImgContainer src={attachment} />
              ) : (
                <ImgContainer />
              )}

              <InputContainer>
                <FileArea>
                  <input type="file" accept="image/*" onChange={onFileChange} />
                  <button onClick={onClearAttachment}>Clear</button>
                </FileArea>
                <DateWeatherArea>
                  <span>{new Date().toLocaleDateString().slice(0, -1)}</span>
                  <input
                    value={weather}
                    type="text"
                    placeholder="날씨는 어때요?"
                    onChange={onChangeWeather}
                    maxLength={8}
                  />
                </DateWeatherArea>
                <Title
                  value={title}
                  onChange={onChangeTitle}
                  type="text"
                  placeholder="제목"
                  required
                  maxLength={13}
                />
                <Content
                  value={text}
                  onChange={onChangeText}
                  placeholder="행복을 입력해주세요"
                  required
                  alert="dd"
                />
              </InputContainer>
            </DivContainer>
          </FormBackground>
          <SubmitHappy type="submit" value="행복조각 모으기" />
        </FormContainer>
      ) : (
        <CreatedHappy happyObj={happyObj} />
      )}
    </>
  );
}

export default Form;

const FormBackground = styled.div`
  width: 359px;
  height: 510px;
  background: #ffffff4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 25px;
`;

const DivContainer = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const ImgContainer = styled.img`
  object-fit: scale-down;
  width: 299px;
  height: 220px;
`;

const SubmitHappy = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 61px;
  background: rgba(246, 231, 251, 0.65);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 25px;
  font-weight: 500;
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 195px;
`;

const FileArea = styled.section``;

const DateWeatherArea = styled.section`
  display: flex;
  justify-content: space-between;
  > span {
    text-align: center;
    width: 140px;
    height: 22px;
    background-color: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    padding-top: 3px;
  }
  > input {
    content: attr(placeholder);
    background-color: rgba(101, 146, 236, 0.6);
    border-radius: 20px;
    border-color: #ffff;
    width: 140px;
    height: 22px;
    border: none;
    text-align: center;
    padding-top: 3px;
    &::placeholder {
      color: #ffff;
    }
  }
`;
const Title = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97.5%;
  height: 20px;
`;
const Content = styled.textarea`
  width: 98%;
  height: 100px;
`;
