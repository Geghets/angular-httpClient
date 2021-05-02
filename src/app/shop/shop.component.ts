import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {OurShopComponent} from './our-shop/our-shop.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public products;

  constructor() { }

  ngOnInit(): void {
  }

  receiveData ($event) {
    this.products = $event;
  }
}
