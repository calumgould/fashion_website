import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATEBASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

export const db = myFirebase.firestore();

export const storage = firebase.storage();

export const createFirestoreUser = (user) => {
    return db.collection('users').doc(`${user.uid}`)
        .set({
            created: firebase.firestore.FieldValue.serverTimestamp(),
        })
}

// export const updateCurrentUserFirestoreDetails = (user) => {
//     return db.collection('users').doc(`${user.uid}`)
//         .update({
//             displayName: user.displayName
//         })
// }