import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//import { Firestore } from '@google-cloud/firestore';
//import * as firebase from 'firebase';
//import Firestore from 'firebase/firestore';

// const firestore = new Firestore({
//   projectId: 'tclowdemo',
//   keyFilename: 'tclowdemo-27e3a2acc7b9.json',
// });

// firebase.initializeApp({
//   apiKey: "AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA",
//   authDomain: "tclowdemo.firebaseapp.com",
//   databaseURL: "https://tclowdemo.firebaseio.com",
//   projectId: "tclowdemo",
// });
// const database = firebase.firestore();
// database.settings({
//   timestampsInSnapshots: true
// });

//-----firestore setup-----
// const Firestore = require('@google-cloud/firestore');
import { Firestore } from '@google-cloud/firestore';

const firestore = new Firestore({
  projectId: 'tclowdemo',
  keyFilename: 'tclowdemo-27e3a2acc7b9.json',
});
console.log(JSON.stringify(firestore));
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
// console.log(firestore.settings);
// const timestamp = snapshot.get('created_at');
// const date = timestamp.toDate();
//-----------------------------------------------------------------------------------------------------------------

@Injectable(/*{providedIn: 'root'}*/)
export class DatabaseService {
  // userRef: any;
  // supervisorRef: any;
  // workerRef: any;
  // customerRef: any;
  // roomRef: any;
  // bookingRef: any;
  // stayRoomRef: any;
  // recordRoomRef: any;
  // paymentRef: any;

  constructor(/*private db: AngularFirestore*/) { }

  userRef = firestore.collection("users");
  supervisorRef = firestore.collection("hotelsystem").doc("main_database").collection("supervisor");
  workerRef = firestore.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
  customerRef = firestore.collection("hotelsystem").doc("main_database").collection("customer");
  roomRef = firestore.collection("hotelsystem").doc("main_database").collection("room");
  bookingRef = firestore.collection("hotelsystem").doc("main_database").collection("booking");
  stayRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
  recordRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
  paymentRef = firestore.collection("hotelsystem").doc("main_database").collection("payment");
  //
  // userRef = this.db.collection("users");
  // supervisorRef = this.db.collection("hotelsystem").doc("main_database").collection("supervisor");
  // workerRef = this.db.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
  // customerRef = this.db.collection("hotelsystem").doc("main_database").collection("customer");
  // roomRef = this.db.collection("hotelsystem").doc("main_database").collection("room");
  // bookingRef = this.db.collection("hotelsystem").doc("main_database").collection("booking");
  // stayRoomRef = this.db.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
  // recordRoomRef = this.db.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
  // paymentRef = this.db.collection("hotelsystem").doc("main_database").collection("payment");

  //--------------------------------------------------
  //Sample
  // // Enter new data into the document.
  // test.doc("test_id").set({
  //   testname: 'Welcome to Firestore',
  //   testothers: 'Hello World',
  // }).then(() => {
  //   // Document created successfully.
  //   console.log("Document created successfully.");
  // });

  // // // Update an existing document.
  // // document.update({
  // //   body: 'My first Firestore app',
  // // }).then(() => {
  // //   // Document updated successfully.
  // // });

  // // Read the document.
  // test.doc("test_id").get().then(doc => {
  //       if (!doc.exists) {
  //         console.log('No such document!');
  //       } else {
  //         console.log("Document read successfully.");
  //         console.log(doc.data());
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error getting document', err);
  //     });

  // // // Delete the document.
  // // document.delete().then(() => {
  // //   // Document deleted successfully.
  // // });
  //----------------------------------------------------------------------------
  //-----functions-----

  generateId() {
    //increment id
  }

