import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Test';
  message = 'welcome to test';
  date = new Date();
  constructor(private router: Router, private store: AngularFirestore) {}

  ngOnInit() {
    console.log(this.store);
    // this.afs.collection('products').snapshotChanges().subscribe(data => {
    //   console.log('da', data);
    // });
  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
