import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

// import { Firestore } from 'firebase/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from './room';

interface User {
  description: String;
  price: Number;
  type: String;
}
interface Supervisor {
  firstName: string,
  lastName: string,
  gender: string,
  ic: string,
  email: string,
  phone: string
}
interface Worker {
  firstName: string,
  lastName: string,
  gender: string,
  ic: string,
  email: string,
  phone: string
}
interface Customer {
  firstName: string,
  lastName: string,
  gender: string,
  ic: string,
  email: string,
  phone: string,
  nationality: string,
  city: string,
  state: string
}
interface Rooms {
  roomId: string,
  bookingDate: Date,
  startStayDate: Date,
  dayStay: number,
  customerId: string,
  totalAmount: number,
  status: string,
  addDate: Date,
  roomAddBy: string,
  checkInBy: string,
  checkInDate: Date,
  checkOutDate: Date,
  checkOutBy: string,
  editBy: string,
}
interface RoomType {
  type: string,
  description: string,
  bedCount: number,
  MinBedCount: number,
  MaxBedCount: number,
  price: number
}
interface RecordRoom {
  roomId: string,
  customerId: string,
  checkInBy: string,
  checkInDate: Date,
  checkOutBy: string,
  checkOutDate: Date,
  totalAmount: number,
  bookingDate: Date,
  startStayDate: Date,
  dayStay: number,
  status: string,
  addDate: Date,
  roomAddBy: string,
  editBy: string
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
  private userRef: AngularFirestoreCollection<User>;
  private supervisorRef: AngularFirestoreCollection<Supervisor>;
  private workerRef: AngularFirestoreCollection<Worker>;
  private customerRef: AngularFirestoreCollection<Customer>;
  private roomRef: AngularFirestoreCollection<RoomType>;
  private stayRoomRef: AngularFirestoreCollection<Rooms>;
  private recordRoomRef: AngularFirestoreCollection<RecordRoom>;
  // private paymentRef: AngularFirestoreCollection<Payment>;

  rooms: Observable<Room[]>;
  roomsCollection: AngularFirestoreCollection<Room>;
  // room: AngularFirestoreDocument<Room>;
  constructor(
    private afs: AngularFirestore,
    // private afd: AngularFirestoreDocument,
    // private afc: AngularFirestoreCollection
  ) { 
    this.userRef = afs.collection<User>("users");
    this.supervisorRef = afs.collection<Supervisor>("supervisor");
    this.workerRef = afs.collection<Worker>("hotelDeskPersonnel");
    this.customerRef = afs.collection<Customer>("customer");
    this.roomRef = afs.collection<RoomType>("roomType");
    // this.bookingRef = afs.collection<Booking>("booking");
    this.stayRoomRef = afs.collection<Rooms>("room");
    this.recordRoomRef = afs.collection<RecordRoom>("recordRoom");
    // const paymentRef = database.collection("hotelsystem").doc("main_database").collection("payment");

    this.rooms = this.afs.collection<Room>('Room').valueChanges();
    this.roomsCollection = this.afs.collection('Room', x => x.orderBy('Name',"asc"))
  }


