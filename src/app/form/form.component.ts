import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input() form!: FormGroup
  @Output() onSubmit = new EventEmitter()

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.url[0].path)
  }

  isDisabled() {
    return this.form.invalid
  }

  isActiveRoute() {
    return this.route.snapshot.url[0].path === 'create'
  }
}