  getId(userId) {

    this.userRef.where("id", "==" , userId).get().then(snapshot => {
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
  addSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {

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

  editSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {

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

  deleteSupervisor(supervisorId) {

    this.supervisorRef.doc(supervisorId).delete().then((data)=> {
      console.log("supervisor "+supervisorId+ " has been removed");
    })
  }

  addWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {

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

  editWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {

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

  deleteWorker(hotelDeskPersonnelId) {

    this.workerRef.doc(hotelDeskPersonnelId).delete().then((data)=> {
      console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been deleted");
    })
  }

  addCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {

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

  editCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {

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

  deleteCustomer(customerId) {

    this.customerRef.doc(customerId).delete().then((data)=> {
      console.log("Customer "+ customerId+" has been deleted");
    })
  }

  getRoomType() {

    this.roomRef.get().then(snapshot => {
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

  addRoom(roomId,roomType,roomDescription,bedCount:number,MinBedCount:number,MaxBedCount:number,roomPrice:number,supervisorId,hotelDeskPersonnelId) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    this.roomRef.doc(roomId).set({
      type: roomType,
      description: roomDescription,
      bedCount: bedCount,
      MinBedCount: MinBedCount,
      MaxBedCount: MaxBedCount,
      price: roomPrice
    }).then((data)=> {
      console.log("Room "+ roomId+ " has been added successfully.")
    })
  }

  editRoom(roomId,roomType,roomDescription,bedCount:number,MinBedCount:number,MaxBedCount:number,roomPrice:number) {
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

  deleteRoom(roomId) {
    //valid roomId
    this.roomRef.doc(roomId).delete().then((data)=> {
      console.log("Room "+ roomId+ " has been removed successfully.")
    })
  }
  getBookingRoom() {
    this.stayRoomRef.get().then(snapshot => {
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

  resevationRoom(roomId,customerId,roomType) {
    //valid roomId avalaible
    this.roomRef.doc(roomType).get().then(data => {
      var amount = data.data().price;

      this.stayRoomRef.doc(roomId).set({
        checkInDate: new Date(),
        checkInBy: "",
        customerId: customerId,
        totalAmount: amount,
        status: "booking"
      }).then((data) => {
        // Document created successfully.
        console.log("Room "+roomId+" has been booked successfully by "+customerId);
      });
    }) 
  }

  cancelResevationRoom(roomId,customerId) {
    //valid roomId
    this.stayRoomRef.doc(roomId).delete().then((data) => {
      console.log(("Room "+roomId+" have been cancelled successfully."))
    })
  }

  adminAddRoom(roomId,customerId,adminId) { //resevation

    this.stayRoomRef.doc(roomId).set({
      checkInDate: new Date(),
      checkInBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully added room "+roomId+" with customer"+ customerId);
    })
  }

  adminEditRoom(roomId,customerId,adminId) { //resevation

    this.stayRoomRef.doc(roomId).update({
      checkInDate: new Date(),
      checkInBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully update room "+roomId+" with customer"+ customerId);
    })
  }

  adminDeleteRoom(roomId) { //resevation

    this.stayRoomRef.doc(roomId).delete().then((data)=> {
      console.log("admin successfully delete room "+roomId);
    })
  }

  checkOut(roomId,customerId,workerId) {

    this.stayRoomRef.doc(roomId).update({
      checkOutDate: new Date(),
      checkOutBy: workerId,
    }).then(data => {
      console.log("Customer successfully checkout");
      this.stayRoomRef.doc(roomId).get().then(data=> {
        var id = data.id
        var Data = data.data();
        console.log(Data.checkInDate);
      })
    })
  }

  addToRecord(data,id) {
    // get data ->validate->add
    this.recordRoomRef.doc(id).set({
      data
    })
  }


  //--------------------------------------------------------------------------------
  //-----TESTING-----
  // getId("")
  //add dummy room type
  // roomRef.doc("T009").set({
  //   type: "party",
  //   description: "",
  //   price: 1600
  // }).then((data)=> {
  //   console.log("Room has been added successfully.")
  // })
  // roomRef.doc("T010").set({
  //   type: "party",
  //   description: "seaview",
  //   price: 1800
  // }).then((data)=> {
  //   console.log("Room has been added successfully.")
  // })
  // customerRef.doc("blabla2").set({
  //   firstName: "bla",
  //   lastName: "bla2",
  //   gender: "male",
  //   ic: "131313-13-1313",
  //   email: "blabla@gmail.com",
  //   phone: "012-1234567",
  //   nationality: "abc",
  //   city: "def",
  //   state: "ghi"
  // }).then((data)=> {
  //   console.log("Customer "+ "blabla1"+" has been added");
  // })

  // customerRef.where("gender", "==" , "male").get().then(snapshot => {
  //   var Data = []
  //   snapshot.forEach(doc => {
  //     var data = doc.data()
  //     data.id = doc.id
  //     Data.push(data);
  //     console.log(data);
  //   });
  //   console.log(Data);
  // })
  //-----------------------------------------------------------------
  //-----exports-----
  // module.exports = {
  //   getId,
  //   addSupervisor,
  //   editSupervisor,
  //   deleteSupervisor,
  //   addWorker,
  //   editWorker,
  //   deleteWorker,
  //   addCustomer,
  //   editCustomer,
  //   deleteCustomer,
  //   getRoomType,
  //   addRoom,
  //   editRoom,
  //   deleteRoom,
  //   getBookingRoom,
  //   resevationRoom,
  //   cancelResevationRoom,
  //   adminAddRoom,
  //   adminEditRoom,
  //   adminDeleteRoom,
  //   checkOut
  // };
}