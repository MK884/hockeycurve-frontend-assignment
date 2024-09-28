export const initialState: State = {
  tasks: [],
};

export const taskReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      const tasks = action.payload.isAppended
        ? [...state.tasks, ...action.payload.tasks]
        : [...action.payload.tasks];
      return {
        ...state,
        tasks: tasks,
      };

    case "EDIT_TASK":
      console.log("Updated task", action.payload.updatedTask);
      return {
        ...state,
        tasks: state.tasks?.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks?.filter((task) => task?.id !== action.payload.id),
      };

    case "MARK_COMPLETED":
      return {
        ...state,
        tasks: state.tasks?.map((task) =>
          task.id === action.payload.id ? { ...task, isCompleted: true } : task
        ),
      };

    case "SNOOZE_TASK":
      return {
        ...state,
        tasks: state.tasks?.map((task) =>
          task.id === action.payload.id
            ? { ...task, dueDate: action.payload.newDueDate }
            : task
        ),
      };

    default:
      throw new Error("Invalid action");
  }
};
