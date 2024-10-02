import React from 'react';

const WelcomeScreen = ({ startGame }) => {
  console.log(startGame); // Проверить, есть ли функция
  return (
    <div>
      <h1>Welcome to "The MatchGame" 💥</h1>
      <p>Do you wanna start first? ⚔️</p>
      <button onClick={() => startGame('first')}>Sure, I will start first! 😎</button>
      <button onClick={() => startGame('second')}>Nah, I will start second! 😇</button>
    </div>
  );
};

export default WelcomeScreen;
