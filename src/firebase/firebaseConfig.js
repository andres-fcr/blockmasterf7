import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3So5IXmiyCHQToxovCCh4RQJQF2p9uZU",
  authDomain: "blockmasterf7-44bd7.firebaseapp.com",
  projectId: "blockmasterf7-44bd7",
  storageBucket: "blockmasterf7-44bd7.appspot.com",
  messagingSenderId: "585717953159",
  appId: "1:585717953159:web:e2bd4bc6e500a3afe63e22"
};



const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore()

export {
  app,
  google,
  db
}