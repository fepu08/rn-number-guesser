import React, { createContext, useContext, useState } from "react";

const defaultState = {
  userNumber: null,
  guessNumber: null,
  minBoundary: 1,
  maxBoundary: 99,
  isGameOver: false,
};

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setUserNumber = (number) => {
    setState((prev) => ({
      ...prev,
      userNumber: number,
    }));
  };

  const setGuessNumber = (number) => {
    setState((prev) => ({
      ...prev,
      guessNumber: number,
    }));
  };

  const setMinBoundary = (number) => {
    setState((prev) => ({
      ...prev,
      minBoundary: number,
    }));
  };

  const setMaxBoundary = (number) => {
    setState((prev) => ({
      ...prev,
      maxBoundary: number,
    }));
  };

  const setIsGameOver = (boolean) => {
    setState((prev) => ({
      ...prev,
      isGameOver: boolean,
    }));
  };

  const resetGame = () => {
    setState(() => ({ ...defaultState }));
  };

  return (
    <GameContext.Provider
      value={{
        state,
        setUserNumber,
        setGuessNumber,
        setMinBoundary,
        setMaxBoundary,
        setIsGameOver,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within GameProvider");
  }
  return context;
};
