import {Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit, OnDestroy {

  public dataObservable = Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    setTimeout(() => {
      observer.next(3);
      observer.complete();
    }, 1000);
  });

  public shopList = ['apple', 'grape', 'berry', 'banana'];
  public dataTpParent = ['shorts', 't-shirts', 'trousers', 'jeans'];
  public subs = [];

  @Output() shopListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData () {
    this.shopListEvent.emit(this.shopList);
  }

  getOservable () {
    this.subs.push(this.dataObservable.subscribe({
      next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
  }));
  }

  ngOnDestroy() {

  }
}
