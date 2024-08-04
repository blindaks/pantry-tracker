// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAosF73ibbPeuwr28WYP07iy7UysGRGP8",
  authDomain: "inventory-management-6560d.firebaseapp.com",
  projectId: "inventory-management-6560d",
  storageBucket: "inventory-management-6560d.appspot.com",
  messagingSenderId: "304276155909",
  appId: "1:304276155909:web:cb369191ab3a9f2c4df66c",
  measurementId: "G-EZT6VQDH2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
