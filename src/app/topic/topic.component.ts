import { Component, OnInit } from '@angular/core';
import { ThreadDto } from '../thread-dto';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  name: String;
  threadDtos: ThreadDto[];
  threadCount: Number;

  constructor() {
    this.threadCount = 5;
    this.threadDtos = new Array<ThreadDto>();
    
    for (let index = 0; index < this.threadCount; index++) {
      this.threadDtos.push(new ThreadDto(1, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "topicName", "username",  1, "2018-12-31"));      
    }
   
  }

  ngOnInit() {
  }

}
