import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-admin-booking-management',
  templateUrl: './admin-booking-management.component.html',
  styleUrls: ['./admin-booking-management.component.css'],
  providers: [FirestoreService]
})
export class AdminBookingManagementComponent implements OnInit {
  arr: Booking[] = [];
  displayDialog: boolean;
  cols: any[];

  model = { check_in: '', check_out: '', room_id: '', user_id: '' };

  constructor(public firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getBooking().subscribe((booking: Booking[]) => {
      this.arr = booking;
      console.log(this.arr);
    });

    this.cols = [
      { field: 'check_in', header: 'Check In' },
      { field: 'check_out', header: 'Check Out' },
      { field: 'room_id', header: 'Room ID' },
      { field: 'user_id', header: 'User ID' }
    ];
  }

  showDialogToAdd() {
    // this.newBook = true;
    // this.bookedRoom = {};
    this.displayDialog = true;
  }

  adminSubmit() {
    this.firestore.addBooking(this.model);
    (this.model.check_in = ''),
      (this.model.check_out = ''),
      (this.model.room_id = ''),
      (this.model.user_id = '');
  }
}
