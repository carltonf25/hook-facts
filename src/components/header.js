import React from 'react';
import styled from 'styled-components';
import logo from '../img/hf-logo.svg';

const AppHeader = styled.header`
  background: #1a1c23;
  display: flex;
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
    img {
      margin: 1em;
    }
    code {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <AppHeader>
      <img alt="hook-facts-logo" src={logo} />
      <div
        style={{
          width: `50%`,
          margin: `20px auto`,
          color: `#fefefe`
        }}
      >
        <code>
          A celebration of the 1991 cinematic masterpiece, Hook, written using{' '}
          <a target="blank" href="https://reactjs.org/docs/hooks-intro.html">
            React hooks
          </a>
        </code>
      </div>
    </AppHeader>
  );
};

export default Header;
