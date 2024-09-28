import React from "react";
import styles from "../styles/dropdown.module.scss";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

function DropDow({ onChange, options, value }: DropDowProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);


  const selectOption = (option:priority) => {
    onChange(option);
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles["select"]}>
        <div
          className={styles["header"]}
          onClick={() => setIsOpen(!isOpen)}
          style={{ borderColor: isOpen ? "var(--brand-color)" : "" }}
        >
          <p>{value || "Select Priority"}</p>
          {isOpen ? (
            <FaCaretUp size={26} color="var(--brand-color)" />
          ) : (
            <FaCaretDown size={26} color="var(--brand-color)" />
          )}
        </div>
        {isOpen && <div className={styles["body"]}>
          {options?.map((option) => (
            <div className={`${styles['option']} ${option.priority === value ? styles['selected'] : ''}`} key={option.priority} onClick={()=>selectOption(option.priority)}>
                <p>{option.priority}</p>
                <div style={{ height:'20px', aspectRatio:1, backgroundColor: option.color, borderRadius:'50%'}}/>
            </div>
          ))}
        </div>}
      </div>
    </>
  );
}

export default DropDow;
