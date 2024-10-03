import React, { useState, useEffect } from 'react';

const GameBoard = ({ gameMode, endGame, n, m }) => {
  const [matchesLeft, setMatchesLeft] = useState(2 * n + 1); 
  const [playerMatches, setPlayerMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [isPlayerTurnBlocked, setIsPlayerTurnBlocked] = useState(gameMode === 'first' ? false : true);

  useEffect(() => {
    if (gameMode === 'first') {
      setIsPlayerTurnBlocked(false);
    } else if (gameMode === 'second') {
      setTimeout(() => handleComputerTurn(matchesLeft), 1000); 
    }
  }, [gameMode]);

  const handlePlayerTurn = (matches) => {
    if (isPlayerTurnBlocked) return;

    setIsPlayerTurnBlocked(true); 
    const newMatchesLeft = matchesLeft - matches;
    const newPlayerMatches = playerMatches + matches;

    setMatchesLeft(newMatchesLeft);
    setPlayerMatches(newPlayerMatches);

    if (newMatchesLeft <= 0) {
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
        computerMove = Math.min(m, remainingMatches);
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
      <h2>Remaining matches: {matchesLeft} 🎇</h2>
      <div className="player-matches">Your matches: {playerMatches} 🎇</div>
      <div className="computer-matches">Computer`s matches: {computerMatches} 🎇</div>
      <div>
        {[...Array(m)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePlayerTurn(i + 1)}
            disabled={matchesLeft < i + 1 || isPlayerTurnBlocked}
          >
            Take {i + 1} 🎇matches
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
