import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvK_cSnhy9hQDnNx3MOv5CzZj9JSUYzms",
  authDomain: "simple-web-app-f8222.firebaseapp.com",
  projectId: "simple-web-app-f8222",
  storageBucket: "simple-web-app-f8222.firebasestorage.app",
  messagingSenderId: "395055623094",
  appId: "1:395055623094:web:497769a3c891a32d5c6f17",
  measurementId: "G-58E9EYKBFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};