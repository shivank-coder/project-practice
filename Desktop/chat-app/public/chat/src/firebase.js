// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAZGZTUgvNZ5F5j8G3z7NkZN-SW-Y7i-rs",
  authDomain: "chat-app-b66ba.firebaseapp.com",
  projectId: "chat-app-b66ba",
  storageBucket: "chat-app-b66ba.appspot.com",
  messagingSenderId: "931075841477",
  appId: "1:931075841477:web:e8d7cc98bbd390381d3fac",
  measurementId: "G-ZMQXTCWSZM"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const auth=getAuth()