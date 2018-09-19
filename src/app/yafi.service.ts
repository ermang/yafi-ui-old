import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ThreadPageDto } from "./dto/thread-page-dto";

@Injectable({
  providedIn: 'root'
})
export class YafiService {
  baseUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  readThreadsFromTopic (): Observable<ThreadPageDto> {
    return this.http.get<ThreadPageDto>(this.baseUrl + 'topic/topic1?page=0')
  }
}
