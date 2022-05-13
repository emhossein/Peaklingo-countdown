import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getRemainingTimeUntilMsTimestamp } from "../../utils/countdownTimeUtils";

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

const DEFAULT_REMAINING_TIME = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

function Header({ timestamp }) {
  const [remainingTime, setRemainingTime] = useState(DEFAULT_REMAINING_TIME);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(timestamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestamp]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <Wrapper>
      <div>
        <span>{remainingTime.hours}</span>
        <span>hours</span>
        <span>{remainingTime.minutes}</span>
        <span>minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </Wrapper>
  );
}

export default Header;
