// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsGrCcbN_6OVKEFvBkIbNTqRJNvBb21DM",
  authDomain: "responsible-doctor.firebaseapp.com",
  projectId: "responsible-doctor",
  storageBucket: "responsible-doctor.appspot.com",
  messagingSenderId: "434325203840",
  appId: "1:434325203840:web:9b99cc9d81c9281299ef65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth; 