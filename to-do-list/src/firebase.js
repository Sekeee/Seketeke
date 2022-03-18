import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "AIzaSyDQrpRXmiqnl5hKPVoKDuOD2cbK6Ai5qtw",
    authDomain: "setgel-908fb.firebaseapp.com",
    projectId: "setgel-908fb",
    storageBucket: "setgel-908fb.appspot.com",
    messagingSenderId: "82092751823",
    appId: "1:82092751823:web:d54a350f3bcdaf813ef0ba",
    measurementId: "G-D8HHV1MRYP"
});

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();