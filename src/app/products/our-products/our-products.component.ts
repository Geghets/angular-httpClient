import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {
  @ Input() productName: string;

  messageOutput = 'This is data From Child component in Parent component';
  @Output() messageOutputEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessageOutput () {
    this.messageOutputEvent.emit(this.messageOutput);
  }

}
