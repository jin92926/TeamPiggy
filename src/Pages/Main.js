import { useEffect, useState } from 'react';
import Nav from '../Component/Nav'
import Modal from '../Component/Modal';
import styled from 'styled-components';

const Background1 = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color : #FCF6F5;
`;

const DivContainer123 = styled.div`

  width: 414px;
  height: 736px;
  background: linear-gradient(180.45deg, #F6E7FB 1.69%, #3B6BB7 99.25%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DivContainer1234 = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  > img {
    width: 168.2px;
    height: 155.21px;
    padding-bottom: 2rem;
  }
  > p {
    font-size: 20px;
  }
`;


function Main(props) {
  const [showmodal, setShowmodal] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowmodal(false)
    },2000)
    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <>
      {
        showmodal === true
        ?
        <Modal title={props.title[0]} src={props.src[0]} vanish={props.vanish}/>
        :
        <Background1>
          <DivContainer123>
            <DivContainer1234>
              <img src={props.src[1]}/>
              <p>{props.userObj.displayName}님의 행복한 기억을 모아뒀어요</p>
            </DivContainer1234>
            <Nav/>
          </DivContainer123>
        </Background1>
      }
    </>
  )
}

export default Main;