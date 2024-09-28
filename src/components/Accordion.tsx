import React from "react";
import styles from "../styles/accodion.module.scss";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { priorityColor } from "../utils/constant";

function Accordion({ name, description, dueDate, priority }: Task) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
            <h6>Due Date:</h6>
            <p>{dueDate}</p>
          </div>
          <div className={styles["actions"]}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
