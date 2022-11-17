 import React ,{ useState,useRef} from 'react'
import './PostShare.css';
 import ProfileImg from '../../img/profileImg.jpg';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"


const PostShare = () => {

const [image,setImage]=useState(null);
const ImageRef=useRef(null);

const onImageChange=(event)=>{
if(event.target.files && event.target.files[0])
{
  let img =event.target.files[0];
  setImage({
    image:URL.createObjectURL(img)
  })
}
}

  return (
    <div className='PostShare'>
       <img src={ProfileImg} alt=""/>
<div>
<input type="text"  placeholder="What's happening?"/>
<div className='PostOptions'>

<div className='option'style={{color:"var(--photo)"}} onClick={()=>ImageRef.current.click()}>
  <UilScenery/>Photo
</div>
<div className='option'style={{color:"var(--video)"}}>
  <UilPlayCircle/>Video
</div>
<div className='option' style={{color:"var(--location)"}}>
  <UilLocationPoint/>Location
</div>
<div className='option' style={{color:"var(--schedule)"}}>
  < UilSchedule/>schedule
</div>
<button className='button ps-button'>Share</button>

<div style={{display:"none"}}>
  <input type="file" name="myimg" ref={ImageRef} onChange={onImageChange}/>
</div>
</div>
     
   {image && (
    <div className='previewImage'>
      <UilTimes onClick={()=>setImage(null)}/>
      <img src={image.image} alt=""/>
    </div>
    )} 
    
</div>
    </div>
  )
}

export default PostShare
