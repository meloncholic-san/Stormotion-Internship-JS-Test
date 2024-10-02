import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import GameBoard from './gameboard';
import ResultScreen from './ResultScreen';

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [finalPlayerMatches, setFinalPlayerMatches] = useState(0);
  const [finalComputerMatches, setFinalComputerMatches] = useState(0);

  const startGame = (mode) => {
    setGameMode(mode);
    setGameOver(false);
  };

  const endGame = (winner, playerMatches, computerMatches) => {
    setWinner(winner);
    setFinalPlayerMatches(playerMatches);
    setFinalComputerMatches(computerMatches);
    setGameOver(true);
  };

  return (
    <div>
      {gameMode === null ? (
        <WelcomeScreen startGame={startGame} />
      ) : gameOver ? (
        <ResultScreen
          winner={winner}
          playerMatches={finalPlayerMatches}
          computerMatches={finalComputerMatches}
          startNewGame={() => setGameMode(null)}
        />
      ) : (
        <GameBoard gameMode={gameMode} endGame={endGame} />
      )}
    </div>
  );
};

export default App;
