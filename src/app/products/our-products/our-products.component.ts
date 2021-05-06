import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @ Input() productName: string;

  public messageOutput = 'This is data From Child component in Parent component';
  @Output() messageOutputEvent = new EventEmitter<string>();

  ngOnChanges($event) {
    console.log('Change was detected', $event);
  }

  constructor() {
  }

  ngOnInit(): void {
    alert('OnInit is working after OnChanges');
  }

  ngAfterContentInit() {
    console.log('Component has been initialized');
  }

  ngAfterContentChecked() {
    console.log('If you see this that means that component has been initialized');
  }

  ngAfterViewInit() {
    console.log('started initialize view');
  }

  ngAfterViewChecked() {
    console.log('View has been initialized ');
  }

  ngDoCheck() {
    console.log('OnCheck is working');
  }

  sendMessageOutput () {
    this.messageOutputEvent.emit(this.messageOutput);
  }

}
