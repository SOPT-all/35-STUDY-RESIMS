import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToParent = () => {
    navigate('/practice1');
  };

  const goToWindow = () => {
    navigate('/practice2');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToParent}>첫번째 실습</button>
      <button onClick={goToWindow}>두번째 실습</button>
    </div>
  );
}

export default Home;