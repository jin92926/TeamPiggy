import React, { useState, useEffect } from "react";
import Logout from "../Login/Logout";
import Nav from "../../Component/Nav";
import styled from "styled-components";
import { dbService } from "../../firebase";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  deleteDoc,
} from "firebase/firestore";

const Profile = ({userObj}) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
  const q = query(collection(dbService, "happy"), where("작성자", "==", userObj.displayName));
    onSnapshot(q, (snapshot) => {
      const happyArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfile(happyArr);
    });
  }, []);

    return(
        <>
        <Background>
        <DivContainer>
            <div className="profile__img">
                <img src="/mainpig.png" />
            </div>
            <div className="profile__userInfo">
              <p>이름: {userObj.displayName}</p>
              <p><Logout /></p>
            </div>
            <p>내 행복 무게: {profile.length} kg</p>
            <Nav />
        </DivContainer>
        </Background>
        </>
    )
}
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

  .profile__img{
    background-color: #3B6BB7;
    width: 120px;
    height: 120px;
    padding: 20px;
    border-radius: 50%;
    margin-top: 60px;

    > img{
      width: 100%;
    }
  }
  .profile__userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      margin: 5px;
    }
  }
  
  > p{
    font-size: 40px;
  }
`;
export default Profile;