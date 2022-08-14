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
            <div>
                {userObj.email}
            </div>
            <Logout />
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


  > .div3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

`;
export default Setting;