import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #d25419;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 350px;
    height: 60px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-right: 5px;
  }
`;

function Header({ time }) {
  if (time.hours === "00" && time.minutes === "00" && time.seconds === "00") {
    return (
      <Wrapper>
        <div>
          <span>Time's Up!</span>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <span>{time.hours}</span>
        <span>hours</span>
        <span>{time.minutes}</span>
        <span>minutes</span>
        <span>{time.seconds}</span>
        <span>seconds</span>
      </div>
    </Wrapper>
  );
}

export default Header;
