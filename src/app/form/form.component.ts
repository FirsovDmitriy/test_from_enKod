import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() form!: FormGroup
  @Output() onSubmit = new EventEmitter()

  constructor() {}

  handleSubmit(event: Event) {
    this.onSubmit.emit(event)
  }

  isDisabled() {
    return this.form?.get('name')?.invalid ||
      this.form?.get('description')?.invalid ||
      this.form?.get('imageUrl')?.invalid
  }
}
