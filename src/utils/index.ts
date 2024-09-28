import { taskPriorityLevels } from "./constant";

export const formateDate = ({
  date,
  isHeader = true,
}: {
  date: string;
  isHeader?: boolean;
}) => {
  const dateObj = new Date(date);

  const localDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  if (isHeader) return localDate;

  const localTime = dateObj
    .toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  return `${localDate} - ${localTime}`;
};

export const sortByPriorityAndDueDate = (task: Task[]) => {
  if (!task.length) return null;
  return task.sort((a, b) => {
    if (taskPriorityLevels[a.priority] !== taskPriorityLevels[b.priority]) {
      return taskPriorityLevels[a.priority] - taskPriorityLevels[b.priority];
    }

    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return dateA - dateB;
  });
};
