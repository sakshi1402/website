import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import NotLike from '../../img/notlike.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';


const Post = ({ data }) => {
  return (
    <div className='Post'>
      <img src={data.img} alt="" />




      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes} likes</span>
      <div className="details">
        <span><i><b>{data.name}</b></i></span><hr/>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default Post
