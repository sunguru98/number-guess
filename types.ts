export interface AppState {
  selectedNumber: number | null;
  currentGuess: number | null;
}

export interface Action<Type, PayloadType> {
  type: Type;
  payload: PayloadType;
}

export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
};

type SetNumberAction = Action<"SET_NUMBER", number>;
type SetCurrentGuessAction = Action<"SET_CURRENT_GUESS", number>;
export type AppActions = SetNumberAction | SetCurrentGuessAction;
