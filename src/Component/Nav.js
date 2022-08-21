/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #cbcbeb;
  width: 100%;
  height: 76px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 24px;
  }
`;

const ButtonCss = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #ffffff;
  font-size: 7px;
`;

const Button = (props) => {
  return <ButtonCss onClick={() => {}}>{props.name}</ButtonCss>;
};

function Nav() {
  let navigate = useNavigate();

  return (
    <Navbar>
      <ButtonDiv onClick={() => navigate("/create")}>
        <img src="/mainpig.png"></img>
        <Button name="모으기" />
      </ButtonDiv>

      <ButtonDiv onClick={() => navigate("/draw")}>
        <img src="/folder.png"></img>
        <Button name="뽑기" />
      </ButtonDiv>

      <ButtonDiv onClick={() => navigate("/Find")}>
        <img src="/find.png"></img>
        <Button name="찾기" />
      </ButtonDiv>
      <ButtonDiv onClick={() => navigate('/Setting')}>
        <img src="/setting.png"></img>
        <Button name="설정" />
      </ButtonDiv>
    </Navbar>
  );
}

export default Nav;
