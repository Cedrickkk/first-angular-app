import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task as ITask } from '@/shared/models/task';

@Component({
  selector: 'app-task',
  imports: [ZardButtonComponent],
  templateUrl: './task.html',
})
export class Task {
  public task = input<ITask>();
}
