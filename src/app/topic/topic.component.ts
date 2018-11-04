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
  activeTopicName: string;  
  content:String;  
  threadPageDto: ThreadPageDto;
  topicDtos: TopicDto[];  

  constructor(private yafiService: YafiService) {     
  }

  ngOnInit() {
     this.yafiService.readRecentThreads().subscribe (threadPageDto => this.threadPageDto = threadPageDto);
     this.yafiService.readMostRecentlyUpdatedTopics().subscribe(topicDtos => this.topicDtos = topicDtos);
  }

  postThread() {    
    console.debug('content=', this.content);   
    let createThreadDto = new CreateThreadDto(this.content, this.activeTopicName);

    this.yafiService.createThread(createThreadDto).subscribe();
  }

  readThreadsFromTopic(topicDto: TopicDto) {
    console.debug('readThreadsFromTopic', topicDto);
    this.yafiService.readThreadsFromTopic(topicDto.name). subscribe( threadPageDto => this.threadPageDto = threadPageDto);
    this.activeTopicName = topicDto.name; 
    this.yafiService.setActiveTopicName(topicDto.name);
  }

  readRecentTopics() {
    this.yafiService.readMostRecentlyUpdatedTopics().subscribe(topicDtos => this.topicDtos = topicDtos);
  }

  onPageChange(threadPageDto: ThreadPageDto) {
    console.log("onPageChange", threadPageDto);
    this.threadPageDto = threadPageDto;
  }

}
