import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { Z_MODAL_DATA } from '@/shared/components/dialog/dialog.service';

@Component({
  selector: 'app-task-create-form',
  imports: [ReactiveFormsModule, ZardInputDirective],
  templateUrl: './task-create-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateForm implements AfterViewInit {
  private zData = inject(Z_MODAL_DATA);

  public form = new FormGroup({
    id: new FormControl(),
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
