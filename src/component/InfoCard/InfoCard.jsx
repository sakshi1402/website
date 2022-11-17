import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

const [modalopened,setmodalopened]=useState(false);

  return (
    <div className='InfoCard'>
     <div className='infoHead'>
        <h3>Your Info</h3>
        <div>
        <UilPen onClick={()=>setmodalopened(true)}/>
        <ProfileModal modalopened={modalopened} setmodalopened={setmodalopened}/>
        </div>
       
     </div>
     <div className="info"><hr/>
        <span>Status</span>
        <span> in Relationship</span>
     </div>
     <div className="info">
        <span>Lives</span>
        <span> in Indore</span>
     </div><div className="info">
        <span>Works at</span>
        <span> Iet Davv </span>
     </div>
     <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
