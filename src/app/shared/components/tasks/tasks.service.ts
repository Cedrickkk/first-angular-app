import { inject, Injectable } from '@angular/core';
import { UserService } from '@/shared/components/user/user.service';
import { iTask } from '@/shared/models/iTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private userService = inject(UserService);

  addTask(userId: string, task: iTask) {
    const _user = this.userService.users().find((u) => u.id === userId);
    if (_user) {
      const updatedTasks = [..._user.tasks, task];
      this.userService.updateUserTasks(_user, updatedTasks);
    }
  }

  removeTask(userId: string, taskId: string) {
    const _user = this.userService.users().find((u) => u.id === userId);
    if (_user) {
      const updatedTasks = _user.tasks.filter((t) => t.id !== taskId);
      this.userService.updateUserTasks(_user, updatedTasks);
    }
  }
}
