import { Avatar } from '@mui/material'
import React from 'react'
import './css/Sidebar.css'
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user=useSelector(selectUser);

    let background_img='https://atalayar.com/sites/default/files/styles/foto_/public/noticias/criptomonedas-bitcoin_0.jpg?itok=A4Y3DZT1';
    const avatar_image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bc_v0agSZn0TbV3kUHEmjS4HbchtpRF_mQ&usqp=CAU';
    function recent_item(topic){
        return (
            <div className='recent_item'>
                <span className='hash'>#</span>
                <p className='hover'>{topic}</p>
            </div>
        )
    }
    return (
    <div className='Sidebar'>
        <div className='Sidebar_top'>
            <img src={background_img} alt='backgroud'/>
            <Avatar src={user.picUrl} className='Sidebar_top_avatar'>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
            <div className='states'>
                <div className='state'>
                    <p>who viewd ur profile</p>
                    <p className='statistics'>2,564</p>
                </div>
                <div className='state'>
                    <p>views on post</p>
                    <p className='statistics'>7,321</p>
                </div>
            </div>
        <div className='Sidebar_bottom'>
            <p className='Recent'>Recent</p>
            {recent_item('recat js')}
            {recent_item('vue js')}
            {recent_item('laravel')}
            {recent_item('angular')}
            {recent_item('spring')}
        </div>
    </div>
  )
}

export default Sidebar