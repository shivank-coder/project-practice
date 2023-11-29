import React from 'react'
import './message.css'
function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
      <img src="https://images.pexels.com/photos/12360591/pexels-photo-12360591.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" 
      />
      <span>Just now</span>


      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/12360591/pexels-photo-12360591.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />

      </div>
    </div>
  )
}

export default Message
