import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChdV-_NxGxzTFPPzyq0BUZoHWXi90qVMQ",
    authDomain: "react-film-chat.firebaseapp.com",
    projectId: "react-film-chat",
    storageBucket: "react-film-chat.appspot.com",
    messagingSenderId: "140564825310",
    appId: "1:140564825310:web:763ea4e2dacd275423ae4f",
    measurementId: "G-9KZR5B2WEJ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};