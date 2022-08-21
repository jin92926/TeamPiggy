import styled from "styled-components";
import NoHappy from "../../Component/NoHappy";
import { useNavigate } from "react-router-dom";

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
  background-color: transparent;
  border: 0;
  outline: 0;
  color: white;
`;

function SelectedModal({ isOpen, deleteList, selectedHappy, savedHappy }) {
  let navigate = useNavigate();

  return (
    <>
      {isOpen ? (
        <Container>
          {savedHappy.length > 0 ? (
            <Background>
              <DivContainer>
                <RandomHappyTitle>{selectedHappy.제목}</RandomHappyTitle>
                <RandomHappyListTwo>
                  <span>
                    {selectedHappy.날짜.toDate().toLocaleString().slice(0, 11)}
                  </span>
                  <span>{selectedHappy.날씨}</span>
                </RandomHappyListTwo>

                {selectedHappy.url && (
                  <RandomHappyImg src={selectedHappy.url} />
                )}
                <RandomHappyContent isImg={selectedHappy.url}>
                  {selectedHappy.내용}
                </RandomHappyContent>

                <ButtonDiv>
                  <img src="/trash.png" alt="삭제하기" />
                  <ButtonCss
                    onClick={() => {
                      deleteList(selectedHappy.id);
                      navigate("/draw");
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

export default SelectedModal;
