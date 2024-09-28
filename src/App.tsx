import React from "react";
import { BiSort } from "react-icons/bi";
import { TiFolderOpen, TiPlus } from "react-icons/ti";
import Form from "./components/Form";
import Tabs from "./components/Tabs";
import styles from "./styles/main.module.scss";
import { TaskContext } from "./store";
import { tabs } from "./utils/constant";
import { sortByPriorityAndDueDate } from "./utils";

function App() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [query, setQuery] = React.useState<string>("");

  const closeModal = () => {
    dialogRef?.current && dialogRef.current.close();
  };

  const openModal = () => {
    dialogRef?.current && dialogRef.current.showModal();
  };

  const handleSorting = () => {
    const { dispatch, state } = React.useContext(TaskContext);
    const sortedTasks = sortByPriorityAndDueDate(state.tasks);
    dispatch({
      type: "ADD_TASK",
      payload: {
        isAppended: false,
        tasks: sortedTasks || [],
      },
    });
  };

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
              <div className={styles["search"]}>
                <input
                  type="text"
                  placeholder="Search Task..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className={styles["sort"]} onClick={handleSorting}>
                <BiSort size={20} />
              </div>
            </div>
            <Tabs data={tabs} query={query} />
          </div>
        </div>
        <Form ref={dialogRef} onClose={closeModal} />
      </div>
    </>
  );
}

export default App;
