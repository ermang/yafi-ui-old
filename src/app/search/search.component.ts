import { Component, OnInit, DoCheck} from '@angular/core';
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
  prevSearchItem: string;
  

  constructor(private yafiService: YafiService) {
    this.topicDtos = new Array<TopicDto>();
    this.searchItem = '';
   }

  ngOnInit() {
  }  

  onKey(value: KeyboardEvent) {
    console.log('key=', value.key);
    console.log('code=', value.code);
    const charCode  = value.key.length == 1 ? value.key.charCodeAt(0) : 0; //if user pressed a single key get charCode
    console.log('charCode', charCode);

    if (value.key == 'Enter') /*enter*/ {
     console.log('typed Enter');
     this.yafiService.search(this.content);     
    }
    else if (value.key == 'Backspace') /*backspace*/ {
      console.log('typed Backspace');
      this.yafiService.searchByTopicName(this.content).subscribe(topicDtos => this.topicDtos = topicDtos);
    }   
    else if ((charCode > 47 && charCode < 58) || // numeric (0-9)
        (charCode > 64 && charCode < 91) || // upper alpha (A-Z)
        (charCode > 96 && charCode < 123)) { // lower alpha (a-z)
        this.searchItem += value.key;
        this.yafiService.searchByTopicName(this.content).subscribe(topicDtos => this.topicDtos = topicDtos);
      }     
      else {
        //do nothing
      }

    }
  
}