  public getRoom() {
    

    // let data = this.afs.collection<Room>(`hotelsystem/main_database/booking/inStay/room`).valueChanges();
    // console.log(data);
    // return data
    // return this.stayRoomRef.valueChanges()
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

  public getId(userId) {

    this.userRef.ref.where("id", "==" , userId).get().then(snapshot => {
      var Data = []
      snapshot.forEach(doc => {
        var data = doc.data()
        data.id = doc.id
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data
    })
  }

  public addSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {

    this.supervisorRef.doc(supervisorId).set({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone
    }).then((data)=> {
      console.log("supervisor "+supervisorId+ " has been added");
    })
  }
  
  public editSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {
  
    this.supervisorRef.doc(supervisorId).update({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone
    }).then((data)=> {
      console.log("supervisor "+supervisorId+ " has been updated");
    })
  }
  
  public deleteSupervisor(supervisorId) {
  
    this.supervisorRef.doc(supervisorId).delete().then((data)=> {
      console.log("supervisor "+supervisorId+ " has been removed");
    })
  }
  
  public addWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {
  
    this.workerRef.doc(hotelDeskPersonnelId).set({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone
    }).then((data)=> {
      console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been added");
    })
  }
  
  public editWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {
  
    this.workerRef.doc(hotelDeskPersonnelId).update({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone
    }).then((data)=> {
      console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been updated");
    })
  }
  
  public deleteWorker(hotelDeskPersonnelId) {
  
    this.workerRef.doc(hotelDeskPersonnelId).delete().then((data)=> {
      console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been deleted");
    })
  }
  
  public addCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {
  
    this.customerRef.doc(customerId).set({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone,
      nationality: nationality,
      city: city,
      state: state
    }).then((data)=> {
      console.log("Customer "+ customerId+" has been added");
    })
  }
  
  public editCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {
  
    this.customerRef.doc(customerId).update({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      ic: ic,
      email: email,
      phone: phone,
      nationality: nationality,
      city: city,
      state: state
    }).then((data)=> {
      console.log("Customer "+ customerId+" has been added");
    })
  }
  
  public deleteCustomer(customerId) {
  
    this.customerRef.doc(customerId).delete().then((data)=> {
      console.log("Customer "+ customerId+" has been deleted");
    })
  }
  
  public getRoomType() {
  
    return this.roomRef.get()/*.then(snapshot => {
      var Data = []
      snapshot.forEach(doc => {
        var data = doc.data()
        data.id = doc.id
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data
    })*/
  }
  
  public getInstayRoom() { //all
  
    return this.stayRoomRef.get()/*.then(snapshot => {
      var Data = []
      snapshot.forEach(doc => {
        var data = doc.data()
        data.id = doc.id
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data
    })*/
    
  }
  // getInstayRoom()
  
  public getInstayRoomFilter(personCount) {
    if (personCount > 0) {
      if (personCount >= 1) {
        console.log("Single,Straits");
        var t = "S"
      }
      if (personCount >= 2) {
        console.log("Double,Deluxe");
        var t = "D"
      }
      if (personCount >= 3) {
        console.log("Family");
        var t ="F"
      }
      if (personCount >= 5) {
        console.log("Party");
        var t = "P"
      }
      if (t == "S") {
        var Datas = []
        this.stayRoomRef.ref.where("type", "==" , "Single").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          // console.log(Data);
          // return Data
          this.stayRoomRef.ref.where("type", "==" , "Straits").get().then(snapshot => {
            // var Data = []
            snapshot.forEach(doc => {
              var data = doc.data()
              data.id = doc.id
              Data.push(data);
              // console.log(data);
            });
            console.log(Data);
            return Data
          })
        })
      }
      if (t == "D") {
        var Datas = []
        this.stayRoomRef.ref.where("type", "==" , "Double").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          // console.log(Data);
          // return Data
          this.stayRoomRef.ref.where("type", "==" , "Deluxe").get().then(snapshot => {
            // var Data = []
            snapshot.forEach(doc => {
              var data = doc.data()
              data.id = doc.id
              Data.push(data);
              // console.log(data);
            });
            console.log(Data);
            return Data
          })
        })
      }
      if (t == "F") {
        this.stayRoomRef.ref.where("type", "==" , "Family").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          console.log(Data);
          return Data
        })
      }
      if (t == "P") {
        this.stayRoomRef.ref.where("type", "==" , "Party").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          console.log(Data);
          return Data
        })
      }
    }
    else {
      return this.stayRoomRef.get()/*.then(snapshot => { //all
        var Data = []
        snapshot.forEach(doc => {
          var data = doc.data()
          data.id = doc.id
          Data.push(data);
          // console.log(data);
        });
        console.log(Data);
        return Data
      })*/
    }
  }
  // getInstayRoomFilter(1)
  
  // public addRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice,supervisorId,hotelDeskPersonnelId) {
  //   //valid roomId,supervisorId,hotelDeskPersonnelId
  //   this.roomRef.doc(roomId).set({
  //     type: roomType,
  //     description: roomDescription,
  //     bedCount: bedCount,
  //     MinBedCount: MinBedCount,
  //     MaxBedCount: MaxBedCount,
  //     price: roomPrice
  //   }).then((data)=> {
  //     console.log("Room "+ roomId+ " has been added successfully.")
  //   })
  // }
  addRoom(room) {
    this.roomsCollection.add(room);
  }
  
  public editRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    this.roomRef.doc(roomId).update({
      type: roomType,
      description: roomDescription,
      bedCount: bedCount,
      MinBedCount: MinBedCount,
      MaxBedCount: MaxBedCount,
      price: roomPrice
    }).then((data)=> {
      console.log("Room "+ roomId+ " has been updated successfully.")
    })
  }
  
  public deleteRoom(roomId) {
    //valid roomId
    this.roomRef.doc(roomId).delete().then((data)=> {
      console.log("Room "+ roomId+ " has been removed successfully.")
    })
  }
  public getBookingRoom() {
    return this.stayRoomRef.get()/*.then(snapshot => {
      var Data = []
      snapshot.forEach(doc => {
        var data = doc.data()
        data.id = doc.id
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data
    })*/
   }
  
   public resevationRoom(roomId,customerId, startStayDate, days) {
    //valid roomId avalaible
    var roomData = this.stayRoomRef.doc(roomId).get()/*.then(data => {*/
      // var id = data.id;
      // var Data = data.data();
      // console.log(id);
      // console.log(Data);
      if (roomData[0].status != "Available") {
        console.log("room not found or not Available");
      }
      else if (roomData == undefined) {
        var cData = this.customerRef.doc(customerId).get()/*.then(customerData => {*/
          // var cId = customerData.id
          // var cData = customerData.data();
          // console.log(cId);
          // console.log(cData);
          if (cData == undefined) {
            console.log("Invalid customer id");
          }
          else {
            var totalAmount = roomData[0].amount * parseInt(days);
            this.stayRoomRef.doc(roomId).update({
              bookingDate: new Date(),
              startStayDate: startStayDate,
              dayStay: days,
              customerId: customerId,
              totalAmount: totalAmount,
              status: "Booking"
            }).then((data) => {
              // Document created successfully.
              console.log("Room "+roomId+" has been booked successfully by "+customerId);
            });
          }
        // })
      }
    // })
  }
  // resevationRoom("1002","blabla","DateTime",2)
  
  public cancelResevationRoom(roomId,customerId) {
    //valid roomId
    var roomData = this.stayRoomRef.doc(roomId).get()/*.then(data => {*/
      // var id = data.id;
      // var Data = data.data();
      // console.log(id);
      console.log(roomData);
      if (roomData == undefined || roomData[0].status != "Booking") {
        console.log("room not found or cannot be cancelled");
      }
      else {
        var cData = this.customerRef.doc(customerId).get()/*.then(customerData => {*/
          // var cId = customerData.id
          // var cData = customerData.data();
          // console.log(cId);
          console.log(cData);
          if (cData != undefined && roomData[0].customerId == customerId) {
            this.stayRoomRef.doc(roomId).update({
              status: "Cancelled"
            }).then((data) => {
              // Document created successfully.
              console.log("Room "+roomId+" has been cancelled by "+customerId);
            });
  
          }
          else {
            console.log("Invalid customer id");
          }
        // })
      }
    // })
  }
  // cancelResevationRoom("1002","blabla1")
  
  public adminAddRoom(roomId,customerId,adminId) { //resevation
  
    this.stayRoomRef.doc(roomId).set({
      checkInDate: new Date(),
      roomAddBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully added room "+roomId+" with customer"+ customerId);
    })
  }
  
  public adminEditRoom(roomId,customerId,adminId) { //resevation
  
    this.stayRoomRef.doc(roomId).update({
      checkInDate: new Date(),
      editBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully update room "+roomId+" with customer"+ customerId);
    })
  }
  
  public adminDeleteRoom(roomId) { //resevation
  
    this.stayRoomRef.doc(roomId).delete().then((data)=> {
      console.log("admin successfully delete room "+roomId);
    })
  }
  
  public checkOut(roomId,customerId,workerId) {
    var customerData = this.stayRoomRef.doc(roomId).get()/*.then(data_origin=> {*/
      // var id = data_origin.id;
      // var Data = data_origin.data();
      // console.log(Data.customerId);
      // console.log(customerId);
      if (customerId == customerData[0].customerId && customerData[0].status == "inStay") {
        this.stayRoomRef.doc(roomId).update({
          checkOutDate: new Date(),
          checkOutBy: workerId,
          status: "checkout"
        }).then(data => {
          console.log("Customer successfully checkout");
          var roomData = this.stayRoomRef.doc(roomId).get()/*.then(data=> {*/
            // var id = data.id
            // var Data = data.data();
            console.log(roomData);
            // var recordNo = generaterecordNo()
            // console.log(recordNo)
            this.recordRoomRef.doc("H"+roomId).set({
              roomId: roomId,
              customerId: roomData[0].customerId,
              checkInBy: roomData[0].checkInBy,
              checkInDate: roomData[0].checkInDate,
              checkOutBy: roomData[0].checkOutBy,
              checkOutDate: roomData[0].checkOutDate,
              totalAmount: roomData[0].totalAmount,
            }).then(record => {
              console.log("Data successfully recorded");
              //reset
            })
          // })
        })
      }
      else {
        console.log("no valid");
      }
    // })
  }
  // checkOut("1001","blabla1","test")
  
  // public addToRecord(data,id) {
  //   // get data ->validate->add
  //   this.recordRoomRef.add({
  //     data
  //   })
  // }
}
