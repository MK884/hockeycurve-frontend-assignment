import React from "react";
import styles from "../styles/tabs.module.scss";
import Accordion from "./Accordion";

const task: Task[] = [
  {
    name: "Task 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "high",
  },
  {
    name: "Task 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "low",
  },
  {
    name: "Task 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "medium",
  },
  {
    name: "Task 4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "low",
  },
  {
    name: "Task 5",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "high",
  },
  {
    name: "Task 6",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "medium",
  },
  {
    name: "Task 7",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "high",
  },
  {
    name: "Task 8",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa amet maiores sed? Debitis, magnam tempora? Cupiditate, totam ab. Eveniet fugit laborum ipsam quis eius optio perferendis nisi dolorem obcaecati hic quia non quidem, sit veritatis rerum ad ut cupiditate, vero quam nobis aut. Officiis non dolor voluptatibus explicabo consectetur beatae.",
    dueDate: "01 Aug 2024 - 06:30 PM",
    priority: "low",
  },
];

function Tabs({ data }: { data: tabs[] }) {
  if (!data?.length) return null;

  const [activeTab, setActiveTab] = React.useState<tabs>("all");

  const filterTasks =
    activeTab === "all"
      ? task
      : task?.filter((item) => item.priority === activeTab);

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
