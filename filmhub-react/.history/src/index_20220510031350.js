import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
  apiKey: "AIzaSyChdV-_NxGxzTFPPzyq0BUZoHWXi90qVMQ",
  authDomain: "react-film-chat.firebaseapp.com",
  projectId: "react-film-chat",
  storageBucket: "react-film-chat.appspot.com",
  messagingSenderId: "140564825310",
  appId: "1:140564825310:web:763ea4e2dacd275423ae4f",
  measurementId: "G-9KZR5B2WEJ"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
