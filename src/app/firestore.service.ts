import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
// import { Firestore } from 'firebase/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Room } from './room';

// interface Room {
//   // id: String;
//   Name: String;
//   // price: Number;
//   // type: String;
// }

// firebase.initializeApp({
//   apiKey: "AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA",
//   authDomain: "tclowdemo.firebaseapp.com",
//   databaseURL: "https://tclowdemo.firebaseio.com",
//   projectId: "tclowdemo",
// });
// const database = firebase.firestore();

// const userRef = database.collection("users");
// const supervisorRef = database.collection("hotelsystem").doc("main_database").collection("supervisor");
// const workerRef = database.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
// const customerRef = database.collection("hotelsystem").doc("main_database").collection("customer");
// const roomRef = database.collection("hotelsystem").doc("main_database").collection("room");
// const bookingRef = database.collection("hotelsystem").doc("main_database").collection("booking");
// const stayRoomRef = database.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
// const recordRoomRef = database.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
// const paymentRef = database.collection("hotelsystem").doc("main_database").collection("payment");

// database.settings({
//   timestampsInSnapshots: true
// });

@Injectable()
export class FirestoreService {
  //room = name of the collection
  rooms: Observable<Room[]>;
  // roomCollection: AngularFirestoreCollection<Room>;

  // room: AngularFirestoreDocument<Room>;
  constructor(
    private afs: AngularFirestore // private afd: AngularFirestoreDocument, // private afc: AngularFirestoreCollection
  ) {
    // fetch the data from room collection
    this.rooms = this.afs.collection<Room>('Room').valueChanges();
  }

  ngOnInit() {}

  public getRoom() {
    // let data = this.afs.collection<Room>(`hotelsystem/main_database/booking/inStay/room`).valueChanges();
    // console.log(data);
    // return data
    // this.room = this.roomCollection.snapshotChanges().map(arr = >{

    // })
    // return this.afs.collection<Room>(`Room`).valueChanges();
    // stayRoomRef.get().then((value)=>{
    //   return value;
    // });

    // fetch auto-id field with data
    return (this.rooms = this.afs
      .collection('Room')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Room;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      ));

    // return this.getRoom().map(response => response.json());
  }
}
