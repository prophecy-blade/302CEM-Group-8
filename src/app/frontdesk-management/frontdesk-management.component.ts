import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-frontdesk-management',
  templateUrl: './frontdesk-management.component.html',
  styleUrls: ['./frontdesk-management.component.css'],
  providers: [FirestoreService]
})
export class FrontdeskManagementComponent implements OnInit {
  constructor(public firestore: FirestoreService) {}

  ngOnInit() {
    // this.firestore.getRoom().subscribe((room: Room[]) => {
    //   this.arr = room;
    //   console.log(this.arr);
    // });
    // this.cols = [
    //   { field: 'Name', header: 'Room Type' },
    //   { field: 'Description', header: 'Description' },
    //   { field: 'Price', header: 'Price' }
    // ];
  }
}
