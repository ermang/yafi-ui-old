import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThreadDTO } from '../dto/thread-dto';
import { YafiService } from '../yafi.service';
import { ThreadPageDto } from '../dto/thread-page-dto';
import { CreateThreadDto } from '../dto/create-thread-dto';

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

  constructor(private yafiService: YafiService) { 
    this.name = 'topic1';  
  }

  ngOnInit() {
    //  this.yafiService.readThreadsFromTopic(). subscribe( x => {this.threadPageDto = {threadDtos: x.threadDTOs, totalPageCount: x.totalPageCount}; console.log(this.threadPageDto);});    
    
     this.yafiService.readThreadsFromTopic(). subscribe( threadPageDto => this.threadPageDto = threadPageDto);
  }

  postThread() {
    console.debug('You are my hero!');
    console.debug('content=', this.content);
    //createThreadDto: CreateThreadDto;
    let createThreadDto = new CreateThreadDto(this.content, this.name);

    this.yafiService.createThread(createThreadDto).subscribe();
  }

}
