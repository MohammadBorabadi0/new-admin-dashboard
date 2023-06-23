import { createContext, useContext, useState } from "react";

// const initialState = {};

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
