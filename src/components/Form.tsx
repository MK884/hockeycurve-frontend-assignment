import React from "react";
import Dialog from "./Dialog";
import styles from "../styles/form.module.scss";
import DropDow from "./DropDow";
import { TaskContext } from "../store";
import { nanoid } from "nanoid";

const priorityOptions: priorityOptions[] = [
  {
    priority: "high",
    color: "var(--high-priority)",
  },
  {
    priority: "medium",
    color: "var(--medium-priority)",
  },
  {
    priority: "low",
    color: "var(--low-priority)",
  },
];

const Form = React.forwardRef<HTMLDialogElement, FormProps>(
  ({ task, onClose, isNewTask = true }, ref) => {
    const [error, setError] = React.useState<string>();

    const [taskData, setTaskData] = React.useState<Task>({
      id: task?.id || nanoid(4),
      dueDate: task?.dueDate || "",
      isCompleted: task?.isCompleted || false,
      name: task?.name || "",
      priority: task?.priority || "",
      description: task?.description || "",
    });

    const { dispatch, state } = React.useContext(TaskContext);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e?.target;

      setTaskData((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    };

    const emptyFormState = () => {
      setTaskData({
        dueDate: "",
        name: "",
        priority: "",
        description: "",
        id: "",
      });

      onClose && onClose();
    };

    const isDateValid = (date: string) => {
      const now = new Date();
      const inputDate = new Date(date);
      return inputDate >= now;
    };

    const isEmpty =
      !taskData?.name ||
      !taskData?.description ||
      !taskData?.dueDate ||
      !taskData.priority;

    const submitTask = () => {
      setError("");
      if (isEmpty) {
        setError("All Fields are required");
        return null;
      }

      const isNameSame = state.tasks?.filter(
        (task) => task.name === taskData?.name
      );

      if (isNameSame.length) {
        setError("This Title already taken please try with different title");
        return null;
      }

      if (!isDateValid(taskData.dueDate)) {
        setError("Date and time must be today or a future date");
        return null;
      }

      dispatch({
        type: "ADD_TASK",
        payload: {
          tasks: [taskData],
          isAppended: true,
        },
      });
      emptyFormState();
    };

    // Delete Task
    const deleteTask = () => {
      dispatch({
        type: "DELETE_TASK",
        payload: { id: taskData.id },
      });

      console.log("Task deleted");
      onClose && onClose();
    };

    // Edit Task
    const editTask = () => {
      setError("");
      if (isEmpty) {
        setError("All Fields are required");
        return null;
      }

      if (!isDateValid(taskData.dueDate)) {
        setError("Date and time must be today or a future date");
        return null;
      }

      dispatch({
        type: "EDIT_TASK",
        payload: {
          id: taskData.id,
          updatedTask: taskData,
        },
      });
      onClose && onClose();
    };

    // mark completed task

    const markComplete = () => {
      dispatch({
        type: "MARK_COMPLETED",
        payload: {
          id: taskData.id,
        },
      });
      onClose && onClose();
    };

    return (
      <>
        <Dialog ref={ref}>
          <>
            <header>
              <div className={styles["header"]}>
                <h4>{isNewTask ? "Add New Task" : "Edit Task"}</h4>
                {!isNewTask && (
                  <button className={styles["btn"]} onClick={deleteTask}>
                    Delete
                  </button>
                )}
              </div>
            </header>
            <section>
              <form className={styles["body"]}>
                {error && <p className={styles["error"]}>{error}</p>}
                <input
                  type="text"
                  className={styles["input"]}
                  value={taskData?.name}
                  name="name"
                  onChange={handleChange}
                />
                <input
                  type="datetime-local"
                  placeholder="DD MM YYYY - HH:MM"
                  value={taskData?.dueDate}
                  name="dueDate"
                  onChange={handleChange}
                  className={styles["input"]}
                  min={0}
                />
                <textarea
                  className={styles["input"]}
                  value={taskData.description}
                  name="description"
                  onChange={handleChange}
                />
                <DropDow
                  value={taskData.priority}
                  onChange={(option) =>
                    setTaskData((data) => ({
                      ...data,
                      priority: option,
                    }))
                  }
                  options={priorityOptions}
                />
              </form>
            </section>
            <footer>
              <div className={styles["footer"]}>
                <button
                  className={styles["btn"]}
                  onClick={isNewTask ? submitTask : editTask}
                  disabled={isEmpty}
                >
                  {isNewTask ? "Add Task" : "Save Changes"}
                </button>
                {!isNewTask && !taskData.isCompleted && (
                  <button className={styles["btn"]} onClick={markComplete}>
                    Marsk as done
                  </button>
                )}
                <button className={styles["btn"]} onClick={onClose}>
                  Cancel
                </button>
              </div>
            </footer>
          </>
        </Dialog>
      </>
    );
  }
);

export default Form;
