import React from 'react'
import './Posts.css';
import { Postsdata } from '../../Data/PostsData';
import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className='Posts'>
         {Postsdata.map((post,id)=>{
            return <Post data={post} id={id}/>
         })}
        </div>
    )
}

export default Posts
