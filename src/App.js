import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import FactCard from './components/factCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    border-bottom: 2px solid #e63535;
  }
`;

const FactButton = styled.button`
  border: none;
  -webkit-box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  -moz-box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  align-self: center;
  margin-top: 20px;
  padding: 1em 2em;
  font-size: 1.1em;
  text-transform: uppercase;
  background: #e63535;
  transition: 0.2s ease;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  :active {
    transform: scale(1.03);
  }
`;

function App() {
  const [whichHook, setWhichHook] = useState('hookMovie');

  const [fact, setFact] = useState('');

  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    let randomFactId = Math.floor(Math.random() * 10);

    const res = await fetch(
      `https://my-json-server.typicode.com/carltonf25/hook-facts-api/hookFacts/${randomFactId}`
    );
    const data = await res.json();

    setFact(data.fact);
    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <Wrapper>
      <div className="App">
        <Header />
        <FactCard content={loading ? 'loading...' : fact} />
      </div>
      <FactButton onClick={() => fetchFact()}>Smee, get me another!</FactButton>
    </Wrapper>
  );
}

export default App;
