import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit {

  public shopList = ['apple', 'grape', 'berry', 'banana'];
  public dataTpParent = ['shorts', 't-shirts', 'trousers', 'jeans'];

  @Output() shopListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData () {
    this.shopListEvent.emit(this.shopList);
  }

}
