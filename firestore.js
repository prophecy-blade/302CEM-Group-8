const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var http = require('http').Server(app);

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
//IF YOU RUN and CMD console Document created successfully. Then is ok DONT RUN TOO MANY TIME or comand it with //
//-----------------------------------------------------------------------------------------------------------------
//--Ref---
// const document = firestore.doc('posts/intro-to-firestore');
const test = firestore.collection("hotelsystem").doc("main_database").collection("test");
// const doc = firestore.collection("hotelsystem").doc("main_database");

const userRef = firestore.collection("users");
const supervisorRef = firestore.collection("hotelsystem").doc("main_database").collection("supervisor");
const workerRef = firestore.collection("hotelsystem").doc("main_database").collection("hotelDeskPersonnel");
const customerRef = firestore.collection("hotelsystem").doc("main_database").collection("customer");
const roomRef = firestore.collection("hotelsystem").doc("main_database").collection("room");
const bookingRef = firestore.collection("hotelsystem").doc("main_database").collection("booking");
const stayRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("inStay").collection("room");
const recordRoomRef = firestore.collection("hotelsystem").doc("main_database").collection("booking").doc("record").collection("room");
const payment = firestore.collection("hotelsystem").doc("main_database").collection("payment");

//-----------------------------------------------------------------------------------------------------------------
//--------------------------------------------------
//IF WANT TO TEST YOU REMOVE //
//--------------------------------------------------
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
// test.doc("test_id").get().then(data => {
//   // Document read successfully.
//   console.log("Document read successfully.");
//   console.log(data.data());
// });
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

function resevationRoom(roomId,customerId) {

  stayRoomRef.doc(roomId).set({
    checkInDate: new Date(),
    checkInBy: "",
    customerId: customerId,
    totalAmount: ""
  }).then((data) => {
    // Document created successfully.
    console.log("Room "+roomId+" has been booked successfully by "+customerId);
  });
}

function cancelResevationRoom(roomId,customerId) {

  stayRoomRef.doc(roomId).delete().then((data) => {
    console.log(("Room "+roomId+" have been cancelled successfully."))
  })
}

function adminAdd(roomId,customerId,adminId) {

  stayRoomRef.doc(roomId).set({
    checkInDate: new Date(),
    checkInBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully added room "+roomId+" with customer"+ customerId);
  })
}

function adminEdit(roomId,customerId,adminId) {

  stayRoomRef.doc(roomId).update({
    checkInDate: new Date(),
    checkInBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully update room "+roomId+" with customer"+ customerId);
  })
}

function adminDelete(roomId) {

  stayRoomRef.doc(roomId).delete().then((data)=> {
    console.log("admin successfully delete room "+roomId);
  })
}

module.exports = {
  resevationRoom,
  cancelResevationRoom,
  adminAdd,
  adminEdit,
  adminDelete
};