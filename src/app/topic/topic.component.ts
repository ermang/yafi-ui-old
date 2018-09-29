import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThreadDTO } from '../dto/thread-dto';
import { YafiService } from '../yafi.service';
import { ThreadPageDto } from '../dto/thread-page-dto';
import { CreateThreadDto } from '../dto/create-thread-dto';
import { TopicDto } from "../dto/topic-dto";
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  name: String;

  //asd
  content:String;
 
  
  threadPageDto: ThreadPageDto;

  topicDtos: TopicDto[];

  //threadDtos: ThreadDTO[];

  constructor(private yafiService: YafiService) { 
    this.name = 'topic1';  
  }

  ngOnInit() {
     this.yafiService.readRecentThreads().subscribe (threadPageDto => this.threadPageDto = threadPageDto);
     this.yafiService.readMostRecentlyUpdatedTopics().subscribe(topicDtos => this.topicDtos = topicDtos);
  }

  postThread() {
    console.debug('You are my hero!');
    console.debug('content=', this.content);
   
    let createThreadDto = new CreateThreadDto(this.content, this.name);

    this.yafiService.createThread(createThreadDto).subscribe();
  }

  readThreadsFromTopic(topicDto: TopicDto) {
    console.debug('readThreadsFromTopic', topicDto);
    this.yafiService.readThreadsFromTopic(topicDto.name). subscribe( threadPageDto => this.threadPageDto = threadPageDto);
  }

}
