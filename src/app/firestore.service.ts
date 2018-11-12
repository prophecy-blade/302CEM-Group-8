import { Injectable } from '@angular/core';

// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

// import { Firestore } from 'firebase/firestore';
import * as firebase from 'firebase';

interface Room {
  description: String;
  price: Number;
  type: String;
}

firebase.initializeApp({
  apiKey: "AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA",
  authDomain: "tclowdemo.firebaseapp.com",
  databaseURL: "https://tclowdemo.firebaseio.com",
  projectId: "tclowdemo",
});
const database = firebase.firestore();

const userRef = database.collection("users");
const supervisorRef = database.collection("hotelsystem").doc("main_database").collection("supervisor");
const workerRef = database.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
const customerRef = database.collection("hotelsystem").doc("main_database").collection("customer");
const roomRef = database.collection("hotelsystem").doc("main_database").collection("room");
const bookingRef = database.collection("hotelsystem").doc("main_database").collection("booking");
const stayRoomRef = database.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
const recordRoomRef = database.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
const paymentRef = database.collection("hotelsystem").doc("main_database").collection("payment");

database.settings({
  timestampsInSnapshots: true
});

@Injectable()

export class FirestoreService {

  // room: AngularFirestoreDocument<Room>;
  constructor(
    // private afs: AngularFirestore,
    // private afd: AngularFirestoreDocument,
    // private afc: AngularFirestoreCollection
  ) { }


  public getRoom() {
    

    // let data = this.afs.collection<Room>(`hotelsystem/main_database/booking/inStay/room`).valueChanges();
    // console.log(data);
    // return data
    stayRoomRef.get().then((value)=>{
      return value;
    });
  }

