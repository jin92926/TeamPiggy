import styled from "styled-components";

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

const SelectedHappyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299px;
  height: 61px;
  background-color: #6592ec66;
  border-radius: 10px;
`;

const SelectedHappyListTwo = styled.div`
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

const SelectedHappyImg = styled.img`
  object-fit: scale-down;
  width: 299px;
  height: 137px;
  border-radius: 10px;
`;

const SelectedHappyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: ${(props) => (props.isImg ? "128px" : "65%")};

  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  color: black;
`;
const CreatedHappy = ({ happyObj }) => {
  console.log(happyObj);

  return (
    <>
      <Container>
        <Background>
          <DivContainer>
            <SelectedHappyTitle>{happyObj.제목}</SelectedHappyTitle>
            <SelectedHappyListTwo>
              <span>{new Date().toLocaleDateString().slice(0, 11)}</span>
              <span>{happyObj.날씨}</span>
            </SelectedHappyListTwo>
            {happyObj.url && <SelectedHappyImg src={happyObj.url} />}
            <SelectedHappyContent isImg={happyObj.url}>
              {happyObj.내용}
            </SelectedHappyContent>
          </DivContainer>
        </Background>
      </Container>
    </>
  );
};

export default CreatedHappy;
