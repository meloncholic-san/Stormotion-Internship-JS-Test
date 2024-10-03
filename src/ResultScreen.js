import React from 'react';

const ResultScreen = ({ winner, playerMatches, computerMatches, startNewGame }) => {
  return (
    <div>
      <h2>Game results:</h2>
      <div className="player-matches">Your matches: {playerMatches} 🎇</div>
      <div className="computer-matches">Computer`s matches: {computerMatches} 🎇</div>
      <h2>{winner === 'player' ? 'You are the winner! 🎉🏆🎉 ': 'You are the loser! 🫵🏼🤣 '}</h2>
      <button onClick={startNewGame}>Play again</button>
    </div>
  );
};

export default ResultScreen;
