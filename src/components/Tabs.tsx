import React from "react";
import styles from "../styles/tabs.module.scss";
import Accordion from "./Accordion";
import { TaskContext } from "../store";

function Tabs({ data, query }: { data: tabs[]; query: string }) {
  if (!data?.length) return null;

  const [activeTab, setActiveTab] = React.useState<tabs>("all");

  const { state } = React.useContext(TaskContext);

  const filterByName = (tasks: Task[]) =>
    tasks?.filter((task) =>
      task.name?.toLowerCase().includes(query.toLowerCase())
    );

  const filterTasks =
    activeTab === "all"
      ? filterByName(state?.tasks)
      : activeTab === "done"
      ? filterByName(state?.tasks?.filter((item) => item.isCompleted))
      : filterByName(
          state?.tasks?.filter((item) => item.priority === activeTab)
        );

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["tabs"]}>
        {data?.map((label) => {
          return (
            <div
              onClick={() => setActiveTab(label)}
              className={styles["tab"]}
              key={label}
              style={{
                backgroundColor:
                  activeTab === label ? "var(--secondry-background)" : "",
                color: activeTab === label ? "black" : "white",
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
      <div className={styles["content"]}>
        {filterTasks?.length ? (
          filterTasks?.map((task) => <Accordion key={task.name} {...task} />)
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            <p>No data available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
