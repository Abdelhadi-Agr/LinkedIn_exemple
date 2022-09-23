import React,{useEffect, useState} from 'react'
import './css/Feed.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Input_option from './Input_option';
import Post from './Post';
import { db , auth} from './Firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
  const user=useSelector(selectUser);
   const avatar_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bc_v0agSZn0TbV3kUHEmjS4HbchtpRF_mQ&usqp=CAU';
   var [post,setpost]=useState([]);
   var [value,setValue]=useState('');
   
    function handleChange(e){
      e.preventDefault();
      setValue(e.target.value);
    }
    function submit(e){
      //console.log(value);
      e.preventDefault();
      setpost([value,...post]);
      setValue('');
    }
    
    useEffect(()=>{
      let ar=[];
      db.collection('post')
      .orderBy('time','desc')
      .onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{
          let d={
            id:doc.id,
            data:doc.data()
          }
          ar.push(d.data);
          setpost(ar);
        })
      })
    },[post])

   function send(e){
    e.preventDefault();
    db.collection('post').add({
      name:user.displayName,
      description:user.email,
      message:value,
      time:firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('');
   }
   return (
    <div className='Feed'>
        <div className='input_container'>
            <div className='input'>
                <BorderColorIcon/>
                <form>
                    <input type='text' value={value} onChange={handleChange} />
                    <button onClick={send} type='submit'>send</button>
                </form>
            </div>
           <div className="input_options">
            <Input_option Icon={ImageIcon} text='image' color='#70B5F9' />
            <Input_option Icon={OndemandVideoIcon} text='video' color='#E7A33E'/>
            <Input_option Icon={EventIcon} text='event' color='#C0CBCD'/>
            <Input_option Icon={ArticleIcon} text='article' color='#7FC15E'/>
           </div>
        </div>
      <FlipMove>
        {post.map((p)=>
         <Post key={p.id}
            avatar_image={p.picUrl}
            name={p.name}
            description={p.description}
            message={p.message}/>
        )}
      </FlipMove>
    </div>
  )
}

export default Feed