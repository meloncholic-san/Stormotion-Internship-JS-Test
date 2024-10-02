import React from 'react';

const ResultScreen = ({ winner, playerMatches, computerMatches, startNewGame }) => {
  return (
    <div>
      <h2>Результаты игры:</h2>
      <div>Ваши спички: {playerMatches}</div>
      <div>Спички компьютера: {computerMatches}</div>
      <h2>{winner === 'player' ? 'You are the winner!' : 'You are the loser!'}</h2>
      <button onClick={startNewGame}>Играть снова</button>
    </div>
  );
};

export default ResultScreen;
