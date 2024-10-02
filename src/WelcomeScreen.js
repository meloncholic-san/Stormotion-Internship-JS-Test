import React from 'react';

const WelcomeScreen = ({ startGame }) => {
  return (
    <div>
      <h1>Welcome to "The MatchGame" 💥</h1>
      <p>Do you wanna play hardmode?</p>
      <button onClick={() => startGame('normal')}>Нет</button>
      <button onClick={() => startGame('hard')}>Да</button>
    </div>
  );
};

export default WelcomeScreen;
