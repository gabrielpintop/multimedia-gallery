import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multimedia-details',
  templateUrl: './multimedia-details.component.html',
  styleUrls: ['./multimedia-details.component.css']
})
export class MultimediaDetailsComponent implements OnInit {
  @Input() multimedia;

  @Output() private closeModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.closeModal.emit(true);
  }
}
