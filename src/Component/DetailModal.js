import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { dbService } from "../firebase"
import styled from "styled-components";

const Background = styled.div`
  width: 359px;
  height: 451px;
  background: #FFFFFF4D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-radius: 10px;

`;


const DivContainer = styled.div`

  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const RandomHappy_title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299px;
  height: 61px;
  background-color: #6592EC66;
  border-radius: 10px;
`;

const RandomHappy_listTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 299px;
  height: 22px;
  > span {
    background: rgba(101, 146, 236, 0.43);
    border-radius: 20px;
    width: 132px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const RandomHappy_img = styled.img`
  width: 299px;
  height: 137px;
  border-radius: 10px;

`;


const RandomHappy_content = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 128px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  color: black;
`;

const ButtonDiv = styled.div`
  width: 299px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 13.33px;
  }

`;
const ButtonCss = styled.button`
background-color:transparent;
border: 0;
outline: 0;
color: white;
`;


function DetailModal({ isOpen }) {
  const [savedHappy, setSavedHappy] = useState([]);
  const [deleteHappy, setDeleteHappy] = useState(false);

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

  // console.log(savedHappy[0].id)

  const randomHappy = savedHappy[Math.floor(Math.random() * savedHappy.length)];



  useEffect(() => {
    const good = collection("happy");
    const happy = collection("happy").doc().날씨;
    console.log(good)
    
    
    good.doc(happy).delete();

  }, [deleteHappy])


  const deleteHappyButton = () => {
    setDeleteHappy(!deleteHappy)

  }

  return (
    <>
      {isOpen ? (
        <Background>
          <DivContainer>
            <RandomHappy_title>{randomHappy.제목}</RandomHappy_title>
            <RandomHappy_listTwo>
              <span className="list__createdAt">{randomHappy.날짜}</span>
              <span className="list__content">{randomHappy.날씨}</span>
            </RandomHappy_listTwo>
            {randomHappy.url && <RandomHappy_img src={randomHappy.url} />}
            <RandomHappy_content>{randomHappy.내용}</RandomHappy_content>
            <ButtonDiv>
              <img src="/trash.png"/>
              <ButtonCss onClick={deleteHappyButton}>삭제하기</ButtonCss>
            </ButtonDiv>
          </DivContainer>
        </Background>
      ) : null}
    </>
  );
}

export default DetailModal;