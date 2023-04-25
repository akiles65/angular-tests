import {Component, OnInit} from '@angular/core';
import { ContentService } from "./services/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title: any;
  body: any;
  footer: any;

  constructor(private service: ContentService) {
    this.loadingContent();
  }

  ngOnInit(): void {
  }

  loadingContent() {
    this.title = this.service.getTitle();
    this.body = this.service.getBody();
    this.footer = this.service.getBody();
  }

  changeTitle(newTitle: any) {
    this.title = this.service.changeTitle(newTitle);
  }
}
