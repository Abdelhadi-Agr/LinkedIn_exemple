import React, { useEffect } from 'react';
import './css/App.css';
import Header from './Header.js'
import Sidebar from './Sidebar'
import Feed from './Feed'
import {logout, selectUser} from './features/userSlice'
import { useSelector } from 'react-redux';
import { login } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
            dispatch(
                login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName
                      })
                    )
                  }
      else{
        dispatch(logout());
      }
    })
  },[]);
  return (
    <div className="App">
        {
          !user ? (<Login/>) : (
            <div>
              <Header/>
              <div className='body'>
                <Sidebar/>
                <Feed/>
              </div>
            </div>
          ) 
        }
    </div>
  );
}

export default App;