  public getId(userId) {

    userRef.where("id", "==" , userId).get().then(snapshot => {
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

    supervisorRef.doc(supervisorId).set({
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
  
    supervisorRef.doc(supervisorId).update({
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
  
    supervisorRef.doc(supervisorId).delete().then((data)=> {
      console.log("supervisor "+supervisorId+ " has been removed");
    })
  }
  
  public addWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {
  
    workerRef.doc(hotelDeskPersonnelId).set({
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
  
    workerRef.doc(hotelDeskPersonnelId).update({
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
  
    workerRef.doc(hotelDeskPersonnelId).delete().then((data)=> {
      console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been deleted");
    })
  }
  
  public addCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {
  
    customerRef.doc(customerId).set({
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
  
    customerRef.doc(customerId).update({
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
  
    customerRef.doc(customerId).delete().then((data)=> {
      console.log("Customer "+ customerId+" has been deleted");
    })
  }
  
  public getRoomType() {
  
    roomRef.get().then(snapshot => {
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
  
  public getInstayRoom() { //all
  
    stayRoomRef.get().then(snapshot => {
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
        stayRoomRef.where("type", "==" , "Single").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          // console.log(Data);
          // return Data
          stayRoomRef.where("type", "==" , "Straits").get().then(snapshot => {
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
        stayRoomRef.where("type", "==" , "Double").get().then(snapshot => {
          var Data = []
          snapshot.forEach(doc => {
            var data = doc.data()
            data.id = doc.id
            Data.push(data);
            // console.log(data);
          });
          // console.log(Data);
          // return Data
          stayRoomRef.where("type", "==" , "Deluxe").get().then(snapshot => {
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
        stayRoomRef.where("type", "==" , "Family").get().then(snapshot => {
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
        stayRoomRef.where("type", "==" , "Party").get().then(snapshot => {
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
      stayRoomRef.get().then(snapshot => { //all
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
  // getInstayRoomFilter(1)
  
  public addRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice,supervisorId,hotelDeskPersonnelId) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    roomRef.doc(roomId).set({
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
  
  public editRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    roomRef.doc(roomId).update({
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
    roomRef.doc(roomId).delete().then((data)=> {
      console.log("Room "+ roomId+ " has been removed successfully.")
    })
  }
  public getBookingRoom() {
    stayRoomRef.get().then(snapshot => {
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
  
   public resevationRoom(roomId,customerId, startStayDate, days) {
    //valid roomId avalaible
    stayRoomRef.doc(roomId).get().then(data => {
      var id = data.id;
      var Data = data.data();
      console.log(id);
      console.log(Data);
      if (Data == undefined || Data.status != "Available") {
        console.log("room not found or not Available");
      }
      else {
        customerRef.doc(customerId).get().then(customerData => {
          var cId = customerData.id
          var cData = customerData.data();
          console.log(cId);
          console.log(cData);
          if (cData == undefined) {
            console.log("Invalid customer id");
          }
          else {
            var totalAmount = Data.amount * parseInt(days);
            stayRoomRef.doc(roomId).update({
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
        })
      }
    })
  }
  // resevationRoom("1002","blabla","DateTime",2)
  
  public cancelResevationRoom(roomId,customerId) {
    //valid roomId
    stayRoomRef.doc(roomId).get().then(data => {
      var id = data.id;
      var Data = data.data();
      console.log(id);
      console.log(Data);
      if (Data == undefined || Data.status != "Booking") {
        console.log("room not found or not Available");
      }
      else {
        customerRef.doc(customerId).get().then(customerData => {
          var cId = customerData.id
          var cData = customerData.data();
          console.log(cId);
          console.log(cData);
          if (cData != undefined && Data.customerId == customerId) {
            stayRoomRef.doc(roomId).update({
              status: "Cancelled"
            }).then((data) => {
              // Document created successfully.
              console.log("Room "+roomId+" has been cancelled by "+customerId);
            });
  
          }
          else {
            console.log("Invalid customer id");
          }
        })
      }
    })
  }
  // cancelResevationRoom("1002","blabla1")
  
  public adminAddRoom(roomId,customerId,adminId) { //resevation
  
    stayRoomRef.doc(roomId).set({
      checkInDate: new Date(),
      roomAddBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully added room "+roomId+" with customer"+ customerId);
    })
  }
  
  public adminEditRoom(roomId,customerId,adminId) { //resevation
  
    stayRoomRef.doc(roomId).update({
      checkInDate: new Date(),
      editBy: adminId,
      customerId: customerId,
      totalAmount: ""
    }).then((data)=> {
      console.log("admin successfully update room "+roomId+" with customer"+ customerId);
    })
  }
  
  public adminDeleteRoom(roomId) { //resevation
  
    stayRoomRef.doc(roomId).delete().then((data)=> {
      console.log("admin successfully delete room "+roomId);
    })
  }
  
  public checkOut(roomId,customerId,workerId) {
    stayRoomRef.doc(roomId).get().then(data_origin=> {
      var id = data_origin.id;
      var Data = data_origin.data();
      console.log(Data.customerId);
      console.log(customerId);
      if (customerId == Data.customerId && Data.status == "inStay") {
        stayRoomRef.doc(roomId).update({
          checkOutDate: new Date(),
          checkOutBy: workerId,
          status: "checkout"
        }).then(data => {
          console.log("Customer successfully checkout");
          stayRoomRef.doc(roomId).get().then(data=> {
            var id = data.id
            var Data = data.data();
            console.log(Data);
            // var recordNo = generaterecordNo()
            // console.log(recordNo)
            recordRoomRef.add({
              roomId: roomId,
              cusstomerId: Data.customerId,
              checkInBy: Data.checkInBy,
              checkInDate: Data.checkInDate,
              checkOutBy: Data.checkOutBy,
              checkOutDate: Data.checkOutDate,
              totalAmount: Data.totalAmount,
            }).then(record => {
              console.log("Data successfully recorded");
              //reset
            })
          })
        })
      }
      else {
        console.log("no valid");
      }
    })
  }
  // checkOut("1001","blabla1","test")
  
  public addToRecord(data,id) {
    // get data ->validate->add
    recordRoomRef.add({
      data
    })
  }
}
