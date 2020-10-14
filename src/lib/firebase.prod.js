import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
const config = {
  apiKey: "AIzaSyA3jSJQL4bcH9kdwLDXIy_BUtdHl50y3qo",
  authDomain: "netflixclone-by-pulkit.firebaseapp.com",
  databaseURL: "https://netflixclone-by-pulkit.firebaseio.com",
  projectId: "netflixclone-by-pulkit",
  storageBucket: "netflixclone-by-pulkit.appspot.com",
  messagingSenderId: "474100874278",
  appId: "1:474100874278:web:b8b39135edabcf909d7ae7",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
