import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { YafiService } from '../yafi.service';
import { ThreadPageDto } from '../dto/thread-page-dto';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit, DoCheck {
  _totalPageCount: number;
  totalPageCountList: number[];
  currentPage: number;
  oldCurrentPage: number;
  _pagingEnabled: boolean
  @Output() pageChanged = new EventEmitter<number>();  
  
  constructor(private yafiService: YafiService) {
    this.pagingEnabled = false;
    this._totalPageCount = 0;
    this.totalPageCountList = [];    
    this.currentPage = 1;
    this.oldCurrentPage = 1;
  }

  ngOnInit() {
  }

  @Input()
  set pagingEnabled(state: boolean) {
    this._pagingEnabled = state;
  }

  @Input()
  set totalPageCount(totalPageCount: number) {
    this._totalPageCount = totalPageCount;
    this.currentPage = 1;
   
    console.log('this._totalPageCount=', this._totalPageCount);
    this.totalPageCountList = Array(this._totalPageCount);
    for (let index = 0; index < this.totalPageCountList.length; index++)
      this.totalPageCountList[index] = index+1; 
  }

  ngDoCheck() {
    if (this.currentPage !== this.oldCurrentPage) {
      console.log('this.currentPage', this.currentPage);
      this.oldCurrentPage = this.currentPage; 
      this.pageChanged.emit(this.currentPage);
    }
  }

}
