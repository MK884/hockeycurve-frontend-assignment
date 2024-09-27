import React from "react";
import styles from "../styles/tabs.module.scss";

function Tabs({ data }: TabListProps) {
  if (!data?.length) return null;

  const [activeTabs, setActiveTabs] = React.useState<number>(0);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["tabs"]}>
        {data?.map((item, idx) => {
          return (
            <div
              onClick={() => setActiveTabs(idx)}
              className={styles["tab"]}
              key={item.label}
              style={{
                backgroundColor:
                  activeTabs === idx ? "var(--secondry-background)" : "",
                color: activeTabs === idx ? 'black':'white'
              }}
            >
              {item?.label}
            </div>
          );
        })}
      </div>
      <div className={styles["content"]}>{data?.[activeTabs]?.content}</div>
    </div>
  );
}


export default Tabs;
