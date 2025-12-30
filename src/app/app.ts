import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/shared/components/header/header';
import { User } from '@/shared/components/user/user';
import { USERS_MOCK } from '@/shared/data/user.mock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
})
export class App {
  public users = USERS_MOCK;
}
