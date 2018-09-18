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
//-----------------------------------------------------------------------------------------------------------------
//IF YOU RUN and CMD console Document created successfully. Then is ok DONT RUN TOO MANY TIME or comand it with //
//-----------------------------------------------------------------------------------------------------------------
// const document = firestore.doc('posts/intro-to-firestore');
const test = firestore.collection("hotelsystem").doc("main_database").collection("test");
// const doc = firestore.collection("hotelsystem").doc("main_database");
// const timestamp = snapshot.get('created_at');
// const date = timestamp.toDate();

//--------------------------------------------------
//IF WANT TO TEST YOU REMOVE //
//--------------------------------------------------
// Enter new data into the document.
test.doc("test_id").set({
  testname: 'Welcome to Firestore',
  testothers: 'Hello World',
}).then(() => {
  // Document created successfully.
  console.log("Document created successfully.");
});

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

// // // Delete the document.
// // document.delete().then(() => {
// //   // Document deleted successfully.
// // });