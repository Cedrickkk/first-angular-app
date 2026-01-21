import { Component, input, output } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { iTask as ITask } from '@/shared/models/iTask';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [ZardButtonComponent, DatePipe],
  templateUrl: './task.html',
})
export class Task {
  public task = input.required<ITask>();
  public complete = output<string>();

  public onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
