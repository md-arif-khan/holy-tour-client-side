// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9w4gNqL-uLMz_YfmwmT5X0Ob6EOOCV4",
  authDomain: "holy-tour.firebaseapp.com",
  projectId: "holy-tour",
  storageBucket: "holy-tour.appspot.com",
  messagingSenderId: "788533885464",
  appId: "1:788533885464:web:cb4c32af0d33e13bc7216d"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;