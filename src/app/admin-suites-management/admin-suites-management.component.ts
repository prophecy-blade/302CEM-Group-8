import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Room } from '../room';

@Component({
  selector: 'app-admin-suites-management',
  templateUrl: './admin-suites-management.component.html',
  styleUrls: ['./admin-suites-management.component.css'],
  providers: [FirestoreService]
})
export class AdminSuitesManagementComponent implements OnInit {
  arr: Room[] = [];
  displayDialog: boolean;
  newBook: boolean;
  cols: any[];

  constructor(public firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getRoom().subscribe((room: Room[]) => {
      this.arr = room;
      console.log(this.arr);
    });

    this.cols = [
      { field: 'Name', header: 'Room Type' },
      { field: 'Description', header: 'Description' },
      { field: 'Price', header: 'Price' }
      // { field: 'pax', header: 'Pax' }
    ];
  }

  showDialogToAdd() {
    this.newBook = true;
    // this.bookedRoom = {};
    this.displayDialog = true;
  }
}
