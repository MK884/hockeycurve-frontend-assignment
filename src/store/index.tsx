import React from "react";
import { initialState, taskReducer } from "./reducer";

interface TaskContextType {
  state: typeof initialState;
  dispatch: React.Dispatch<Action>;
}

export const TaskContext = React.createContext<TaskContextType | null>(null);

export const TaskContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  console.log(initialState);
  
  // const getTasks = JSON.parse(localStorage.getItem("tasks")) || initialState;

  const [state, dispatch] = React.useReducer(taskReducer, initialState);

  // React.useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(state));
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
