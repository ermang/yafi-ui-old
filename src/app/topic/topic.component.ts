import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThreadDTO } from '../dto/thread-dto';
import { YafiService } from '../yafi.service';
import { ThreadPageDto } from '../dto/thread-page-dto';
import { CreateThreadDto } from '../dto/create-thread-dto';
import { TopicDto } from '../dto/topic-dto';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  activeTopicName: string;
  content: String;
  threadPageDto: ThreadPageDto;
  topicDtos: TopicDto[];
  pagingEnabled: boolean;
  totalPageCount: number;

  constructor(private yafiService: YafiService) {
    this.pagingEnabled = false;
    yafiService.missionAnnounced$.subscribe( searchValue => this.readThreadsFromTopic(searchValue));
  }

  ngOnInit() {
     this.yafiService.readRecentThreads().subscribe (threadPageDto => this.threadPageDto = threadPageDto);
     this.yafiService.readMostRecentlyUpdatedTopics().subscribe(topicDtos => this.topicDtos = topicDtos);
  }

  postThread() {
    console.debug('content=', this.content);
    const createThreadDto = new CreateThreadDto(this.content, this.activeTopicName);

    this.yafiService.createThread(createThreadDto).subscribe();
  }
  
  readRecentTopics() {
    this.yafiService.readMostRecentlyUpdatedTopics().subscribe(topicDtos => this.topicDtos = topicDtos);
  }  

  onPageChange(pageNumber: number) {
    console.log('onPageChange', pageNumber);
    this.yafiService.readThreadsFromTopic(this.yafiService.getActiveTopicName(), pageNumber-1).subscribe( threadPageDto => this.threadPageDto = threadPageDto);
  }

  readThreadsFromTopic(value: string) {
    console.debug('readThreadsFromTopic', value);
    this.yafiService.readThreadsFromTopic(value). subscribe( threadPageDto => {
      this.threadPageDto = threadPageDto;
      this.pagingEnabled = true;
      this.totalPageCount = this.threadPageDto.totalPageCount;
      console.log('TopicComponent.totalPageCount=', this.totalPageCount);
    });    
    this.activeTopicName = value;
    this.yafiService.setActiveTopicName(value);
    
  }

}
