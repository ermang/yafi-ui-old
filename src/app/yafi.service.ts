import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ThreadPageDto } from './dto/thread-page-dto';
import { CreateThreadDto } from './dto/create-thread-dto';
import { TopicDto } from './dto/topic-dto';
import { ThreadDTO } from './dto/thread-dto';

@Injectable({
  providedIn: 'root'
})
export class YafiService {
  baseUrl = 'http://localhost:8080/';
  activeTopicName: string;

  constructor(private http: HttpClient) { }

  readThreadsFromTopic (topicName: String, page: number = 0): Observable<ThreadPageDto> {
    return this.http.get<ThreadPageDto>(this.baseUrl + 'topic/' + topicName + '?page=' + page);
  }

  readMostRecentlyUpdatedTopics(): Observable<TopicDto[]> {
    return this.http.get<TopicDto[]>(this.baseUrl + 'topics/recent');
  }

  readRecentThreads(): Observable<ThreadPageDto> {
    return this.http.get<ThreadPageDto>(this.baseUrl + 'threads/recent?page=0');
  }

  createThread(createThreadDto: CreateThreadDto) {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
      withCredentials: true
    };

    return this.http.post(this.baseUrl + 'thread', createThreadDto, httpOptions); // , httpOptions
  }

  login(username, password) {

    const t: string = username + ':' + password;
    const hat: string = 'Basic ' + btoa(t);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': hat
      },
    ),
    withCredentials: true
    };

    return this.http.post(this.baseUrl + 'login', null, httpOptions);
  }

  setActiveTopicName(activeTopicName: string) {
    this.activeTopicName = activeTopicName;
  }

  getActiveTopicName(): string {
    return this.activeTopicName;
  }
}
