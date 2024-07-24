import { Component, OnInit} from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { environment } from '../../../../environments/environment';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public allMoments: Moment[] = [];
  public  moments: Moment[] = [];
  public baseApiUrl = this.momentService.url

  constructor (private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMOments().subscribe( item => {
      const data = item.data
      data.map(item => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allMoments = data;
      this.moments = data
    })
  }

  // todo seach

}
