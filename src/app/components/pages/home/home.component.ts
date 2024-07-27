import { Component, OnInit} from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public allMoments: Moment[] = [];
  public  moments: Moment[] = [];
  public baseApiUrl = this.momentService.urlT

  searchTerm: string = ''

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

  public search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    
    this.moments = this.allMoments.filter(item => {
      return item.title && item.title.toLowerCase().includes(value.toLowerCase());
    });
  }

}
