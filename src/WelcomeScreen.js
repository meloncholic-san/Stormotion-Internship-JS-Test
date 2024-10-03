import React from 'react';

const WelcomeScreen = ({ startGame, openSettings }) => {
  return (
    <div>
      <h1>Welcome to "The MatchGame" 💥</h1>
      <p>Do you wanna start first? ⚔️</p>
      <button onClick={() => startGame('first')}>Sure, I will start first! 😎</button>
      <button onClick={() => startGame('second')}>Nah, I will start second! 😇</button>
      <button onClick={openSettings}>Settings ⚙️</button>
    </div>
  );
};

export default WelcomeScreen;
