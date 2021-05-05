import { Component, OnInit} from '@angular/core';
import {DataService} from '../services/data/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public dataFromParentComponent = 'This is data from parent component in child component';
  public messageFromChildComponent;
  public message: string;
  public modifiedMessage = 'Just Modified data from Product Component';
  public spreadValues;


  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.spreadValues = this.spreadOperator();
  }

  receiveMessage($event) {
    this.messageFromChildComponent = $event;
  }

  productChange() {
    this.data.changeMessage(this.modifiedMessage);
  }

  spreadOperator () {
    const withSpread = Math.max(...[1, 5, 7, 2]);

    return {
      without_spread: 'Will not work or will Return NaN',
      with_spread: withSpread
    };
  }

  changeInput() {
    this.dataFromParentComponent = 'Just changed input data if everything is ok you will se console from ngOnChange';
  }

}
