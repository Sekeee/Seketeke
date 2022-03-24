import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDL6EnCCj5r4ljNZWeJeDvnw3wabFNWjJg",
    authDomain: "setgel-zenly.firebaseapp.com",
    projectId: "setgel-zenly",
    storageBucket: "setgel-zenly.appspot.com",
    messagingSenderId: "678387100592",
    appId: "1:678387100592:web:833f49b6ffc3172e7c4475",
    measurementId: "G-H5RYP2VTKQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);