import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Moment } from '../../Moment';

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

  /*Enviando envento*/
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string;

  @Input() momentData: Moment | null = null;

  private formBuilder = inject(FormBuilder)

  protected momentForm = this.formBuilder.group({
    id: [this.momentData ? this.momentData.id : ''],
    title: [this.momentData ? this.momentData.title : '', Validators.required],
    description: [this.momentData ? this.momentData.description : '', Validators.required],
    image: [null as File | null],
  })

  /*Pegando imagem selecionada*/
  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    this.momentForm.patchValue({ image: file})
  }

  async submit() {

    if (this.momentForm.invalid) {
      return ;
    }

    const momentValue = this.momentForm.value as Partial<Moment>
    console.log(this.momentForm.value)

    this.onSubmit.emit(momentValue as Moment)
  }
}
