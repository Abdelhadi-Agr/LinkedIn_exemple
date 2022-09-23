import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import './css/Post.css'
import Input_option from './Input_option';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';
const Post=forwardRef((props,ref)=> {
    const user=useSelector(selectUser);
  return (
    <div ref={ref} className='Post'>
        <div className="Post_header">
            <Avatar src={props.avatar_image}>{props.name[0]}</Avatar>
            <div className="Post_info">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="Post_body">
            <p>{props.message}</p>
            <div className="options">
                <Input_option Icon={ThumbUpOffAltIcon} text='like' color='gray' text_color='gray'/>
                <Input_option Icon={InsertCommentIcon} text='comment' color='gray' text_color='gray'/>
                <Input_option Icon={ShareIcon} text='like' color='gray' text_color='gray'/>
                <Input_option Icon={SendIcon} text='comment' color='gray' text_color='gray'/>
            </div>
        </div>
    </div>
  )
}
)

export default Post