import React, { createContext, useContext, useState } from "react";

/**
 * @typedef {Object} GameState
 * @property {number|null} userNumber
 * @property {number|null} guessNumber
 * @property {number} minBoundary
 * @property {number} maxBoundary
 * @property {boolean} isGameOver
 * @property {number[]} guessRounds
 */

/**
 * @typedef {Object} GameContextValue
 * @property {GameState} state
 * @property {(number: number) => void} setUserNumber
 * @property {(number: number) => void} setGuessNumber
 * @property {(number: number) => void} setMinBoundary
 * @property {(number: number) => void} setMaxBoundary
 * @property {(value: boolean) => void} setIsGameOver
 * @property {(number: number) => void} addGuessRound
 * @property {() => void} resetGame
 */

/**
 * @typedef {Object} GameProviderProps
 * @property {React.ReactNode} children
 */

/** @type {GameState} */
const defaultState = {
  userNumber: null,
  guessNumber: null,
  minBoundary: 1,
  maxBoundary: 99,
  isGameOver: false,
  guessRounds: [],
};

/** @type {import('react').Context<GameContextValue | null>} */
const GameContext = createContext(null);

/** @param {GameProviderProps} props */
export const GameProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setUserNumber = (number) => {
    setState((prev) => ({ ...prev, userNumber: number }));
  };

  const setGuessNumber = (number) => {
    setState((prev) => ({ ...prev, guessNumber: number }));
  };

  const setMinBoundary = (number) => {
    setState((prev) => ({ ...prev, minBoundary: number }));
  };

  const setMaxBoundary = (number) => {
    setState((prev) => ({ ...prev, maxBoundary: number }));
  };

  const setIsGameOver = (boolean) => {
    setState((prev) => ({ ...prev, isGameOver: boolean }));
  };

  const addGuessRound = (number) => {
    setState((prev) => ({
      ...prev,
      guessRounds: [...prev.guessRounds, number],
    }));
  };

  const resetGame = () => {
    setState({ ...defaultState });
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
        addGuessRound,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

/** @returns {GameContextValue} */
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within GameProvider");
  }
  return context;
};
