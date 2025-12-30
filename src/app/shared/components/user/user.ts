import { Component } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { USERS_MOCK } from '@/shared/data/user.mock';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  public randomUser = USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)];

  /**
   * Using getters for computed values
   *
   */
  public get imagePath() {
    return '/images/' + this.randomUser.image;
  }

  public onSelectUser() {
    this.randomUser = USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)];
  }
}
