import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaaliyDgiAGwOE7Izsd4FeiQKU3VXeh_M",
    authDomain: "feasty-1b5e9.firebaseapp.com",
    databaseURL: "https://feasty-1b5e9.firebaseio.com",
    projectId: "feasty-1b5e9",
    storageBucket: "feasty-1b5e9.appspot.com",
    messagingSenderId: "223022421422",
    appId: "1:223022421422:web:01b7198891300515f6243f",
    measurementId: "G-K6E8MN26FS"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;