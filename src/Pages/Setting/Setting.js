import Logout from "../Login/Logout";
import HappyList from "../Find/HappyList";
import DetailModal from "../../Component/DetailModal";
import Nav from "../../Component/Nav";
import styled from "styled-components";

const Setting = ({userObj}) => {
    return(
        <>
        <Background>
        <DivContainer>
            <div className="profile">
                <img src="/mainpig.png" />
                <div>
                  <span>{userObj.displayName}</span>
                  <span>
                  <Logout />
                  </span>
                </div>
            </div>
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

  .profile {
    display: flex;
    color: black;
    margin-top: 30px;
    padding: 10px;
    width: 85%;
    border-bottom: 1px solid #3B6BB7;
  }
  .profile > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px;
  }
  .profile > img{
    width: 40px;
    height: 40px;
    background-color: #3B6BB7;
    border-radius: 50px;
    padding: 5px;
  }
  .profile > span{
    line-height: 40px;
  }

`;
export default Setting;