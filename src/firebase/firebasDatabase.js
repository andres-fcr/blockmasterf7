import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3So5IXmiyCHQToxovCCh4RQJQF2p9uZU",
  authDomain: "blockmasterf7-44bd7.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://blockmasterf7-44bd7-default-rtdb.firebaseio.com/",
  projectId: "blockmasterf7-44bd7",
  storageBucket: "blockmasterf7-44bd7.appspot.com",
  messagingSenderId: "585717953159",
  appId: "1:585717953159:web:e2bd4bc6e500a3afe63e22",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export{
    app,
    database
}