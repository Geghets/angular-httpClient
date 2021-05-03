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


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  receiveMessage($event) {
    this.messageFromChildComponent = $event;
  }

  productChange() {
    this.data.changeMessage(this.modifiedMessage);
  }

}
