import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { dbService } from "../../firebase";
import HappyList from "./HappyList";

const HappyItem = () => {
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

  return (
    <div>
      {savedHappy.map((item) => (
        <HappyList key={item.id} 날짜={item.날짜} 제목={item.제목} />
      ))}
    </div>
  );
};

export default HappyItem;
