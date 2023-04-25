import {Component, EventEmitter, Output} from '@angular/core';
import { GetContentService } from "../services/get-content.service";

@Component({
  selector: 'app-chage',
  templateUrl: './chage.component.html',
  styleUrls: ['./chage.component.scss']
})
export class ChageComponent {

  @Output() title = new EventEmitter<any>();

  newTitle = 'Este es el titulo modificado por otro componente';
  hasError = false;
  hasContent = false;

  constructor() {
  }

  changeTitle() {
    this.title.emit(this.newTitle);
  }

  callApi(){
    // this.service.getContent();
  }
}
