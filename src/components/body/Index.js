import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 220px);
  display: flex;
  justify-content: space-between;

  #main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    p {
      font-size: 24px;
      a {
        text-decoration: none;
        color: #d25419;
      }

      a:hover {
        color: #424242;
        transition: all 0.2s;
      }
    }
  }

  .sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 380px;
    height: 100%;
    background-color: #f4f4f4;
    box-shadow: -4px 0 8px -2px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 40px;
      font-weight: bold;
      color: #424242;
    }
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .sidebar.close {
    transform: translateX(100%);
  }

  #hamburger {
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    #slice {
      display: block;
      position: absolute;
      height: 9px;
      width: 100%;
      background: #d3531a;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    #slice:nth-child(1) {
      top: 0px;
    }

    #slice:nth-child(2) {
      top: 18px;
    }

    #slice:nth-child(3) {
      top: 36px;
    }

    &.open #slice:nth-child(1) {
      top: 18px;
      transform: rotate(135deg);
    }

    &.open #slice:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    &.open #slice:nth-child(3) {
      top: 18px;
      transform: rotate(-135deg);
    }
  }

  & div:nth-child(3) {
    position: absolute;
    top: 0;
    right: 2%;
  }
`;

function Index() {
  return (
    <Wrapper>
      <div id="main">
        <p>
          A simple application written in{" "}
          <a href="https://reactjs.org/">React.js</a> and styled with{" "}
          <a href="https://styled-components.com/">Styled-component</a>.{" "}
        </p>
        <p>
          for implementation of the countdown I used{" "}
          <a href="https://day.js.org/">dayjs</a>.{" "}
        </p>
      </div>
      <Sidebar />
      <Hamburger />
    </Wrapper>
  );
}

export default Index;
