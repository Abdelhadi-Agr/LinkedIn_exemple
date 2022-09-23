import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
function Header() {
    const linkedin_logo='https://cdn-icons-png.flaticon.com/512/174/174857.png';
    const avatar_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bc_v0agSZn0TbV3kUHEmjS4HbchtpRF_mQ&usqp=CAU';
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const log_out=()=>{
      dispatch(logout());
      auth.signOut();
    }
  return (
    <div className='header'>
        <div className='header_left'>
            <img src={linkedin_logo} alt='linkedin_logo'/>
            <div className='header_left_search'>
                <SearchIcon/>
                <input type='text'/>
            </div>
        </div>
        <div className='header_right'>
          <HeaderOption title='home' icon={HomeIcon}/>
          <HeaderOption title='my network' icon={PeopleIcon}/>
          <HeaderOption title='jobs' icon={BusinessCenterIcon}/>
          <HeaderOption title='messages' icon={MessageIcon}/>
          <HeaderOption title='notification' icon={NotificationsIcon}/>
          <HeaderOption avatar={user.email} title='' onClick={log_out}/>
        </div>
    </div>
  )
}

export default Header