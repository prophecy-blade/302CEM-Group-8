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
  // newBook: boolean;
  cols: any[];
  selectedRoom: Room[];

  // room: Room = {};

  model = { Name: '', Description: '', Price: '' };

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
    ];
  }

  showDialogToAdd() {
    // this.newBook = true;
    // this.room = [];
    this.displayDialog = true;
  }

  adminSubmit() {
    this.firestore.addRoom(this.model);
    (this.model.Name = ''),
      (this.model.Description = ''),
      (this.model.Price = '');
    this.displayDialog = false;
  }

  onDelete(room) {
    this.firestore.deleteRoom(room);
  }
}
