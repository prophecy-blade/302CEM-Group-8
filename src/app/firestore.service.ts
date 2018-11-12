import { Injectable } from '@angular/core';

// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

// import { Firestore } from 'firebase/firestore';
import * as firebase from 'firebase';

interface Room {
  description: String;
  price: Number;
  type: String;
}

// firebase.initializeApp({
//   apiKey: "AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA",
//   authDomain: "tclowdemo.firebaseapp.com",
//   databaseURL: "https://tclowdemo.firebaseio.com",
//   projectId: "tclowdemo",
// });
const database = firebase.firestore();
database.settings({
  timestampsInSnapshots: true
});

@Injectable()
export class FirestoreService {
  // room: AngularFirestoreDocument<Room>;
  constructor() // private afs: AngularFirestore,
  // private afd: AngularFirestoreDocument,
  // private afc: AngularFirestoreCollection
  {}

  public getRoom() {
    // let data = this.afs.collection<Room>(`hotelsystem/main_database/booking/inStay/room`).valueChanges();
    // console.log(data);
    // return data
    database
      .collection(`hotelsystem/main_database/booking/inStay/room`)
      .get()
      .then(value => {
        return value;
      });
  }
}
