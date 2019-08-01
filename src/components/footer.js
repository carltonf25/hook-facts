import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
  background: #1a1c23;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  -moz-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  img {
    margin-top: 1em;
  }
  a {
    color: #e63535;
  }
  @media screen and (max-width: 900px) {
  }
`;

const Footer = () => {
  return (
    <AppFooter>
      <code
        style={{
          textAlign: `center`,
          color: `#fefefe`,
          height: `60px`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`
        }}
      >
        Made with ❤ ️by <br />
        <a target="blank" href="http://carltonfreeman.com">
          Carlton Freeman
        </a>
      </code>
    </AppFooter>
  );
};

export default Footer;
