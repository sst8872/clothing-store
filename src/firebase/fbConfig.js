import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB36Xbwap8B6xJKYbziOXhazn3QN-tcns0",
    authDomain: "enco-1575271004447.firebaseapp.com",
    databaseURL: "https://enco-1575271004447.firebaseio.com",
    projectId: "enco-1575271004447",
    storageBucket: "enco-1575271004447.appspot.com",
    messagingSenderId: "386253874372",
    appId: "1:386253874372:web:1fabfc33253a772c7bd591",
    measurementId: "G-N83VLPY8C4"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

