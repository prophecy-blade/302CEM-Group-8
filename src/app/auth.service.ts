import { Injectable } from '@angular/core';
import * as Firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

interface User {
  id: String;
  email: String;
  photo: String;
  username: String;
  role?: String;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  database: any;

  user: Observable<User>;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {
    var config = {
      apiKey: 'AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA',
      authDomain: 'tclowdemo.firebaseapp.com',
      databaseURL: 'https://tclowdemo.firebaseio.com',
      projectId: 'tclowdemo'
    };

    Firebase.initializeApp(config);
    this.database = Firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    this.database.settings(settings);

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public googleLogin() {
    let t = this;

    var provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithRedirect(provider);
    Firebase.auth()
      .getRedirectResult()
      .then(function(result) {
        var token = result.credential;
        var user = result.user;
        // console.log("User: ", user);
        // console.log("Token: ", token);

        t.updateUserData(user, token);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateUserData(user, token) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    var data: User = {
      id: user.uid,
      email: user.email,
      username: user.displayName,
      photo: user.photoURL,
      role: 'customer'
    };

    return userRef.set(data, { merge: true });

    let db = this.database;
    let t = this;
    let verify = false;
    db.collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());

          if (data.id == doc.data().id) {
            //console.log(doc.data().role);
            data.role = doc.data().role;
            //t.verifyUserRole(data, doc.data().role);

            db.doc('users/' + user.id)
              .set(data, { merge: true })
              .then(function(result) {
                console.log('Login Success => ', result);
                t.router.navigateByUrl('/home');
                //return result;
              })
              .catch(function(error) {
                console.log(error);
              });

            verify = true;
          }
        });

        if (verify == false) {
          db.doc('users/' + user.id)
            .set(data, { merge: true })
            .then(function(result) {
              console.log('Login Success => ', result);
              t.router.navigateByUrl('/home');
              //return result;
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    //this.verifyUserRole(data);
  }
}
