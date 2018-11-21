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
import { AuthService } from './core/auth.service';

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

//database tables and fields
//so not need to import room and others
interface Room { //  tc: pls change all the field to small letter so that every fields in tables is small letter and easier for work
  id?: String,
  Name: String,
  type?: String, //not optional remove ? after screen change
  RoomNo?: number,
  Description: String,
  Price: Number
}
interface Booking {
  id?: String,
  check_in: String,
  check_out: String,
  room_id: String,
  user_id: any
}
interface history {
  id?: String, //tc: ? mean optional, no ? mean need field
  user_id: String,
  room_id: String,
  amount: number
}

@Injectable()
export class FirestoreService {

  public auth: AuthService;
  snapshot:any;
  historysnapshot:any;
  //room = name of the collection
  rooms: Observable<Room[]>;
  // instance of firestore collection
  roomsCollection: AngularFirestoreCollection<Room>;
  roomDoc: AngularFirestoreDocument<Room>;
  //booking = name of the collection
  bookings: Observable<Booking[]>;
  

  bookingsCollection: AngularFirestoreCollection<Booking>;
  // roomCollection: AngularFirestoreCollection<Room>;

  // room: AngularFirestoreDocument<Room>;

  historyCollection: AngularFirestoreCollection<History>;
  history: Observable<History[]>;
  constructor(
    private afs: AngularFirestore // private afd: AngularFirestoreDocument, // private afc: AngularFirestoreCollection
  ) {
    
  }

  ngOnInit() {
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

    this.historyCollection = this.afs.collection("History", ref => {
      return ref.orderBy("room_id").orderBy("user_id")
    });
    this.history = this.historyCollection.valueChanges();
    // this.historysnapshot = this.historyCollection.snapshotChanges()
  }

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
    return (this.rooms = this.afs //tc: not need 'this.rooms ='
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
  //havent done have issue when combine two object to return
  // public getAvaliableRoom(pax) { // Require pax, only get avaliable room base on status and pax
  //   if (pax == 0) {
  //     return (this.afs
  //       .collection('Room', ref => {return ref.where('status','==','Avaliable')})
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes => {
  //           return changes.map(a => {
  //             const data = a.payload.doc.data() as Room;
  //             data.id = a.payload.doc.id;
  //             return data;
  //           });
  //         })
  //       ));
  //   }
  //   if (pax == 1) {
  //     var Data = [];
  //     var data1 = this.afs
  //       .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Single')})
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes => {
  //           return changes.map(a => {
  //             const data = a.payload.doc.data() as Room;
  //             data.id = a.payload.doc.id;
  //             return data;
  //           });
  //         })
  //       )
  //     var data2 = this.afs
  //     .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Straits')})
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map(a => {
  //           const data = a.payload.doc.data() as Room;
  //           data.id = a.payload.doc.id;
  //           return data;
  //         });
  //       })
  //     )
  //     Data.push(data1)
  //     Data.push(data2)
  //     return Data
  //   }
  //   if (pax == 2) {
  //     var Data = [];
  //     var data1 = this.afs
  //       .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Double')})
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes => {
  //           return changes.map(a => {
  //             const data = a.payload.doc.data() as Room;
  //             data.id = a.payload.doc.id;
  //             return data;
  //           });
  //         })
  //       )
  //     var data2 = this.afs
  //     .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Deluxe')})
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map(a => {
  //           const data = a.payload.doc.data() as Room;
  //           data.id = a.payload.doc.id;
  //           return data;
  //         });
  //       })
  //     )
  //     Data.push(data1)
  //     Data.push(data2)
  //     return Data
  //   }
  //   if (pax >= 3 && pax <=4) {
  //     return (this.afs
  //       .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Family')})
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes => {
  //           return changes.map(a => {
  //             const data = a.payload.doc.data() as Room;
  //             data.id = a.payload.doc.id;
  //             return data;
  //           });
  //         })
  //       ));
  //   }
  //   if (pax >= 5) {
  //     return (this.afs
  //       .collection('Room', ref => {return ref.where('status','==','Avaliable').where('type','==','Party')})
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes => {
  //           return changes.map(a => {
  //             const data = a.payload.doc.data() as Room;
  //             data.id = a.payload.doc.id;
  //             return data;
  //           });
  //         })
  //       ));
  //   }
    
  // }

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

  addRoom(room) { //only admin can add
    this.roomsCollection.add(room);
  }

  addBooking(booking) {
    this.bookingsCollection.add(booking);
  }
  public bookRoom(roomID: String, checkIn: String, checkOut: String) {
    let user = {}
    if(this.auth.user !== null && this.auth.user !== undefined) {
      user = this.auth.user;
    } else {
      return false
    }
    let book: Booking = {
      room_id: roomID,
      user_id: user,
      check_in: checkIn,
      check_out: checkOut
    }
    this.bookingsCollection.add(book);
  }
}
