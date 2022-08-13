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
import styled from "styled-components";
import DetailModal from "../../Component/DetailModal";
import ShowList from "./ShowList";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color : #FCF6F5;
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180.45deg, #F6E7FB 1.69%, #3B6BB7 99.25%);


  > .div3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

`;

const Find = () => {
  const [savedHappy, setSavedHappy] = useState([]);

<<<<<<< HEAD
  const onClickHappy = (event) => {
    console.log(event.target);
=======
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
>>>>>>> origin/master
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
  // console.log(savedHappy);
  return (
    <Background>
      <DivContainer>
        <div className="div2">
        {savedHappy.map((item) => (
<<<<<<< HEAD
          <HappyList key={item.id} item={item} onClickHappy={onClickHappy} deleteList={deleteList}/>
        ))}
      </div>
    </>
=======
          <HappyList key={item.id} item={item} isOpen={isOpen} openModalHandler={openModalHandler}/> //컴포넌트라 안읽힘
        ))}
        </div>
        <div className="div3">
          <ShowList isOpen={isOpen}/>
        </div>
        <Nav />
      </DivContainer>
    </Background>
>>>>>>> origin/master
  );
};

export default Find;
