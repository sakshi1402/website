import React from 'react'
import PostShare from '../../component/PostShare/PostShare'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft'
import Posts from '../../component/Posts/Posts'
import RightSide from '../../component/RightSide/RightSide'
import'./Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>

      <div className="Profile-center">
        <ProfileCard/>
        <Posts/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
