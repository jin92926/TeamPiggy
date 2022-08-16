import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoHappyContainder = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoHappyExplain = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 30px;
  width: 299px;
  height: 150px;
  background: #ffffff4d;
  border-radius: 10px;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p1 {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .p2 {
    font-size: 16px;
  }
`;

const GotoCreateButton = styled.button`
  width: 50%;
  height: 25%;
  background-color: rgba(101, 146, 236, 0.43);
  border: 2px solid #ffffff5d;
  color: #ffff;
  font-weight: 700;
  :hover {
    background-color: white;
    color: rgba(101, 146, 236, 0.43);
    font-weight: 900;
  }
`;

const NoHappy = () => {
  let navigate = useNavigate();

  return (
    <NoHappyContainder>
      <NoHappyExplain>
        <span>
          <span className="p1">아직 행복이 없어요!</span>
          <span className="p2">행복을 모아주세요</span>
        </span>
        <GotoCreateButton onClick={() => navigate("/create")}>
          행복 모으러 가기
        </GotoCreateButton>
      </NoHappyExplain>
    </NoHappyContainder>
  );
};

export default NoHappy;
