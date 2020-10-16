import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const config = require('../config')()

var firebaseConfig = config.firebaseConfig



    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

// Initialize Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

//  inject('firebase', firebase)