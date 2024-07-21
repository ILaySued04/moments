import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  protected url: string = 'http://localhost:3333/api/moments'

  constructor( private http: HttpClient ) { }

  createMoment(FormData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.url, FormData);
  }
}
