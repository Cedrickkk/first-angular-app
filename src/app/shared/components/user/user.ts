import { Component, computed, input, output } from '@angular/core';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-user',
  imports: [ZardAvatarComponent, ZardButtonComponent],
  templateUrl: './user.html',
})
export class User {
  public id = input.required<string>();
  public avatar = input.required<string>();
  public name = input.required<string>();
  public imagePath = computed(() => '/images/' + this.avatar());
  public select = output<string>();

  public onSelectUser() {
    this.select.emit(this.id());
  }
}
