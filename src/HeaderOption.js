import { Avatar } from '@mui/material'
import React from 'react'
import './css/headerOption.css'
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
function HeaderOption(props) {
  const user=useSelector(selectUser);
  return (
    <div className='headerOption' onClick={props.onClick}>
        {props.icon && <props.icon className='headerOption_icon'/>}
        {props.avatar && <Avatar className='' src={user.email[0]}>{user.email[0]}</Avatar>}
        <h4 className='headerOption_title'>{props.title}</h4>
    </div>
  )
}

export default HeaderOption