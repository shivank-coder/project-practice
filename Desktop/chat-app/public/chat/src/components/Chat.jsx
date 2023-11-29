import React from 'react'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
   <div className="chat">
   <div className="chatInfo">
    <span>
        Jane
    </span>
    <div className="chatIcons">
        <img src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8RUE9RC0c7j_aDnrL4llMioCm1WNthpolph6nXNxOg&s" alt="" />

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5z1AAL5HxcbaPuYCuqyltVJ-HzhBwu3jzbmGdmWU&s" alt="" />

    </div>
    
   
   </div>
   <Messages />
   <Messages />
  
   <Input />

   </div>
  )
}

export default Chat
