import React, { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [openRule, setOpenRule] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userSelect, setUserSelect] = useState({});
  const [score, setScore] = useState(12);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  }, [])

  return (
    <GameContext.Provider value={{ openRule, setOpenRule, isPlaying, setIsPlaying, userSelect, setUserSelect, score, setScore }}>
      {children}
    </GameContext.Provider>
  )
}