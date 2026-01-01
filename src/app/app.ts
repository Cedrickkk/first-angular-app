import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/shared/components/header/header';
import { User } from '@/shared/components/user/user';
import { USERS_MOCK } from '@/shared/data/user.mock';
import { Tasks } from '@/shared/components/tasks/tasks';
import { type User as TUser } from '@/shared/models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
})
export class App {
  public users = USERS_MOCK;
  public selectedUser = signal<TUser | undefined>(this.users[0]);

  public onSelectUser(id: string) {
    const user = this.users.find((user) => user.id == id);
    this.selectedUser.set(user);
  }
}
