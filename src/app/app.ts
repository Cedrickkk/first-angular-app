import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/shared/components/header/header';
import { User } from '@/shared/components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
}
