import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  public urlT: string = 'http://localhost:3333/'
  public url: string =`${this.urlT}api/moments`

  constructor( private http: HttpClient ) { }

  getMOments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.url)
  }

  createMoment(FormData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.url, FormData);
  }
}
