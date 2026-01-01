import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task } from '@/shared/components/tasks/task/task';
import { Task as ITask } from '@/shared/models/task';

@Component({
  selector: 'app-tasks',
  imports: [ZardButtonComponent, Task],
  templateUrl: './tasks.html',
})
export class Tasks {
  public name = input<string>();
  public tasks = input<ITask[]>();
}
