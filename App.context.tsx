import React, { useContext, useReducer } from "react";
import { AppActions, AppContextType, AppState } from "./types";

const initialState: AppState = {
  selectedNumber: null,
  currentGuess: null,
};

const appReducer = (state: AppState, action: AppActions): AppState => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NUMBER":
      return { ...state, selectedNumber: payload };
    case "SET_CURRENT_GUESS":
      return { ...state, currentGuess: payload };
    default:
      return state;
  }
};

const AppContext = React.createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

export const useAppContext = () => useContext<AppContextType>(AppContext);

const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
