
const Navbar = () => {

  return (
    <div className='navbar'>
      <span className="logo">Chat-App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/12360591/pexels-photo-12360591.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar