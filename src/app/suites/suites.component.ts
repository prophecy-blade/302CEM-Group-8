import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DatabaseService } from '../database.service';
import { FirestoreService } from '../firestore.service';
import { Room } from '../room';

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

  constructor(
    // public database: DatabaseService,
    // private afs: AngularFirestore,
    public firestore: FirestoreService
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
    });
  }

  totalPax: TotalPax[] = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 }
  ];

  // totalChildrens: TotalChildrens[] = [
  //   { value: 0, viewValue: 0 },
  //   { value: 1, viewValue: 1 },
  //   { value: 2, viewValue: 2 }
  // ];

  //   selectRoom(room: Room) {
  //     this.firestore.add({severity: 'info', summary: 'Room Selected', detail: 'Type:' + room.Name});
  // }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
