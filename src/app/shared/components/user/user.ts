import { Component, computed, input } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  public avatar = input.required<string>();
  public name = input.required<string>();

  public imagePath = computed(() => '/images/' + this.avatar());
}
