import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if(props.vanish) { 
      let timer = setTimeout(() => {
        setClose(false)
      }, 2000);
      return () => {
        // 버그 방지 
        clearTimeout(timer);
      };
    }
  }, [])

  return(
      <Background>
        {
        close === true
        ? 
          (props.title[0] === '행복'
          ?
          <DivContainer>
            <ContentContainer>
              <div className='div2'>
                <img src={process.env.PUBLIC_URL + props.src}/>
                <h1>{props.title[0]}</h1>
              </div>
                <h1>{props.title[1]}</h1>
            </ContentContainer>
          </DivContainer>
          :
          <DivContainer1>
            <div className='div2'>
              <img src={process.env.PUBLIC_URL + props.src}/>
              <p>{props.title}</p>
            </div>
          </DivContainer1>)
          :null
        }
      </Background>
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
  background: linear-gradient(17.56deg, #F6E7FB 0%, #3B6BB7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeout 2s;
  @keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  padding-left: 70px;
  padding-bottom: 200px;

  > .div2 {
      display: flex;
      align-items: center;
      justify-content: flex-end;

    > img {
      width: 51.19px;
      height: 44.32px;
    }
  }
`;

const DivContainer1 = styled(DivContainer)`
  > .div2 {
    display: flex;
    flex-direction: column;
    font-size: 20px;

    > img {
    width: 219.65px;
    height: 198.59px;
    padding-bottom: 20px;
    }
  }
`;


export default Modal;