import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DatabaseService } from '../database.service';
import { FirestoreService } from '../firestore.service';
import { Room } from '../room';
import { AuthService } from '../core/auth.service';

// import { AngularFirestore } from '@angular/fire/firestore';

export interface TotalPax {
  value: number;
  viewValue: number;
}

// export interface TotalChildrens {
//   value: number;
//   viewValue: number;
// }

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css'],
  providers: [FirestoreService]
})
export class SuitesComponent implements OnInit {
  arr: Room[] = [];

  availableRoom: any = [];

  public filter: any = {
    noOfPax: 0,
    checkIn: "",
    checkOut: ""
  }
  filteredRoom: any = [];

  constructor(
    // public database: DatabaseService,
    // private afs: AngularFirestore,
    public firestore: FirestoreService,
    public auth: AuthService
  ) {
    // this.data = this.afs.collection(`hotelsystem/main_database`).valueChanges();
    // this.data = this.database.getBookingRoom();
    // this.roomList = this.firestore.room;
    // console.log(this.roomList);
  }

  ngOnInit() {
    this.firestore.getRoom().subscribe((room: Room[]) => {
      this.arr = room;
      console.log(this.arr);
      this.getAvailableRoom(this.arr);
    });
  }

  getAvailableRoom(room) {
    let available = this.availableRoom;
    for(var i = 0; i < room.length; i++) {
      if(room[i].status == undefined || room[i].status == null) {
        available.push(room[i]);
      }
    }
    console.log("Available Room: ", this.availableRoom);
  }
  
  totalAdults: any = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 }
  ];

  filterRoom() {
    console.log("Room Filter")
    let filterPax = this.filter.noOfPax;
    let dateIn = this.filter.checkIn;
    let dateOut = this.filter.checkOut;
    let available = this.availableRoom;
    let filter = this.filteredRoom;

    if(filterPax > 0) {
      console.log("Filter Pax");
      for(var i = 0; i < available.length; i ++) {
        if(available[i].stayin_amount >= filterPax) {
          filter.push(available[i]);
        }
      }
    }
    if(dateIn !== "") {
      // for(var i = 0; i < available.length; i ++) {
      //   if(available[i].stayin_amount == filterPax) {
      //     filter.push(available[i]);
      //   }
      // }
    }
    if(dateOut !== "") {
      // for(var i = 0; i < available.length; i ++) {
      //   if(available[i].stayin_amount == filterPax) {
      //     filter.push(available[i]);
      //   }
      // }
    }

    if(filter.length == 0) {
      this.filteredRoom = this.availableRoom;
      this.showDialog();
    } else {
      this.showDialog();
    }

  }

  // totalChildrens: TotalChildrens[] = [
  //   { value: 0, viewValue: 0 },
  //   { value: 1, viewValue: 1 },
  //   { value: 2, viewValue: 2 }
  // ];

  //   selectRoom(room: Room) {
  //     this.firestore.add({severity: 'info', summary: 'Room Selected', detail: 'Type:' + room.Name});
  // }

  booking(room, checkIN = null, checkOUT = null) {
    console.log(room);

    this.firestore.bookRoom(room.id, checkIN, checkOUT);
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
