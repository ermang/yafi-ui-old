import { Component, OnInit, DoCheck } from '@angular/core';
import { YafiService } from '../yafi.service';
import { TopicDto } from '../dto/topic-dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topicDtos: TopicDto[];
  content: string;
  searchItem: string;

  constructor(private yafiService: YafiService) {
    this.topicDtos = new Array<TopicDto>();
   }

  ngOnInit() {
  }  

  onKey(value: string) {
    console.log("SearchComponent value=", value);
    if (value == this.searchItem)
      return;
    else if (this.topicDtosContainSearchItem(value)) {
     return;
    }//if (this.topicDtos.includes())  
    else {  
      this.yafiService.searchByTopicName(value).subscribe(topicDtos => {this.topicDtos = topicDtos; this.searchItem = value;});
    }
  }
  
  topicDtosContainSearchItem (value: string): boolean {
    for (let index = 0; index < this.topicDtos.length; index++) {
      if(this.topicDtos[index].name == value)
        return true;
    }
  }

}
