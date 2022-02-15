import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecturer } from '../models/Lecturer';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getLecturers(): Observable<Lecturer[]> {
    return <Observable<Lecturer[]>>this.http.get(`${this.url}/lecturers`)
  } 
  
  getLanguages(): Observable<number[]> {
    return <Observable<number[]>>this.http.get(`${this.url}/languages`)
  }
}
