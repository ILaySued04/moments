import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../Response';
import { Comment } from '../Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlT: string = 'http://localhost:3333/'
  private url: string =`${this.urlT}api/moments`

  constructor(private http: HttpClient) { }

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.url}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }
}
