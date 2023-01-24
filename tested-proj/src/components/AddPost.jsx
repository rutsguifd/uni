import React, { useState } from 'react'
import MyButton from './UI/MyButton/MyButton'
import MyInput from './UI/MyInput/MyInput'

function AddPost({create}) {
  const [post, setPost] = useState({title:'', body:''})
  const addPost = (e) =>{
    e.preventDefault()
    const newPost = {...post, id: Date.now()}
    create(newPost)
    setPost({title:'', body:''})
  }
  return (
    <form>
        <MyInput onChange={e =>setPost({...post, title: e.target.value})} value={post.title} type='text' placeholder='name'/>
        <MyInput onChange={e =>setPost({...post, body: e.target.value})} value={post.body} type='text' placeholder='description'/>
        <MyButton onClick={addPost}>Add</MyButton>
    </form>
  )
}

export default AddPost