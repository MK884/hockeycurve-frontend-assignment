import React from "react";
import styles from "./styles/main.module.scss";
import { TiFolderOpen } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import Tabs from "./components/Tabs";




export const tabs: tabsProps[] = [
  {
    label: "all",
    content: <>All</>,
  },
  {
    label: "high",
    content: <>High</>,
  },
  {
    label: "medium",
    content: <>Medium</>,
  },
  {
    label: "low",
    content: <>Low</>,
  },
  {
    label: "done",
    content: <>Done</>,
  },
];

function App() {
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
              <div className={styles["add__btn"]}>
                <div className={styles["plus__icon"]}>
                  <TiPlus size={22} />
                </div>
                <p>Add New Task</p>
              </div>
              
            </div>
                <Tabs data={tabs}/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
