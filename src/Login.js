import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './css/Login.css'
import { login } from './features/userSlice';
import { db , auth} from './Firebase'
function Login() {
    const dispatch=useDispatch();
    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');

    function register(){
        auth.createUserWithEmailAndPassword(email,password)
        .then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name
                })
                .then(
                    ()=>{
                        dispatch(
                            login({
                                email:userAuth.user.email,
                                uid:userAuth.user.uid,
                                displayName:name
                            })
                        )
                    }
                )
            }
        ).catch((e)=>{alert(e.message)})
    }
    function sign(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{dispatch(login(
            {
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName
            }
        ))})
        .catch(er=>alert(er.message))
    }
    const image='https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png';
  return (
    <div className='Login'>
        <img src={image} alt='linked in logo'/>
        <form>
            <input className='in' type='text' required placeholder='full name' value={name} onChange={e=>setName(e.target.value)}/>
            <input className='in' type='email' required placeholder='please enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
            <input className='in' type='password' required placeholder='enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
            <Button variant="contained" type='submit' onClick={sign}>valide</Button>
        </form>
        <div className="div bottom_form">
        <p>not a member ? </p><span className='span' onClick={register}>create a new account </span>
        </div>
    </div>
  )
}

export default Login