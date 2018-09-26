import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ThreadPageDto } from "./dto/thread-page-dto";
import { CreateThreadDto } from "./dto/create-thread-dto";
import { TopicDto } from "./dto/topic-dto";

@Injectable({
  providedIn: 'root'
})
export class YafiService {
  baseUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  readThreadsFromTopic (topicName: String): Observable<ThreadPageDto> {
    return this.http.get<ThreadPageDto>(this.baseUrl + 'topic/' + topicName + '?page=0');
  }

  readMostRecentlyUpdatedTopics(): Observable<TopicDto[]> {
    return this.http.get<TopicDto[]>(this.baseUrl + 'topics/recent');
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
