import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { MessagensService } from '../../../services/messagens.service';

@Component({
  selector: 'app-edit-moment',
  standalone: true,
  imports: [
    NgIf,
    MomentFormComponent
],
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent {
  moment!: Moment;
  btnText: string = 'Editar';

  constructor(
    private momentSetvice: MomentService, 
    private messagesService: MessagensService,
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentSetvice.getMoment(id).subscribe((item) => this.moment = item.data)
  }

  async editHandler(momentData: Moment) {
    const id = this.moment.id;
    const formData = new FormData();
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentSetvice.updateMoment(id!, formData).subscribe();

    this.messagesService.add(`Momento ${id} foi atualizado com sucesso`);

    this.router.navigate(['/']);

  }
}
