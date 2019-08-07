import React from 'react';
import styled from 'styled-components';
import hook1 from '../img/hook1.png';
import hook2 from '../img/hook2.jpg';
import hook3 from '../img/hook3.jpg';
import hook4 from '../img/hook4.jpg';
import hook5 from '../img/hook5.jpg';
import hook6 from '../img/hook6.png';
import hook7 from '../img/hook7.jpg';

const FactWrapper = styled.div`
  background-color: #f4f4f4;
  width: 60%;
  height: 350px;
  margin: 0 auto;
  position: relative;
  margin-top: 40px;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  -moz-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  min-height: 300px;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(248, 247, 216, 0.75);
  text-align: center;
  h1 {
    border-bottom: 2px solid #e63535;
    padding-bottom: 10px;
  }
  p {
    font-size: 1.1em;
    text-align: left;
  }
`;

const FactCard = ({ content }) => {
  const getBackgroundImage = () => {
    const imgArray = [hook1, hook2, hook3, hook4, hook5, hook6, hook7];
    return imgArray[Math.floor(Math.random() * imgArray.length)];
  };

  return (
    <FactWrapper
      style={{
        backgroundImage: `url(${getBackgroundImage()} )`,
        backgroundSize: `cover`
      }}
    >
      <Overlay>
        <div
          style={{
            padding: `20px`,
            fontWeight: `600`,
            width: `80%`,
            margin: `0 auto`
          }}
        >
          <h1>Did you know?</h1>
          <p>{content}</p>
        </div>
      </Overlay>
    </FactWrapper>
  );
};

export default FactCard;
