import { Component, input, output } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task as ITask } from '@/shared/models/task';

@Component({
  selector: 'app-task',
  imports: [ZardButtonComponent],
  templateUrl: './task.html',
})
export class Task {
  public task = input.required<ITask>();
  public complete = output<string>();

  public onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
