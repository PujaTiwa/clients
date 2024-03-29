import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from "../../assets/logo.PNG";
import Search from "../../assets/search.svg";
import Avatar from "../../components/Avatar/Avatar";
import './Navbar.css';
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch()

  var User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch]);

  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to='/' className='nav-item nav-logo'>
            <img src={Logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type='text' placeholder='Search...' />
            <img src={Search} alt='search' width={18} className='search-icon'/>
        </form>
        { User === null ? 
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
          <>
            <Avatar backgroundColor='#009dff' px="10px" py="5px" borderRadius="50%" color="white"><Link to='/' style={{color: "white", textDecoration: "none"}}>P</Link></Avatar>
            <button className='nav-item nav-links'>Log out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar