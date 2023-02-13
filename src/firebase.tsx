import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoCNBgyb-Y_ik3VWpmxtXMqcVU1B_I7Pk",
  authDomain: "bill-7d3a5.firebaseapp.com",
  projectId: "bill-7d3a5",
  storageBucket: "bill-7d3a5.appspot.com",
  messagingSenderId: "1043359662492",
  appId: "1:1043359662492:web:e977494eb1e1c55ff74859",
  measurementId: "G-53QK3JMR9K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
