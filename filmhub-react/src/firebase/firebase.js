import { initializeApp } from "firebase/app";
import env from '../env'

const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.measurementId
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  export {firebase};