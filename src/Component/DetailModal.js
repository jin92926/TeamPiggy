import React, { useState, useEffect } from "react";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "../firebase";
import styled from "styled-components";
import NoHappy from "./NoHappy";

const Container = styled.section`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  width: 359px;
  height: 451px;
  background: #ffffff4d;
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

const RandomHappyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299px;
  height: 61px;
  background-color: #6592ec66;
  border-radius: 10px;
`;

const RandomHappyListTwo = styled.div`
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

const RandomHappyImg = styled.img`
  object-fit: scale-down;
  width: 299px;
  height: 137px;
  border-radius: 10px;
`;

const RandomHappyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: ${(props) => (props.isImg ? "128px" : "65%")};

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

function DetailModal({ isOpen, deleteList }) {
  const [savedHappy, setSavedHappy] = useState([]);

  console.log(isOpen);

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
        <Container>
          {savedHappy.length > 0 ? (
            <Background>
              <DivContainer>
                <RandomHappyTitle>{randomHappy.제목}</RandomHappyTitle>
                <RandomHappyListTwo>
                  <span>
                    {randomHappy.날짜.toDate().toLocaleString().slice(0, 11)}
                  </span>
                  <span>{randomHappy.날씨}</span>
                </RandomHappyListTwo>

                {randomHappy.url && <RandomHappyImg src={randomHappy.url} />}
                <RandomHappyContent isImg={randomHappy.url}>
                  {randomHappy.내용}
                </RandomHappyContent>

                <ButtonDiv>
                  <img src="/trash.png" alt="삭제하기" />
                  <ButtonCss
                    onClick={() => {
                      deleteList(randomHappy.id);
                    }}
                  >
                    삭제하기
                  </ButtonCss>
                </ButtonDiv>
              </DivContainer>
            </Background>
          ) : (
            <NoHappy />
          )}
        </Container>
      ) : null}
    </>
  );
}

export default DetailModal;
