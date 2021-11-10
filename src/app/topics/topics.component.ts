import { Component, OnInit } from '@angular/core';
import { topic } from '../topic';
import { TOPICS } from '../mock-topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
   selectedtopic?:topic;
   topics =TOPICS;
  constructor() { }

  ngOnInit(): void {
  
  }
  onSelect(Topic:topic){
    this.selectedtopic=Topic;
  }

}
