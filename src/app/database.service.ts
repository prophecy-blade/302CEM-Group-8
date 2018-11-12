import { Injectable } from '@angular/core';

//-----firestore setup-----
// const Firestore = require('@google-cloud/firestore');
import { Firestore } from '@google-cloud/firestore';

const firestore = new Firestore({
  projectId: 'tclowdemo',
  keyFilename: 'tclowdemo-27e3a2acc7b9.json'
});
// console.log(JSON.stringify(firestore));
const settings = { timestampsInSnapshots: true };
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

  constructor(/*private db: AngularFirestore*/) {}

  userRef = firestore.collection('users');
  supervisorRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('supervisor');
  workerRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('hotelDeskPersonnel');
  customerRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('customer');
  roomRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('room');
  bookingRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('booking');
  stayRoomRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('booking')
    .doc('inStay')
    .collection('room');
  recordRoomRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('booking')
    .doc('record')
    .collection('room');
  paymentRef = firestore
    .collection('hotelsystem')
    .doc('main_database')
    .collection('payment');

  generateId() {
    //increment id
  }

  getId(userId) {
    this.userRef
      .where('id', '==', userId)
      .get()
      .then(snapshot => {
        var Data = [];
        snapshot.forEach(doc => {
          var data = doc.data();
          data.id = doc.id;
          Data.push(data);
          // console.log(data);
        });
        console.log(Data);
        return Data;
      });
  }

  addSupervisor(supervisorId, firstName, lastName, gender, ic, email, phone) {
    this.supervisorRef
      .doc(supervisorId)
      .set({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone
      })
      .then(data => {
        console.log('supervisor ' + supervisorId + ' has been added');
      });
  }

  editSupervisor(supervisorId, firstName, lastName, gender, ic, email, phone) {
    this.supervisorRef
      .doc(supervisorId)
      .update({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone
      })
      .then(data => {
        console.log('supervisor ' + supervisorId + ' has been updated');
      });
  }

  deleteSupervisor(supervisorId) {
    this.supervisorRef
      .doc(supervisorId)
      .delete()
      .then(data => {
        console.log('supervisor ' + supervisorId + ' has been removed');
      });
  }

  addWorker(
    hotelDeskPersonnelId,
    firstName,
    lastName,
    gender,
    ic,
    email,
    phone
  ) {
    this.workerRef
      .doc(hotelDeskPersonnelId)
      .set({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone
      })
      .then(data => {
        console.log(
          'Hotel desk personnel ' + hotelDeskPersonnelId + ' has been added'
        );
      });
  }

  editWorker(
    hotelDeskPersonnelId,
    firstName,
    lastName,
    gender,
    ic,
    email,
    phone
  ) {
    this.workerRef
      .doc(hotelDeskPersonnelId)
      .update({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone
      })
      .then(data => {
        console.log(
          'Hotel desk personnel ' + hotelDeskPersonnelId + ' has been updated'
        );
      });
  }

  deleteWorker(hotelDeskPersonnelId) {
    this.workerRef
      .doc(hotelDeskPersonnelId)
      .delete()
      .then(data => {
        console.log(
          'Hotel desk personnel ' + hotelDeskPersonnelId + ' has been deleted'
        );
      });
  }

  addCustomer(
    customerId,
    firstName,
    lastName,
    gender,
    ic,
    email,
    phone,
    nationality,
    city,
    state
  ) {
    this.customerRef
      .doc(customerId)
      .set({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone,
        nationality: nationality,
        city: city,
        state: state
      })
      .then(data => {
        console.log('Customer ' + customerId + ' has been added');
      });
  }

  editCustomer(
    customerId,
    firstName,
    lastName,
    gender,
    ic,
    email,
    phone,
    nationality,
    city,
    state
  ) {
    this.customerRef
      .doc(customerId)
      .update({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        ic: ic,
        email: email,
        phone: phone,
        nationality: nationality,
        city: city,
        state: state
      })
      .then(data => {
        console.log('Customer ' + customerId + ' has been added');
      });
  }

  deleteCustomer(customerId) {
    this.customerRef
      .doc(customerId)
      .delete()
      .then(data => {
        console.log('Customer ' + customerId + ' has been deleted');
      });
  }
  //not use
  getRoomType() {
    this.roomRef.get().then(snapshot => {
      var Data = [];
      snapshot.forEach(doc => {
        var data = doc.data();
        data.id = doc.id;
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data;
    });
  }

  getBookingRoom() {
    //all

    this.stayRoomRef.get().then(snapshot => {
      var Data = [];
      snapshot.forEach(doc => {
        var data = doc.data();
        data.id = doc.id;
        Data.push(data);
        // console.log(data);
      });
      console.log(Data);
      return Data;
      // return Promise.resolve(Data);
    });
  }
  // getInstayRoom()

  getBookingRoomFilter(personCount) {
    if (personCount > 0) {
      if (personCount >= 1) {
        console.log('Single,Straits');
        var t = 'S';
      }
      if (personCount >= 2) {
        console.log('Double,Deluxe');
        var t = 'D';
      }
      if (personCount >= 3) {
        console.log('Family');
        var t = 'F';
      }
      if (personCount >= 5) {
        console.log('Party');
        var t = 'P';
      }
      if (t == 'S') {
        var Datas = [];
        this.stayRoomRef
          .where('type', '==', 'Single')
          .get()
          .then(snapshot => {
            var Data = [];
            snapshot.forEach(doc => {
              var data = doc.data();
              data.id = doc.id;
              Data.push(data);
              // console.log(data);
            });
            // console.log(Data);
            // return Data
            this.stayRoomRef
              .where('type', '==', 'Straits')
              .get()
              .then(snapshot => {
                // var Data = []
                snapshot.forEach(doc => {
                  var data = doc.data();
                  data.id = doc.id;
                  Data.push(data);
                  // console.log(data);
                });
                console.log(Data);
                return Data;
              });
          });
      }
      if (t == 'D') {
        var Datas = [];
        this.stayRoomRef
          .where('type', '==', 'Double')
          .get()
          .then(snapshot => {
            var Data = [];
            snapshot.forEach(doc => {
              var data = doc.data();
              data.id = doc.id;
              Data.push(data);
              // console.log(data);
            });
            // console.log(Data);
            // return Data
            this.stayRoomRef
              .where('type', '==', 'Deluxe')
              .get()
              .then(snapshot => {
                // var Data = []
                snapshot.forEach(doc => {
                  var data = doc.data();
                  data.id = doc.id;
                  Data.push(data);
                  // console.log(data);
                });
                console.log(Data);
                return Data;
              });
          });
      }
      if (t == 'F') {
        this.stayRoomRef
          .where('type', '==', 'Family')
          .get()
          .then(snapshot => {
            var Data = [];
            snapshot.forEach(doc => {
              var data = doc.data();
              data.id = doc.id;
              Data.push(data);
              // console.log(data);
            });
            console.log(Data);
            return Data;
          });
      }
      if (t == 'P') {
        this.stayRoomRef
          .where('type', '==', 'Party')
          .get()
          .then(snapshot => {
            var Data = [];
            snapshot.forEach(doc => {
              var data = doc.data();
              data.id = doc.id;
              Data.push(data);
              // console.log(data);
            });
            console.log(Data);
            return Data;
          });
      }
    } else {
      this.stayRoomRef.get().then(snapshot => {
        //all
        var Data = [];
        snapshot.forEach(doc => {
          var data = doc.data();
          data.id = doc.id;
          Data.push(data);
          // console.log(data);
        });
        console.log(Data);
        return Data;
      });
    }
  }
  //not use
  addRoom(
    roomId,
    roomType,
    roomDescription,
    bedCount: number,
    MinBedCount: number,
    MaxBedCount: number,
    roomPrice: number,
    supervisorId,
    hotelDeskPersonnelId
  ) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    this.roomRef
      .doc(roomId)
      .set({
        type: roomType,
        description: roomDescription,
        bedCount: bedCount,
        MinBedCount: MinBedCount,
        MaxBedCount: MaxBedCount,
        price: roomPrice
      })
      .then(data => {
        console.log('Room ' + roomId + ' has been added successfully.');
      });
  }
  //not use
  editRoom(
    roomId,
    roomType,
    roomDescription,
    bedCount: number,
    MinBedCount: number,
    MaxBedCount: number,
    roomPrice: number
  ) {
    //valid roomId,supervisorId,hotelDeskPersonnelId
    this.roomRef
      .doc(roomId)
      .update({
        type: roomType,
        description: roomDescription,
        bedCount: bedCount,
        MinBedCount: MinBedCount,
        MaxBedCount: MaxBedCount,
        price: roomPrice
      })
      .then(data => {
        console.log('Room ' + roomId + ' has been updated successfully.');
      });
  }
  //not use
  deleteRoom(roomId) {
    //valid roomId
    this.roomRef
      .doc(roomId)
      .delete()
      .then(data => {
        console.log('Room ' + roomId + ' has been removed successfully.');
      });
  }
  // getBookingRoom() {
  //   this.stayRoomRef.get().then(snapshot => {
  //     var Data = []
  //     snapshot.forEach(doc => {
  //       var data = doc.data()
  //       data.id = doc.id
  //       Data.push(data);
  //       // console.log(data);
  //     });
  //     console.log(Data);
  //     return Data
  //   })
  // }

  resevationRoom(roomId, customerId, startStayDate, endStayDate, days) {
    //valid roomId avalaible
    this.stayRoomRef
      .doc(roomId)
      .get()
      .then(data => {
        var id = data.id;
        var Data = data.data();
        console.log(id);
        console.log(Data);
        if (Data == undefined || Data.status != 'Available') {
          console.log('room not found or not Available');
        } else {
          this.customerRef
            .doc(customerId)
            .get()
            .then(customerData => {
              var cId = customerData.id;
              var cData = customerData.data();
              console.log(cId);
              console.log(cData);
              if (cData == undefined) {
                console.log('Invalid customer id');
              } else {
                var totalAmount = Data.amount * parseInt(days);
                this.stayRoomRef
                  .doc(roomId)
                  .update({
                    bookingDate: new Date(),
                    startStayDate: startStayDate,
                    endStayDate: endStayDate,
                    dayStay: days,
                    customerId: customerId,
                    totalAmount: totalAmount,
                    status: 'Booking'
                  })
                  .then(data => {
                    // Document created successfully.
                    console.log(
                      'Room ' +
                        roomId +
                        ' has been booked successfully by ' +
                        customerId
                    );
                  });
              }
            });
        }
      });
  }

  cancelResevationRoom(roomId, customerId) {
    //valid roomId
    this.stayRoomRef
      .doc(roomId)
      .get()
      .then(data => {
        var id = data.id;
        var Data = data.data();
        console.log(id);
        console.log(Data);
        if (Data == undefined || Data.status != 'Booking') {
          console.log('room not found or not Available');
        } else {
          this.customerRef
            .doc(customerId)
            .get()
            .then(customerData => {
              var cId = customerData.id;
              var cData = customerData.data();
              console.log(cId);
              console.log(cData);
              if (cData != undefined && Data.customerId == customerId) {
                this.stayRoomRef
                  .doc(roomId)
                  .update({
                    status: 'Cancelled'
                  })
                  .then(data => {
                    // Document created successfully.
                    console.log(
                      'Room ' + roomId + ' has been cancelled by ' + customerId
                    );
                  });
              } else {
                console.log('Invalid customer id');
              }
            });
        }
      });
  }

  adminAddRoom(roomId, adminId) {
    //resevation

    this.stayRoomRef
      .doc(roomId)
      .set({
        addDate: new Date(),
        roomAddBy: adminId
        // customerId: customerId,
        // totalAmount: ""
      })
      .then(data => {
        console.log(
          'admin successfully added room ' + roomId + ' with customer'
        );
      });
  }

  adminEditRoom(roomId, adminId) {
    //resevation
    //need valid
    this.stayRoomRef
      .doc(roomId)
      .update({
        editDate: new Date(),
        editBy: adminId
        // customerId: customerId,
        // totalAmount: ""
      })
      .then(data => {
        console.log('admin successfully update room ' + roomId);
      });
  }

  adminDeleteRoom(roomId) {
    //resevation

    this.stayRoomRef
      .doc(roomId)
      .delete()
      .then(data => {
        console.log('admin successfully delete room ' + roomId);
      });
  }

  checkOut(roomId, customerId, workerId) {
    this.stayRoomRef
      .doc(roomId)
      .get()
      .then(data_origin => {
        var id = data_origin.id;
        var Data = data_origin.data();
        console.log(Data.customerId);
        console.log(customerId);
        if (customerId == Data.customerId && Data.status == 'InStay') {
          this.stayRoomRef
            .doc(roomId)
            .update({
              checkOutDate: new Date(),
              checkOutBy: workerId,
              status: 'Checkout'
            })
            .then(data => {
              console.log('Customer successfully checkout');
              this.stayRoomRef
                .doc(roomId)
                .get()
                .then(data => {
                  var id = data.id;
                  var Data = data.data();
                  console.log(Data);
                  // var recordNo = generaterecordNo()
                  // console.log(recordNo)
                  this.recordRoomRef
                    .add({
                      roomId: roomId,
                      cusstomerId: Data.customerId,
                      checkInBy: Data.checkInBy,
                      checkInDate: Data.checkInDate,
                      checkOutBy: Data.checkOutBy,
                      checkOutDate: Data.checkOutDate,
                      totalAmount: Data.totalAmount
                    })
                    .then(record => {
                      console.log('Data successfully recorded');
                      //reset
                    });
                });
            });
        } else {
          console.log('no valid');
        }
      });
  }
  //not use
  addToRecord(data, id) {
    // get data ->validate->add
    this.recordRoomRef.doc(id).set({
      data
    });
  }
}
