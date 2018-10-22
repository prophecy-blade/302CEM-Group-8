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

// function generaterecordNo() {
//   // return new Promise(function (resolve, reject) {
//     recordRoomRef.orderBy("recordNo","desc").limit(1).get().then(snapshot=> {
//       // var Data = data.data();
//       var Data = []
//       snapshot.forEach(doc=> {
//         var data = doc.data()
//         data.id = doc.id
//         Data.push(data);
//       })
//       console.log(Data);
//       console.log(Data[0].recordNo)
//       if (Data.length > 0) {
//         console.log(">0");
//         // console.log((parseInt(Data[0].id)+1).toString().padStart(4, "0"))
//         return ((parseInt(Data[0].id)+1).toString().padStart(4, "0"))
//         // console.log(recordNo)
        
//       }
//       else {
//         console.log("1");
//         return "0001"
//       }
//       // return recordNo
//       // resolve(recordNo)
//     })
//   // })
// }
// // generaterecordNo()

function getId(userId) {

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

function getRoomType() {

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

function getInstayRoom() { //all

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

function getInstayRoomFilter(personCount) {
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
 function getBookingRoom() {
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

 function resevationRoom(roomId,customerId, startStayDate, days) {
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

function cancelResevationRoom(roomId,customerId) {
  //valid roomId
  stayRoomRef.doc(roomId).delete().then((data) => {
    console.log(("Room "+roomId+" have been cancelled successfully."))
  })
}

function adminAddRoom(roomId,customerId,adminId) { //resevation

  stayRoomRef.doc(roomId).set({
    checkInDate: new Date(),
    roomAddBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully added room "+roomId+" with customer"+ customerId);
  })
}

function adminEditRoom(roomId,customerId,adminId) { //resevation

  stayRoomRef.doc(roomId).update({
    checkInDate: new Date(),
    editBy: adminId,
    customerId: customerId,
    totalAmount: ""
  }).then((data)=> {
    console.log("admin successfully update room "+roomId+" with customer"+ customerId);
  })
}

function adminDeleteRoom(roomId) { //resevation

  stayRoomRef.doc(roomId).delete().then((data)=> {
    console.log("admin successfully delete room "+roomId);
  })
}

function checkOut(roomId,customerId,workerId) {
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

function addToRecord(data,id) {
  // get data ->validate->add
  recordRoomRef.set({
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
module.exports = {
  getId,
  addSupervisor,
  editSupervisor,
  deleteSupervisor,
  addWorker,
  editWorker,
  deleteWorker,
  addCustomer,
  editCustomer,
  deleteCustomer,
  getRoomType,
  addRoom,
  editRoom,
  deleteRoom,
  getBookingRoom,
  resevationRoom,
  cancelResevationRoom,
  adminAddRoom,
  adminEditRoom,
  adminDeleteRoom,
  checkOut,
  addToRecord
};
//import { xxx } from 'this file'