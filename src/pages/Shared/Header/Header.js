import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const logout=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
    return (
        <div className="navbar bg-[#570DF8]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-white rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li>{user?.email?<Link><button onClick={logout}  className="btn btn-sm">Log Out</button></Link>:<Link to='/login'><button className="btn btn-sm">Login</button></Link>}</li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white">Holy Tour</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li>{user?.email?<Link><button onClick={logout}   className="btn btn-sm">Log Out</button></Link>:<Link to='/login'><button className="btn btn-sm">Login</button></Link>}</li>
    </ul>
  </div>
 
</div>
    );
};

export default Header;