// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSvm8CZnGLpFxVMcl1pkFmYWsZy9yBT0",
  authDomain: "react-films-firebase.firebaseapp.com",
  projectId: "react-films-firebase",
  storageBucket: "react-films-firebase.appspot.com",
  messagingSenderId: "402777475503",
  appId: "1:402777475503:web:a66a7a651a23c0ef5f075a",
  measurementId: "G-7T7TSLLJYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;