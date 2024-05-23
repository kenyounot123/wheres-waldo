import React, { useState } from "react";
import { createContext } from "react";

export const TargetContext = createContext();

export const TargetProvider = ({ children }) => {
  const [targets, setTargets] = useState(null);

  const addTargets = (target) => {
    setTargets(target);
  };

  const targetFound = (personId) => {
    setTargets(targets.filter((target) => target.id !== personId));
  };

  return (
    <TargetContext.Provider value={{ targets, addTargets, targetFound }}>
      {children}
    </TargetContext.Provider>
  );
};
