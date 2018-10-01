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

interface User {
  id: string;
  email: string;
  photo?: string;
  username?: string;
  role?: string;
}


@Injectable()
export class AuthService {

  user: Observable<User>;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      id: user.uid,
      email: user.email,
      username: user.displayName,
      photo: user.photoURL
    }

    console.log(data);
    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  // googleLogin() {
  //   let t = this;
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   firebase.auth().signInWithPopup(provider).then(function(result) {
  //     var token = result.credential;
  //     var user = result.user;
  //     var data: User = {
  //       id: user.uid,
  //       email: user.email,
  //       username: user.displayName,
  //       photo: user.photoURL,
  //       role: "customer",
  //     }
  //     t.updateUserData(data, token);
  //     return data;
  //   }).catch(function(error) {
  //     console.log(error);
  //   })
  // }

  // updateUserData(data, token) {
  //   let db = database;
  //   let t = this;

  //   //t.router.navigateByUrl('/home');

  //   let verify = false;
  //   db.collection("users").get().then((querySnapshot) => {
  //     querySnapshot.forEach(function(doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());

  //       if(data.id == doc.data().id){
  //         //console.log(doc.data().role);
  //         data.role = doc.data().role;
  //         //t.verifyUserRole(data, doc.data().role);

  //         db.doc('users/' + data.id).set(data, {merge: true}).then(function(result) {
  //           console.log("Login Success => ", result);
  //           //t.router.navigateByUrl('/home');
  //           //return result;
  //         }).catch(function(error) {
  //           console.log(error);
  //         });

  //         verify = true;
  //       }
  //     });

  //     if(verify == false) {
  //       db.doc('users/' + data.id).set(data, {merge: true}).then(function(result) {
  //         console.log("Login Success => ", result);
  //         //t.router.navigateByUrl('/home');
  //         //return result;
  //       }).catch(function(error) {
  //         console.log(error);
  //       });
  //     }
  //   })
  //   //this.verifyUserRole(data);
  // }

}