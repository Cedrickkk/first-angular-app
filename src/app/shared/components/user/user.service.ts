import { computed, Injectable, signal } from '@angular/core';
import { iUser } from '@/shared/models/iUser';
import { USERS_MOCK } from '@/shared/data/user.mock';
import { iTask } from '@/shared/models/iTask';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSignal = signal<iUser[]>(USERS_MOCK);
  public users = this.usersSignal.asReadonly();

  private selectedUserId = signal<string | null>(null);
  public selectedUser = computed(() =>
    this.users().find((u) => u.id === this.selectedUserId()),
  );

  selectUser(id: string | null) {
    this.selectedUserId.set(id);
  }

  updateUserTasks(user: iUser | null, newTasks: iTask[]) {
    this.usersSignal.update((users) => {
      return users.map((u) =>
        u.id === user?.id ? { ...u, tasks: newTasks } : u,
      );
    });
  }
}
