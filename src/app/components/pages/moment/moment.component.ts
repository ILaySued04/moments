import { Component, Inject, OnInit } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../Comment';
import { MessagensService } from '../../../services/messagens.service';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  public baseApiUrl = this.momentService.urlT

  protected commentForm = this.formBuilder.group({
    text: ['', Validators.required],
    username: ['', Validators.required],
  })

  constructor(
    private momentService: MomentService, 
    private commentService: CommentService,
    private messageService: MessagensService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder  // Injete o FormBuilder aqui
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data);
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.router.navigate(['/']);
  }

  async onSubmit (formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return ;
    }

    const data = this.commentForm.value as Comment

    data.momentId = Number(this.moment!.id);

    await this.commentService.createComment(data).subscribe((item) => {
      this.moment?.comments!.push(item.data)
    });

    this.messageService.add('Comentário adicionado com sucesso!')

    // Reset form
    this.commentForm.reset();

    formDirective.resetForm();
  
  }
}
