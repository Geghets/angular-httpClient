import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit, OnChanges, DoCheck {
  @ Input() productName: string;

  messageOutput = 'This is data From Child component in Parent component';
  @Output() messageOutputEvent = new EventEmitter<string>();

  ngOnChanges() {
    console.log('Change was detected');
  }

  constructor() {
  }

  ngOnInit(): void {
    alert('OnInit is working after OnChanges');
  }

  ngDoCheck() {
    console.log('OnCheck is working');
  }

  sendMessageOutput () {
    this.messageOutputEvent.emit(this.messageOutput);
  }

}
