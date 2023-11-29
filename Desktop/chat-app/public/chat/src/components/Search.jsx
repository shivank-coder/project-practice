import React from 'react'

function Search() {
  return (
    <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Find a user"
      />
      </div>
      <div className="userChat">
      <img src="https://images.pexels.com/photos/12360591/pexels-photo-12360591.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
<div className="userChatInfo">
    <span>Jane</span>
</div>
      </div>
  </div>
  )
}

export default Search
