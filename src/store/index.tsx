import React from "react";
import { initialState, taskReducer } from "./reducer";

interface TaskContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const defualtState: TaskContextType = {
  state: { tasks: [] },
  dispatch: () => {},
};

export const TaskContext = React.createContext<TaskContextType>(defualtState);

export const TaskContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const item = localStorage.getItem("tasks");
  const getTasks = item ? JSON.parse(item) : initialState;

  const [state, dispatch] = React.useReducer(taskReducer, getTasks);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
