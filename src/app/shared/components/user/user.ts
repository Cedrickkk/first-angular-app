import { Component, Input } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) public avatar!: string;
  @Input({ required: true }) public name!: string;

  public get imagePath() {
    return '/images/' + this.avatar;
  }
}
