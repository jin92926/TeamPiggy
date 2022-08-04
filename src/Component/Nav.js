/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return <button onClick={() => {}}>{props.name}</button>;
};

function Nav() {
  return (
    <>
      <Link to="/create">
        <Button name="모으기" />
      </Link>
      <Link to="/draw">
        <Button name="뽑기" />
      </Link>
      <Link to="/Find">
        <Button name="보기" />
      </Link>
    </>
  );
}

export default Nav;
