import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = { darkMode: false };

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ThemeContext.Provider
      value={{
        darkMode: state.darkMode,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
