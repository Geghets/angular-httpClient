import {Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {OurShopComponent} from './our-shop/our-shop.component';
import {DataService} from '../services/data/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {
  public products;
  public dataFromChild;
  public message: string;
  public modifiedMessage = 'Just Modified data from Shop Component';

  @ViewChild(OurShopComponent) child;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  ngAfterViewInit() {
    this.dataFromChild = this.child.dataTpParent;
  }

  receiveData ($event) {
    this.products = $event;
  }

  shopChange() {
    this.data.changeMessage(this.modifiedMessage);
  }
}
