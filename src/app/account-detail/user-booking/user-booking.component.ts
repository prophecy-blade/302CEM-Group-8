import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {
  displayDialog: boolean;

  // bookedRoom: Car = {};

  // selectedRoom: Car;

  newBook: boolean;

  // bookedRooms: Car[];

  cols: any[];

  constructor() {}

  ngOnInit() {
    // this.carService.getCarsSmall().then(bookedRooms => this.bookedRooms = bookedRooms);

    this.cols = [
      { field: 'room-type', header: 'Room Type' },
      { field: 'check-in', header: 'Check-in Date' },
      { field: 'check-out', header: 'Check-out Date' },
      { field: 'pax', header: 'Pax' }
    ];
  }

  showDialogToAdd() {
    this.newBook = true;
    // this.bookedRoom = {};
    this.displayDialog = true;
  }

  // save() {
  //     let bookedRooms = [...this.bookedRooms];
  //     if (this.newCar)
  //     bookedRooms.push(this.bookedRooms);
  //     else
  //     bookedRooms[this.bookedRooms.indexOf(this.selectedRoom)] = this.bookedRoom;

  //     this.bookedRooms = bookedRooms;
  //     this.bookedRoom = null;
  //     this.displayDialog = false;
  // }

  // delete() {
  //     let index = this.bookedRooms.indexOf(this.selectedRoom);
  //     this.bookedRooms = this.bookedRooms.filter((val, i) => i != index);
  //     this.bookedRoom = null;
  //     this.displayDialog = false;
  // }

  // onRowSelect(event) {
  //     this.newCar = false;
  //     this.bookedRoom = this.cloneCar(event.data);
  //     this.displayDialog = true;
  // }

  // cloneCar(c: Car): Car {
  //     let car = {};
  //     for (let prop in c) {
  //         car[prop] = c[prop];
  //     }
  //     return car;
  // }
}
