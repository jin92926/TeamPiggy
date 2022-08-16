import React, { useState, useEffect } from "react";
import Nav from "../../Component/Nav";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { dbService } from "../../firebase";
import HappyList from "./HappyList";
import styled from "styled-components";
import NoHappy from "../../Component/NoHappy";
import SelectedModal from "./SelectedModal";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fcf6f5;
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180.45deg, #f6e7fb 1.69%, #3b6bb7 99.25%);
`;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const ListBackground = styled.div`
  width: 359px;
  height: 580px;
  background: #ffffff4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 25px;
`;

const ItemSection = styled.section`
  width: 310px;
  height: 520px;
  overflow: scroll;
  overflow-x: hidden;
`;

const Find = () => {
  const [savedHappy, setSavedHappy] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHappy, setSelectedHappy] = useState({});

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const selecteHandler = (id) => {
    const selectedArr = savedHappy.filter((item) => {
      return item.id === id;
    });
    setSelectedHappy(...selectedArr);
  };

  const deleteList = async (id) => {
    const listDoc = doc(dbService, "happy", id);
    await deleteDoc(listDoc);
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
  // console.log(savedHappy);
  return (
    <Background>
      <DivContainer>
        {!isOpen && savedHappy.length > 0 && (
          <ListContainer>
            <ListBackground>
              <ItemSection>
                {savedHappy.map((item) => (
                  <div key={item.id} onClick={() => selecteHandler(item.id)}>
                    <HappyList
                      item={item}
                      openModalHandler={openModalHandler}
                    ></HappyList>
                  </div>
                ))}
              </ItemSection>
            </ListBackground>
          </ListContainer>
        )}
        {!isOpen && savedHappy.length < 1 && <NoHappy />}
        <SelectedModal
          savedHappy={savedHappy}
          selectedHappy={selectedHappy}
          isOpen={isOpen}
          deleteList={deleteList}
        />
        {/* <DetailModal isOpen={isOpen} deleteList={deleteList} /> */}
        <Nav />
      </DivContainer>
    </Background>
  );
};

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

export default Find;
