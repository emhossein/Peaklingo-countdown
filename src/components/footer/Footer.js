import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 120px;
  background-color: rgba(210, 84, 25, 0.1);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content:center p {
    margin-bottom: 0;
    color: #424242;
  }

  div {
    flex: 1;
  }

  a {
    font-size: 18px;
    text-decoration: none;
    color: #d25419;
  }

  a:hover {
    color: #424242;
    transition: all 0.2s;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div>
        <p>
          Made By:{" "}
          <a href="https://www.linkedin.com/in/mohammad-masoomian-65a899219/">
            Mohammad Hossein Masoomian
          </a>
        </p>
        <a href="https://mhossein.me" target="_blank" rel="noreferrer">
          mhossein.me
        </a>
      </div>
    </Wrapper>
  );
}

export default Footer;
