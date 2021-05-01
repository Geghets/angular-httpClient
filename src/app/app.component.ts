import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Test';
  message = 'welcome to test';
  date = new Date();
  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
