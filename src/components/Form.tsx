import React from "react";
import Dialog from "./Dialog";
import styles from "../styles/form.module.scss";
import DropDow from "./DropDow";

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
  ({ task, onClose }, ref) => {
    const [dueDate, setDueDate] = React.useState<string>();

    const [priority, setPriority] = React.useState<string>("Select Priority");

    const isNewTask = !task?.name;

    const Footer = () => {
      return (
        <>
          <div className={styles["footer"]}>
            <button className={styles["btn"]}>
              {isNewTask ? "Add Task" : "Save Changes"}
            </button>
            {!isNewTask && (
              <button className={styles["btn"]}>Marsk as done</button>
            )}
            <button className={styles["btn"]} onClick={onClose}>
              Cancel
            </button>
          </div>
        </>
      );
    };

    const Header = () => {
      return (
        <>
          <div className={styles["header"]}>
            <h4>{isNewTask ? "Add New Task" : "Edit Task"}</h4>
            {!isNewTask && <button className={styles["btn"]}>Delete</button>}
          </div>
        </>
      );
    };

    const Body = () => {
      return (
        <>
          <div className={styles["body"]}>
            <input type="text" className={styles["input"]} />
            <input
              type="datetime-local"
              className={styles["input"]}
              placeholder="DD MM YYYY - HH:MM"
            />
            <textarea name="" id="" className={styles["input"]}></textarea>
            {/* <select
              className={styles["input"]}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option disabled value="Select Priority" hidden>
                Select Priority
              </option>

              {Object.entries(priorityColor)?.map(([key, val]) => {
                console.log(key, val);
                return (
                  <option value={key} key={key}>
                    <p>{key}</p>
                    <div
                      style={{
                        height: "10px",
                        aspectRatio: 1,
                        borderRadius: "50%",
                        backgroundColor: val,
                      }}
                    />
                  </option>
                );
              })}
            </select> */}
            <DropDow value={priority} onChange={(option)=> setPriority(option)} options={priorityOptions}/>
          </div>
        </>
      );
    };

    return (
      <>
        <Dialog
          ref={ref}
          header={<Header />}
          footer={<Footer />}
          body={<Body />}
        />
      </>
    );
  }
);

export default Form;
