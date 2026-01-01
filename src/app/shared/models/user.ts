import { Task } from '@/shared/models/task';

export interface User {
  id: string;
  name: string;
  image: string;
  tasks: Task[];
}
