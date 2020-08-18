import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() item: any;
  @Input() item1: any;
  @Output() newsMsg = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg(): void
  {
    this.newsMsg.emit({msg: '这是发给父组件的消息'});
  }
}
