import {Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {OurShopComponent} from './our-shop/our-shop.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {
  public products;
  public dataFromChild;

  @ViewChild(OurShopComponent) child;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataFromChild = this.child.dataTpParent;
  }

  receiveData ($event) {
    this.products = $event;
  }
}
