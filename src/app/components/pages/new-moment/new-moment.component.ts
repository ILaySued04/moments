import { Component } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagensService } from '../../../services/messagens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [
    MomentFormComponent
  ],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar';

  constructor ( private momentService: MomentService, private mesageService: MessagensService, private router: Router) {}

  async createHandler( moment: Moment ) {
    const formData = new FormData();

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if (moment.image) {
      formData.append('image', moment.image)
    }

    //todo

    await this.momentService.createMoment(formData).subscribe();

    this.mesageService.add("Momento Adicionado com Sucesso!")

    this.router.navigate(['/']);
  }
}
