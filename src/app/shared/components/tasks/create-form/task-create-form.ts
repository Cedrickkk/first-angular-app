import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { Z_MODAL_DATA } from '@/shared/components/dialog/dialog.service';
import { ZardDatePickerComponent } from '@/shared/components/date-picker/date-picker.component';
import { iTask } from '@/shared/models/iTask';

@Component({
  selector: 'app-task-create-form',
  imports: [ReactiveFormsModule, ZardInputDirective, ZardDatePickerComponent],
  templateUrl: './task-create-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateForm implements AfterViewInit {
  private zData: iTask = inject(Z_MODAL_DATA);

  public form = new FormGroup({
    title: new FormControl(),
    summary: new FormControl(),
    dueDate: new FormControl(),
  });

  ngAfterViewInit(): void {
    if (this.zData) {
      this.form.patchValue(this.zData);
    }
  }
}
