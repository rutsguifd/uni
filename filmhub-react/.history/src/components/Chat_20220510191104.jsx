import React, { useState } from "react";
import { firebase } from "../firebase/firebase";
import { addDoc, collection, getFirestore, orderBy, query, serverTimestamp } from "firebase/firestore";
import {useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const Chat = (props) => {
  const auth = getAuth(firebase);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const db = getFirestore();
  const collectionRef = collection(db, props.id);
  const [messages, loading] = useCollectionData(query(collectionRef, orderBy('createdAt')));
  console.log(messages);
  const sendMessage = () => {
    addDoc(collectionRef, {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: serverTimestamp(),
    });
    setValue('');
  }
  if (loading) return null;
  return (
  <div>
    {
      messages.map((message) => 
        <div key={message.createdAt}>
        <div>{message.displayName}</div>
        <div>{message.text}</div>
        </div>
      )
    }
    <MyInput onChange={(e) => setValue(e.target.value)}/>
    <MyButton style={{color: 'black'}} onClick={() => sendMessage()}>send message</MyButton>
  </div>
  );
};

export default Chat;
  