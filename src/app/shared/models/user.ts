export interface User {
  id: string;
  name: string;
  image: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
}
