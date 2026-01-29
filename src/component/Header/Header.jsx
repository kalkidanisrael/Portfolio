import React, { useState } from 'react'
import './Header.css'
import { useEffect } from 'react';
import profile from './MyProfile.jpg'
function Header() {
  const [seconds,setSeconds]=useState(0)
  useEffect(function(){
    var timer=setInterval(function(){
      setSeconds(prev=>prev+1)

    },1000)
    return function(){
      clearInterval(timer)
    }
  },[])
  const hour=Math.floor(seconds/3600)
  const minutes=Math.floor((seconds%3600)/60)
  const secs=seconds%60;
  const format=(num)=>String(num).padStart(2,'0')
  return (
    <div>
        <div className="my-profile">
             <img src={profile} alt=''/>

        </div>
       <div className="content">
          <h2>Hello,I am Kalkidan!</h2>
         <p>I am dedicated front end developer who has deep interest to build responsive web app using React.
            I have official certificates on HTML,CSS and JavaScript Courses and have more than three months of experience.

         </p>
         <h2>{format(hour)}:{format(minutes)}:{format(secs)}</h2>
         

       </div>
       
        
       

      
    </div>
  )
}

export default Header;
