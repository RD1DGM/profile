import React from "react";
import { ContextCreator } from "./index.js";

export default function useActions() {
  const { dispatch } = React.useContext(ContextCreator);

  const getTargetClass = React.useCallback(
    target => {
      dispatch({
        type: "SET_TARGET_CLASS",
        targetClass: target
      });
    },
    [dispatch]
  );

  return { getTargetClass };
}
