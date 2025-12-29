import { Component } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { USERS_MOCK } from '@/shared/data/user.mock';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent],
  templateUrl: './user.html',
})
export class User {
  randomUser = USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)];
}
