import React from 'react'
import input from './input.css'
function Input() {
  return (
    <div className='input'>
     <input type="text" placeholder='type something....' />
     <div className="send">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5z1AAL5HxcbaPuYCuqyltVJ-HzhBwu3jzbmGdmWU&s" alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5z1AAL5HxcbaPuYCuqyltVJ-HzhBwu3jzbmGdmWU&s" alt="" />
        </label>
        <button>send</button>
     </div>
    </div>
  )
}

export default Input
