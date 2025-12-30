import { Component, computed, signal } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { USERS_MOCK } from '@/shared/data/user.mock';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  public randomUserTraditional =
    USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)];

  public randomUserSignal = signal(
    USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)],
  );

  /**
   * Using getters for computed values before Signals
   */
  public get imagePathGetter() {
    return '/images/' + this.randomUserTraditional.image;
  }

  /**
   * Using computed for computed values after Signals
   */
  public imagePathComputed = computed(
    () => '/images/' + this.randomUserSignal().image,
  );

  public onSelectUser() {
    this.randomUserSignal.set(
      USERS_MOCK[Math.floor(Math.random() * USERS_MOCK.length)],
    );
  }
}
