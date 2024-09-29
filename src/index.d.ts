type priority = "high" | "medium" | "low";
type tabs = "all" | "done" | priority;

interface Task {
  id: string;
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
  isNewTask?:boolean;
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
  | { type: "ADD_TASK"; payload: { tasks: Task[], isAppended?:boolean } }
  | { type: "EDIT_TASK"; payload: { id: string; updatedTask: Partial<Task> }}
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "MARK_COMPLETED"; payload: { id: string } }
  | { type: "SNOOZE_TASK"; payload: { id: string, newDueDate:string } };


interface SwitchProps {
    styles?: React.CSSProperties;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean;
    [key:string]:any
}