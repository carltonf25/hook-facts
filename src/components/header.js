import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/hf-logo.svg';

const AppHeader = styled.header`
  background: #1a1c23;
  height: 125px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  -moz-box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
  box-shadow: 2px 3px 5px 0px rgba(171, 171, 171, 0.5);
`;

const Header = () => {
  return (
    <AppHeader>
      <img alt="hook-facts-logo" src={logo} />
    </AppHeader>
  );
};

export default Header;
