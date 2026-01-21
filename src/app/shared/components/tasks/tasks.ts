import { Component, inject, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Task } from '@/shared/components/tasks/task/task';
import { iTask } from '@/shared/models/iTask';
import { ZardDialogService } from '@/shared/components/dialog/dialog.service';
import { TaskCreateForm } from '@/shared/components/tasks/create-form/task-create-form';
import { TasksService } from '@/shared/components/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [ZardButtonComponent, Task],
  templateUrl: './tasks.html',
})
export class Tasks {
  private taskService = inject(TasksService);
  private dialogService = inject(ZardDialogService);

  public userId = input<string>();
  public username = input<string>();
  public tasks = input<iTask[]>();

  public onCompleteTask(id: string) {
    const uid = this.userId?.() ?? '';
    this.taskService.removeTask(uid, id);
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
      } as iTask,
      zOkText: 'Create',
      zOnOk: (instance) => {
        const newTask = instance.form.value as iTask;
        const uid = this.userId?.() ?? '';
        this.taskService.addTask(uid, newTask);
      },
      zCustomClasses: 'max-w-xl!',
    });
  }
}
