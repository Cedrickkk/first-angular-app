import { inject, Injectable } from '@angular/core';
import { UserService } from '@/shared/components/user/user.service';
import { iTask } from '@/shared/models/iTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private userService = inject(UserService);

  public addTask(userId: string, task: Omit<iTask, 'id'>) {
    const newTask: iTask = {
      ...task,
      id: crypto.randomUUID(),
    };

    const _user = this.userService.users().find((u) => u.id === userId);
    if (_user) {
      const updatedTasks = [..._user.tasks, newTask];
      this.userService.updateUserTasks(_user, updatedTasks);
    }
  }

  public removeTask(userId: string, taskId: string) {
    const _user = this.userService.users().find((u) => u.id === userId);
    if (_user) {
      const updatedTasks = _user.tasks.filter((t) => t.id !== taskId);
      this.userService.updateUserTasks(_user, updatedTasks);
    }
  }
}
