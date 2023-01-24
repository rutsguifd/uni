import React, { useState } from "react";
import { firebase } from "../firebase/firebase";
import { addDoc, collection, getFirestore, orderBy, query, serverTimestamp } from "firebase/firestore";
import {useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import '../styles/Chat.scss'

const Chat = (props) => {
  const auth = getAuth(firebase);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const db = getFirestore();
  const collectionRef = collection(db, props.id);
  const [messages, loading] = useCollectionData(query(collectionRef, orderBy('createdAt')));
  const sendMessage = async () => {
    await addDoc(collectionRef, {
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
  <div className="chat-container">
    <div className="chat">
    {
      messages.map((message) => 
        <div 
        style={{

          margin: 10,
          border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
          marginLeft: user.uid === message.uid ? 'auto' : '10px',
          borderRadius: 7
        }} 
        key={message.createdAt}>
        <image src={message.photoURL} />
        <div>{message.displayName}</div>
        <div>{message.text}</div>
        </div>
      )
    }
    </div>
    <MyInput onChange={(e) => setValue(e.target.value)}/>
    <MyButton style={{color: 'black'}} onClick={() => sendMessage()}>send message</MyButton>
  </div>
  );
};

export default Chat;
  