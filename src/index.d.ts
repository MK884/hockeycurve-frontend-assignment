type priority = "high" | "medium" | "low";
type tabs = "all" | "done" | priority;

interface Task {
  name: string;
  description: string;
  dueDate: string;
  priority: priority;
}

interface DialogProps {
  header: React.ReactElement;
  body: React.ReactElement;
  footer: React.ReactElement;
  style?: React.CSSProperties;
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
  onChange: (option:string)=>void;
  value:string;
}