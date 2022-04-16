// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi2-aHOt_WPJWJjetkVHwxz7r1kC8NRt4",
  authDomain: "router-firebase-hook-react.firebaseapp.com",
  projectId: "router-firebase-hook-react",
  storageBucket: "router-firebase-hook-react.appspot.com",
  messagingSenderId: "933166843775",
  appId: "1:933166843775:web:9f3d32b7bac924eb47fc4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;