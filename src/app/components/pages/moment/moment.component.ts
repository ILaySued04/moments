import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [
  ],
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  public baseApiUrl = this.momentService.urlT

  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data);
  }

  removeHandler(id: number) {
   this.momentService.removeMoment(id).subscribe();

    this.router.navigate(['/']);
  }
}
