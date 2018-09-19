import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThreadDTO } from '../dto/thread-dto';
import { YafiService } from '../yafi.service';
import { ThreadPageDto } from '../dto/thread-page-dto';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  name: String;
 
  
  threadPageDto: ThreadPageDto;

  constructor(private yafiService: YafiService) {   
  }

  ngOnInit() {
    //  this.yafiService.readThreadsFromTopic(). subscribe( x => {this.threadPageDto = {threadDtos: x.threadDTOs, totalPageCount: x.totalPageCount}; console.log(this.threadPageDto);});    
    
     this.yafiService.readThreadsFromTopic(). subscribe( threadPageDto => this.threadPageDto = threadPageDto);
  }

}
