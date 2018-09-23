import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ThreadPageDto } from "./dto/thread-page-dto";
import { CreateThreadDto } from "./dto/create-thread-dto";

@Injectable({
  providedIn: 'root'
})
export class YafiService {
  baseUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  readThreadsFromTopic (): Observable<ThreadPageDto> {
    return this.http.get<ThreadPageDto>(this.baseUrl + 'topic/topic1?page=0');
  }

  createThread(createThreadDto: CreateThreadDto) {

    var t = 'user' + ':' + 'user';
    var hat = 'Basic ' + btoa(t);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': hat
      })
    };

    return this.http.post(this.baseUrl + 'thread', createThreadDto, httpOptions);
  }
}
