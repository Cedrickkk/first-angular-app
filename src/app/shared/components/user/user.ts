import { Component, computed, input, output } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { iUser } from '@/shared/models/iUser';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  public user = input.required<iUser>();
  public selected = input.required<boolean>();

  public imagePath = computed(() => '/images/' + this.user()?.image);

  public select = output<string>();

  public onSelectUser() {
    this.select.emit(this.user().id);
  }
}
