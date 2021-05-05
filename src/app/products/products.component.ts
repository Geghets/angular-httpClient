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
    const array = [1, 5, 7, 2];

    // Edito will not let us use array as parameter without spread operator
    // const withoutSpread = Math.max(array);

    const withSpread = Math.max(...array);

    const values = {
      without_spread: 'Will not work or will Return NaN',
      with_spread: withSpread
    };

    return values;
  }

  changeInput() {
    this.dataFromParentComponent = 'Just changed input data if everything is ok you will se console from ngOnChange';
  }

}
