import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/shared/components/header/header';
import { User } from '@/shared/components/user/user';
import { USERS_MOCK } from '@/shared/data/user.mock';
import { Tasks } from '@/shared/components/tasks/tasks';
import { type iUser as TUser } from '@/shared/models/iUser';
import { iTask } from '@/shared/models/iTask';
import { UserService } from '@/shared/components/user/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
})
export class App {
  private userService = inject(UserService);

  public users = this.userService.users;
  public selectedUser = this.userService.selectedUser;

  public onSelectUser(userId: string) {
    this.userService.selectUser(userId);
  }
}
