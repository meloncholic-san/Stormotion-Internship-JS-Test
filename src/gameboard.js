import React, { useState } from 'react';

const GameBoard = ({ gameMode, endGame }) => {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [isPlayerTurnBlocked, setIsPlayerTurnBlocked] = useState(false); 

  const handlePlayerTurn = (matches) => {
    if (isPlayerTurnBlocked) return; 

    setIsPlayerTurnBlocked(true); 
    const newMatchesLeft = matchesLeft - matches;
    const newPlayerMatches = playerMatches + matches;

    setMatchesLeft(newMatchesLeft);
    setPlayerMatches(newPlayerMatches);

    if (newMatchesLeft <= 0) {
      // Игра окончена
      const winner = newPlayerMatches % 2 === 0 ? 'player' : 'computer'; 
      endGame(winner, newPlayerMatches, computerMatches);
    } else {
      setTimeout(() => {
        handleComputerTurn(newMatchesLeft, newPlayerMatches); 
      }, 1000); 
    }
  };

  const handleComputerTurn = (remainingMatches, newPlayerMatches) => {
    let computerMove;


    if (remainingMatches === 3) {
      if (computerMatches % 2 === 0) {
        computerMove = 2;
      } else {
        computerMove = 3;
      }
    } else if (remainingMatches === 2) {
      if (computerMatches % 2 === 0) {
        computerMove = 2;
      } else {
        computerMove = 1;
      }
    } else {
      if (remainingMatches % 4 === 0) {
        computerMove = Math.min(3, remainingMatches);
      } else {
        computerMove = remainingMatches % 4;
      }
    }

    const newMatchesLeft = remainingMatches - computerMove;
    const newComputerMatches = computerMatches + computerMove;

    setMatchesLeft(newMatchesLeft);
    setComputerMatches(newComputerMatches);

    if (newMatchesLeft <= 0) {

      const winner = newComputerMatches % 2 === 0 ? 'computer' : 'player'; 
      endGame(winner, newPlayerMatches, newComputerMatches); 
    } else {
      setIsPlayerTurnBlocked(false); 
    }
  };

  return (
    <div>
      <h2>Оставшиеся спички: {matchesLeft} 🧨</h2>
      <div>Ваши спички: {playerMatches}</div>
      <div>Спички компьютера: {computerMatches}</div>
      <div>
        <button 
          onClick={() => handlePlayerTurn(1)} 
          disabled={matchesLeft < 1 || isPlayerTurnBlocked}
        >
          Взять 1 🎇спичку
        </button>
        <button 
          onClick={() => handlePlayerTurn(2)} 
          disabled={matchesLeft < 2 || isPlayerTurnBlocked}
        >
          Взять 2 🎇🎇спички
        </button>
        <button 
          onClick={() => handlePlayerTurn(3)} 
          disabled={matchesLeft < 3 || isPlayerTurnBlocked}
        >
          Взять 3 🎇🎇🎇спички
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
