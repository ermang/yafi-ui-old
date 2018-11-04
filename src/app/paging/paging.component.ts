import { Component, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { YafiService } from "../yafi.service";
import { ThreadPageDto } from '../dto/thread-page-dto';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit, DoCheck {
  pages: number[];
  currentPage: number;
  oldCurrentPage: number;
  @Output() pageChanged = new EventEmitter<ThreadPageDto>();

  constructor(private yafiService: YafiService) {     
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.currentPage!== this.oldCurrentPage) {
      console.log("this.currentPage", this.currentPage);
      this.oldCurrentPage = this.currentPage;      
      this.yafiService.readThreadsFromTopic(this.yafiService.getActiveTopicName(), this.currentPage). subscribe( threadPageDto => this.pageChanged.emit(threadPageDto));
    }
  }  

}
