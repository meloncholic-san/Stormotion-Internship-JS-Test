import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import GameBoard from './gameboard';
import ResultScreen from './ResultScreen';
import SettingsModal from './ModalSettings';

const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [finalPlayerMatches, setFinalPlayerMatches] = useState(0);
  const [finalComputerMatches, setFinalComputerMatches] = useState(0);
  const [matchesSettings, setMatchesSettings] = useState({ n: 12, m: 3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openSettings = () => {
    setIsModalOpen(true);
  };

  const saveSettings = (n, m) => {
    setMatchesSettings({ n, m });
  };

  return (
    <div>
      {isModalOpen && (
        <SettingsModal onSave={saveSettings} onClose={() => setIsModalOpen(false)} />
      )}
      {gameMode === null ? (
        <WelcomeScreen startGame={startGame} openSettings={openSettings} />
      ) : gameOver ? (
        <ResultScreen
          winner={winner}
          playerMatches={finalPlayerMatches}
          computerMatches={finalComputerMatches}
          startNewGame={() => setGameMode(null)}
        />
      ) : (
        <GameBoard gameMode={gameMode} endGame={endGame} n={matchesSettings.n} m={matchesSettings.m} />
      )}
    </div>
  );
};

export default App;
