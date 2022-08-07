import React, { useState, useEffect } from "react";
import Nav from "../../Component/Nav";

import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { dbService } from "../../firebase";
import HappyList from "./HappyList";

const Find = () => {
  const [savedHappy, setSavedHappy] = useState([]);
  const [clicked, setClicked] = useState();

  const onClickHappy = (event) => {
    console.log(event); // 안읽힘!!
  };

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
  console.log(savedHappy);

  return (
    <>
      <div>
        {savedHappy.map((item) => (
          <HappyList key={item.id} item={item} onClick={onClickHappy} /> //안읽힘 클릭이 안돼
        ))}
      </div>
      <Nav />
    </>
  );
};

export default Find;
