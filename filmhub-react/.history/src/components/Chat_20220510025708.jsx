import React from 'react'

const Chat = () => {
    const user = true;
    return (
    <>
    {user ?
    <div>chat is workin</div>
    :
    <div>login to start chatting</div>
    }
    </>
  )
}

export default Chat