// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebase } from "@react-native-firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDQuyEz-0p9_tEwCMu0X6sLLJEFDES7NLc",
  authDomain: "restaurant-app-851a1.firebaseapp.com",
  projectId: "restaurant-app-851a1",
  storageBucket: "restaurant-app-851a1.appspot.com",
  messagingSenderId: "822383352979",
  appId: "1:822383352979:web:1bf6bf302018b78a084166"
};


if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase}

