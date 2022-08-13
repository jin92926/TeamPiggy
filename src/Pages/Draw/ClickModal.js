import { useState } from 'react';
import Nav from '../../Component/Nav';
import Card from './Card';
import styled from 'styled-components';
import DetailModal from '../../Component/DetailModal';

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
  background: linear-gradient(17.56deg, #F6E7FB 0%, #3B6BB7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .div2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    animation: blink-effect 2s linear 1;

    > img {
    width: 219.65px;
    height: 198.59px;
    padding-bottom: 20px;
    }

    @keyframes blink-effect {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const DivContainer1 = styled(DivContainer)`
 justify-content: space-between;

  > .div3 {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

`;

const ClickModal = (props) => {

  const [close, setClose] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };


  const clickEvent = () => {
    if(!props.vanish) {
      let copyclose = false;
      setClose(copyclose)
    }
  }

  return(
    <>
      <Background>
        {
        close === true
        ? 
          <DivContainer>
            <div className='div2'>
              <img src={process.env.PUBLIC_URL + props.src} onClick={clickEvent}/>
              <p>{props.title}</p>
            </div>
          </DivContainer>
        : 
          <DivContainer1>
            <div className='div3'>
              <Card openModalHandler={openModalHandler} isOpen={isOpen} />
              <DetailModal isOpen={isOpen} />
            </div>
            <Nav/>
          </DivContainer1>
        }
      </Background>
    </>
    )
}

export default ClickModal;