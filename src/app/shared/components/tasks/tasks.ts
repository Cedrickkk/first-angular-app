import { Component, inject, input, output } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task } from '@/shared/components/tasks/task/task';
import { iTask } from '@/shared/models/iTask';
import { ZardDialogService } from '@/shared/components/dialog/dialog.service';
import { TaskCreateForm } from '@/shared/components/tasks/create-form/task-create-form';

@Component({
  selector: 'app-tasks',
  imports: [ZardButtonComponent, Task],
  templateUrl: './tasks.html',
})
export class Tasks {
  public name = input<string>();
  public tasks = input<iTask[]>();
  public taskCompleted = output<string>();
  private dialogService = inject(ZardDialogService);
  public addTask = output<iTask>();

  public onCompleteTask(id: string) {
    this.taskCompleted.emit(id);
  }

  public onOpenDialog() {
    this.dialogService.create({
      zTitle: 'New Task',
      zDescription: 'Create a new task for your project',
      zContent: TaskCreateForm,
      zData: {
        id: '',
        title: '',
        dueDate: '',
        summary: '',
      },
      zOkText: 'Create',
      zOnOk: (instance) => {
        const newTask = instance.form.value as iTask;
        this.addTask.emit(newTask);
      },
      zWidth: '425px',
    });
  }
}
