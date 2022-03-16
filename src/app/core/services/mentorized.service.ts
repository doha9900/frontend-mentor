import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mentorized } from '../models/mentorized.model';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Mentorized[]> {
    return this.http.get<Mentorized[]>(environment.API + 'mentorizeds/');
  }
  getOne(id):Observable<Mentorized>{
    return this.http.get(environment.API+'mentorizeds/'+id);
  }
  addMentor(data): Observable<any> {
    return this.http.post(environment.API + 'mentorizeds', data);
  }
  deleteMentor(id): Observable<any> {
    return this.http.delete(environment.API + 'mentorizeds/' + id);
  }
  editMentor(id,mentorized):Observable<any>{
    return this.http.put(environment.API+'mentorizeds/'+id,mentorized);
  }
}