import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task as TTask } from '@/shared/models/user';

@Component({
  selector: 'app-task',
  imports: [ZardButtonComponent],
  templateUrl: './task.html',
})
export class Task {
  public task = input<TTask>();
}
