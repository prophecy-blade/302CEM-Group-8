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
// import { Room } from './room';
// import { Booking } from './booking';
// import { History } from './history';
import { AuthService } from './core/auth.service';
import { userInfo } from 'os';

interface Room {
  //  tc: pls change all the field to small letter so that every fields in tables is small letter and easier for work
  id?: string;
  Name: string;
  type?: string; //not optional remove ? after screen change
  RoomNo?: number;
  Description: string;
  Price: number;
}

interface Booking {
  id?: string;
  check_in: string;
  check_out: string;
  room_id: string;
  user_id: any;
}

interface History {
  id?: string; //tc: ? mean optional, no ? mean need field
  user_id: string;
  room_id: string;
  amount: number;
  check_in_date?: Date;
  check_out_date?: Date;
}

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
  public auth: AuthService;
  snapshot: any;
  historysnapshot: any;
  //room = name of the collection
  rooms: Observable<Room[]>;
  // instance of firestore collection
  roomsCollection: AngularFirestoreCollection<Room>;
  //booking = name of the collection
  bookings: Observable<Booking[]>;

  bookingsCollection: AngularFirestoreCollection<Booking>;
  // roomCollection: AngularFirestoreCollection<Room>;

  roomDoc: AngularFirestoreDocument<Room>;

  bookingDoc: AngularFirestoreDocument<Booking>;

  // room: AngularFirestoreDocument<Room>;

  historyCollection: AngularFirestoreCollection<History>;
  history: Observable<History[]>;

  constructor(
    private afs: AngularFirestore // private afd: AngularFirestoreDocument, // private afc: AngularFirestoreCollection
  ) {
    // fetch the data from room collection
    this.rooms = this.afs.collection<Room>('Room').valueChanges();
    // initializa room collection
    this.roomsCollection = this.afs.collection('Room', x =>
      x.orderBy('Name', 'asc')
    );

    this.bookings = this.afs.collection<Booking>('Booking').valueChanges();

    this.bookingsCollection = this.afs.collection('Booking', x =>
      x.orderBy('check_in', 'asc')
    );

    this.history = this.afs.collection<History>('History').valueChanges();

    this.historyCollection = this.afs.collection('History', ref => {
      return ref.orderBy('room_id').orderBy('user_id');
    });
  }

  ngOnInit() {}

  public getRoom() {
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
  }

  public getBooking() {
    return (this.bookings = this.afs
      .collection('Booking')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Booking;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      ));
  }

  public bookRoom(roomID: string, checkIn: string, checkOut: string) {
    let user = {};
    if (this.auth.user !== null && this.auth.user !== undefined) {
      user = this.auth.user;
    } else {
      return false;
    }
    var userid = "YxBmMudBGMRkpf2nkyyrUW8XF0s2";
    let book: Booking = {
      room_id: roomID,
      user_id: userid,
      check_in: checkIn,
      check_out: checkOut
    };
    this.bookingsCollection.add(book);
    this.roomsCollection.doc(roomID).update({
      status: 'Booking'
    });
  }

  public cancelRoom(roomID: string) {
    let user = {};
    if (this.auth.user !== null && this.auth.user !== undefined) {
      user = this.auth.user;
    } else {
      return false;
    }
    this.roomsCollection.doc(roomID).update({
      status: 'Available',
      user_id: null,
      check_in: null,
      check_out: null
    });
  }

  public checkIn(roomID: string) {
    this.roomsCollection.doc(roomID).update({
      status: 'CheckIn',
      check_in_date: new Date()
    });
  }

  public checkOut(
    roomID: string,
    UserID: string,
    checkInDate: Date,
    amount: number
  ) {
    this.roomsCollection.doc(roomID).update({
      status: 'CheckOut',
      check_out_date: new Date()
    });
    this.historyCollection.add({
      room_id: roomID,
      user_id: UserID,
      check_in_date: checkInDate,
      check_out_date: new Date(),
      amount: amount
    });
    this.roomsCollection.doc(roomID).delete();
  }

  public getHistory() {
    return this.afs
      .collection('History')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as History;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  addRoom(room) {
    this.roomsCollection.add(room);
  }

  deleteRoom(room) {
    this.roomDoc = this.afs.doc(`Room/${room.id}`);
    this.roomDoc.delete();
  }

  addBooking(booking) {
    this.bookingsCollection.add(booking);
  }

  deleteBooking(booking) {
    this.bookingDoc = this.afs.doc(`Booking/${booking.id}`);
    this.bookingDoc.delete();
  }
}
