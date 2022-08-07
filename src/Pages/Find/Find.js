import React, { useState, useEffect } from "react";
import Nav from "../../Component/Nav";

import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc
} from "firebase/firestore";
import { dbService } from "../../firebase";
import HappyList from "./HappyList";

const Find = () => {
  const [savedHappy, setSavedHappy] = useState([]);
  const [clicked, setClicked] = useState();

  const onClickHappy = (event) => {
    console.log(event.target);
  };
  const deleteList = async (id) => {
    const listDoc = doc(dbService, "happy", id);
    await deleteDoc(listDoc);
}

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
          <HappyList key={item.id} item={item} onClickHappy={onClickHappy} deleteList={deleteList}/>
        ))}
      </div>
      <Nav />
    </>
  );
};

export default Find;
