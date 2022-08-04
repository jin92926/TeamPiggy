//뽑기로 나올 창
//
//
import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { dbService } from "../../firebase";

function HappyModal({ isOpen }) {
  const [savedHappy, setSavedHappy] = useState([]);
  useEffect(() => {
    const q = query(collection(dbService, "happy"), orderBy("날짜", "desc"));
    onSnapshot(q, (snapshot) => {
      const happyArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSavedHappy(happyArr);
    });
  }, []);

  const randomHappy = savedHappy[Math.floor(Math.random() * savedHappy.length)];

  return (
    <>
      {isOpen ? (
        <>
          <div className="list__content">
            {randomHappy.url && (
              <img
                className="list__img"
                src={randomHappy.url}
                width="50px"
                height="50px"
              ></img>
            )}
            <span className="list__content">{randomHappy.제목}</span>
            <span className="list__createdAt">{randomHappy.날짜}</span>
            <span className="list__content">{randomHappy.날씨}</span>
            <span className="list__content">{randomHappy.내용}</span>
          </div>
        </>
      ) : null}
    </>
  );
}

export default HappyModal;
