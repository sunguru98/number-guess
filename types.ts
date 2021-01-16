export interface AppState {
  selectedNumber: number | null;
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
export type AppActions = SetNumberAction;
