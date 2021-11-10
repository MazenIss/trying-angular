import { Component, OnInit,Input } from '@angular/core';
import { topic } from '../topic';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  @Input() topic? : topic;

  constructor() { }

  ngOnInit(): void {
  }

}
