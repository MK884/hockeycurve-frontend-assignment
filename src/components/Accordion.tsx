import React from "react";
import styles from "../styles/accodion.module.scss";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { priorityColor } from "../utils/constant";
import { TaskContext } from "../store";
import Form from "./Form";

function Accordion(props: Task) {
  const { name, description, dueDate, priority, id, isCompleted } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { dispatch } = React.useContext(TaskContext);

  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    dialogRef?.current && dialogRef.current.close();
  };

  const openModal = () => {
    dialogRef?.current && dialogRef.current.showModal();
  };

  // Delete Task
  const deleteTask = () => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id: id },
    });
  };

  return (
    <div className={styles["box"]}>
      <div className={styles["head"]} onClick={() => setIsOpen(!isOpen)}>
        <div>
          {isOpen ? (
            <FaCaretDown size={32} color="var(--brand-color)" />
          ) : (
            <FaCaretRight size={32} color="var(--brand-color)" />
          )}
        </div>
        <div className={styles["header"]}>
          <div className={styles["title"]}>
            <h4>{name}</h4>
            <div className={styles["priority"]}>
              <h4>{priority}</h4>
              <div
                style={{
                  // @ts-ignore
                  backgroundColor: priorityColor[priority],
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div>
            <p>Due Date: {dueDate?.split(" ")?.slice(0, 3)?.join(" ")}</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles["body"]}>
          <div className={styles["description"]}>
            <h6>Description:</h6>
            <p>{description}</p>
          </div>
          <div className={styles["due__date"]}>
            <h6>Due Date: <span className={styles[isCompleted ? 'completed' : 'pending']}>{isCompleted ? 'COMPLETED': 'PENDING'}</span></h6>
            <p>{dueDate}</p>
          </div>
          <div className={styles["actions"]}>
            <button onClick={openModal}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
          </div>
        </div>
      )}
      <Form
        ref={dialogRef}
        onClose={closeModal}
        task={props}
        isNewTask={false}
      />
    </div>
  );
}

export default Accordion;
