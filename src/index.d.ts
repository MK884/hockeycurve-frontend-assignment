type priority = "high" | "medium" | "low";
type tabs = "all" | "done" | priority;

interface Task {
  name: string;
  description?: string;
  dueDate: string;
  priority: priority | string;
  isCompleted?: boolean;
}

interface DialogProps {
  header: React.ReactElement;
  body: React.ReactElement;
  footer: React.ReactElement;
  style?: React.CSSProperties;
  children: React.ReactNode;
  [key: string]: any;
}

interface FormProps {
  task?: Task;
  onClose?: () => void;
}

interface priorityOptions {
  priority: priority;
  color: string;
}

interface DropDowProps {
  options: priorityOptions[];
  onChange: (option: string) => any;
  value: string;
}

type State = {
  tasks: Task[];
};

type Action =
  | { type: "ADD_TASK"; payload: { tasks: Task[] } }
  | { type: "EDIT_TASK"; payload: { taskName: string; updatedTask: Partial<Task> }}
  | { type: "DELETE_TASK"; payload: { taskName: string } }
  | { type: "MARK_COMPLETED"; payload: { taskName: string } };
