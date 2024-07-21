import { NgIf } from '@angular/common';
import { Component, inject, Input, OnInit} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Input() btnText!: string;

  private formBuilder = inject(FormBuilder)

  protected momentForm = this.formBuilder.group({
    id: [''],
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: [''],
  })

  async submit() {

    if (this.momentForm.invalid) {
      return ;
    }

    console.log("enviou")
  }
}
