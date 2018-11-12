import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DatabaseService } from '../database.service';
import { FirestoreService } from '../firestore.service';

// import { AngularFirestore } from '@angular/fire/firestore';

export interface TotalAdults {
  value: number;
  viewValue: number;
}

export interface TotalChildrens {
  value: number;
  viewValue: number;
}


@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css']
  // providers: [DatabaseService]
})
export class SuitesComponent implements OnInit {
  data: any;

  constructor(
    // public database: DatabaseService,
    // private afs: AngularFirestore,
    public firestore: FirestoreService,
  ) {
    // this.data = this.afs.collection(`hotelsystem/main_database`).valueChanges();
    // this.data = this.database.getBookingRoom();
    this.data = this.firestore.getRoom();

    console.log(this.data);
  }

  ngOnInit() {}

  totalAdults: TotalAdults[] = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 }
  ];

  totalChildrens: TotalChildrens[] = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 }
  ];

  // getAllRoom() {
  //   this.databaseService
  //     .getBookingRoom()
  //     .then((data: any) => {
  //       if (data) {
  //         console.log(data);
  //       }
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
