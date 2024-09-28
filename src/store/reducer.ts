export const initialState: State = {
  tasks: [],
};

export const taskReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, ...action.payload.tasks],
      };

    case "EDIT_TASK":
      return {
        tasks: state.tasks?.map((task) =>
          task.name === action.payload.taskName
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks?.filter(
          (task) => task?.name !== action.payload.taskName
        ),
      };

    case "MARK_COMPLETED":
      return {
        tasks: state.tasks?.map((task) =>
          task.name === action.payload.taskName
            ? { ...task, isCompleted: true }
            : task
        ),
      };

    default:
      throw new Error("Invalid action");
  }
};
