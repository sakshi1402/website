import React from 'react'
import ProfileSide from '../../component/profileside/ProfileSide'
import PostSide from '../../component/PostSide/PostSide'
import './Home.css'
import RightSide from '../../component/RightSide/RightSide'
function Home() {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home
