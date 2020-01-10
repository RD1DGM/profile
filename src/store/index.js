import { createContext } from "react";
export const initialState = {
  targetClass: null
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_TARGET_CLASS":
      return { ...state, targetClass: action.targetClass };
    default:
      return state;
  }
}

export const ContextCreator = createContext();
