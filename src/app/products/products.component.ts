import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public dataFromParentComponent = 'This is data from parent component in child component';
  public messageFromChildComponent;

  constructor() { }

  ngOnInit(): void {}

  receiveMessage($event) {
    this.messageFromChildComponent = $event;
  }
}
