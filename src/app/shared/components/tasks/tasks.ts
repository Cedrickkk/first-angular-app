import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task } from '@/shared/components/tasks/task/task';
import { type Task as TTask } from '@/shared/models/user';

@Component({
  selector: 'app-tasks',
  imports: [ZardButtonComponent, Task],
  templateUrl: './tasks.html',
})
export class Tasks {
  public name = input<string>();
  public tasks = input<TTask[]>();
}
