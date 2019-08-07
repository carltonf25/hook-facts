import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import FactCard from './components/factCard';

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(240, 232, 232);

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  display: grid;
  grid-template-rows: auto auto 10vh;

`;

const FactButton = styled.button`
  border: none;
  -webkit-box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  -moz-box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  box-shadow: 2px 3px 4px 0px rgba(171, 171, 171, 0.5);
  align-self: center;
  font-size: 1.1em;
  margin-top: 20px;
  padding: 1em 1.5em;
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

const CardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
  }
`;

function App() {
  const [fact, setFact] = useState('');

  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    let randomFactId = Math.floor(1 + Math.random() * 17);

    const res = await fetch(
      `https://my-json-server.typicode.com/carltonf25/hook-facts-api/hookFacts/${randomFactId}`
    );
    const data = await res.json();

    if (data.fact) {
      if (fact.id === data.id) {
        fetchFact();
      }
      setFact(data.fact);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <Wrapper>
      <Header />
      <CardButtonWrapper>
        <FactCard content={loading ? 'loading...' : fact} />
        <FactButton onClick={() => fetchFact()}>Smee, get me another!</FactButton>
      </CardButtonWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
