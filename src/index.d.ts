type priority = 'high' | 'medium' | 'low'
type tabs = 'all' | 'done' | priority;


interface Task {
    name: string;
    description: string;
    dueDate: string;
    priority: priority;
}