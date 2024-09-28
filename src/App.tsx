import { TiFolderOpen, TiPlus } from "react-icons/ti";
import Form from "./components/Form";
import Tabs from "./components/Tabs";
import styles from "./styles/main.module.scss";
import React from "react";

export const tabs: tabs[] = ['all', 'high', 'medium', 'low', 'done'];

function App() {  

  const dialogRef = React.useRef<HTMLDialogElement>(null)

  const closeModal = () => {
    dialogRef?.current && dialogRef.current.close();
  }

  const openModal = () => {
    dialogRef?.current && dialogRef.current.showModal()
  }

  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["heading"]}>
            <TiFolderOpen size={34} />
            <h4>Task List View</h4>
          </div>
          <div className={styles["task__list_view"]}>
            <div className={styles["header"]}>
              <div className={styles["add__btn"]} onClick={openModal}>
                <div className={styles["plus__icon"]}>
                  <TiPlus size={22} />
                </div>
                <p>Add New Task</p>
              </div>
            </div>
            <Tabs data={tabs} />
          </div>
        </div>
        <Form ref={dialogRef} onClose={closeModal} />
      </div>
    </>
  );
}

export default App;
