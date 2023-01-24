import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import  { getFirestore } from 'firebase/firestore';



const firebase = initializeApp({
  apiKey: "AIzaSyChdV-_NxGxzTFPPzyq0BUZoHWXi90qVMQ",
  authDomain: "react-film-chat.firebaseapp.com",
  projectId: "react-film-chat",
  storageBucket: "react-film-chat.appspot.com",
  messagingSenderId: "140564825310",
  appId: "1:140564825310:web:763ea4e2dacd275423ae4f",
  measurementId: "G-9KZR5B2WEJ"
});

const context = createContext(null);

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

ReactDOM.render(
  <context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </context.Provider>,
  document.getElementById("root")
);
