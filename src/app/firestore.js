const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var http = require('http').Server(app);
//------------------------------------------------------
//-----firestore setup-----
const Firestore = require('@google-cloud/firestore');

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
// const document = firestore.doc('posts/intro-to-firestore');
const test = firestore.collection("hotelsystem").doc("main_database").collection("test");
const doc = firestore.collection("hotelsystem").doc("main_database");
//------------------------------------------------------------------------------------------------------------------------------------
//-----Ref-----
const userRef = firestore.collection("users");
const supervisorRef = firestore.collection("hotelsystem").doc("main_database").collection("supervisor");
const workerRef = firestore.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
const customerRef = firestore.collection("hotelsystem").doc("main_database").collection("customer");
const roomRef = firestore.collection("hotelsystem").doc("main_database").collection("room");
const bookingRef = firestore.collection("hotelsystem").doc("main_database").collection("booking");
const stayRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
const recordRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
const paymentRef = firestore.collection("hotelsystem").doc("main_database").collection("payment");

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

function generateId() {
  //increment id
}

function getId(userId) {

  userRef.doc().where("id", "==" , userId).get().then(snapshot => {
    var Data = []
    snapshot.forEach(doc => {
      var data = doc.data()
      data.id = doc.id
      Data.push(data);
      console.log(data);
    });
    console.log(Data);
    return Data
  })
}
function addSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {

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

function editSupervisor(supervisorId,firstName,lastName,gender,ic,email,phone) {

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

function deleteSupervisor(supervisorId) {

  supervisorRef.doc(supervisorId).delete().then((data)=> {
    console.log("supervisor "+supervisorId+ " has been removed");
  })
}

function addWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {

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

function editWorker(hotelDeskPersonnelId,firstName,lastName,gender,ic,email,phone) {

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

function deleteWorker(hotelDeskPersonnelId) {

  workerRef.doc(hotelDeskPersonnelId).delete().then((data)=> {
    console.log("Hotel desk personnel "+ hotelDeskPersonnelId+ " has been deleted");
  })
}

function addCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {

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

function editCustomer(customerId,firstName,lastName,gender,ic,email,phone,nationality,city,state) {

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

function deleteCustomer(customerId) {

  customerRef.doc(customerId).delete().then((data)=> {
    console.log("Customer "+ customerId+" has been deleted");
  })
}

function addRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice,supervisorId,hotelDeskPersonnelId) {
  //valid roomId,supervisorId,hotelDeskPersonnelId
  roomRef.doc(rommId).set({
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

function editRoom(roomId,roomType,roomDescription,bedCount,MinBedCount,MaxBedCount,roomPrice) {
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

function deleteRoom(roomId) {
  //valid roomId
  roomRef.doc(roomId).delete().then((data)=> {
    console.log("Room "+ roomId+ " has been removed successfully.")
  })
}

function resevationRoom(roomId,customerId) {
  //valid roomId avalaible
  stayRoomRef.doc(roomId).set({
    checkInDate: new Date(),
    checkInBy: "",
    customerId: customerId,
    totalAmount: "",
    status: "booking"
  }).then((data) => {
    // Document created successfully.
    console.log("Room "+roomId+" has been booked successfully by "+customerId);
  });
}

function cancelResevationRoom(roomId,customerId) {
  //valid roomId
  stayRoomRef.doc(roomId).delete().then((data) => {
    console.log(("Room "+roomId+" have been cancelled successfully."))
  })
}

function adminAddRoom(roomId,customerId,adminId) {

  stayRoomRef.doc(roomId).set({
    checkInDate: new Date(),
    checkInBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully added room "+roomId+" with customer"+ customerId);
  })
}

function adminEditRoom(roomId,customerId,adminId) {

  stayRoomRef.doc(roomId).update({
    checkInDate: new Date(),
    checkInBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully update room "+roomId+" with customer"+ customerId);
  })
}

function adminDeleteRoom(roomId) {

  stayRoomRef.doc(roomId).delete().then((data)=> {
    console.log("admin successfully delete room "+roomId);
  })
}

function checkOut(roomId,customerId,supervisorId,hotelDeskPersonnelId,adminId) {

  stayRoomRef.doc(roomId).update({
    checkOutDate: new Date(),
    checkOutBy: roleId,
  }).then(data => {
    console.log("Customer successfully checkout");
  })
}
function addToRecord(data) {
  // get data ->validate->add
}


//--------------------------------------------------------------------------------
//-----TESTING-----
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
module.exports = {
  addSupervisor,
  editSupervisor,
  deleteSupervisor,
  addWorker,
  editWorker,
  deleteWorker,
  addCustomer,
  editCustomer,
  deleteCustomer,
  addRoom,
  editRoom,
  deleteRoom,
  resevationRoom,
  cancelResevationRoom,
  adminAddRoom,
  adminEditRoom,
  adminDeleteRoom
};
//import { xxx } from 'this file'