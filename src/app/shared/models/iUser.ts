import { iTask } from '@/shared/models/iTask';

export interface iUser {
  id: string;
  name: string;
  image: string;
  tasks: iTask[];
}
