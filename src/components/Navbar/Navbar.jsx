import React, { useState }  from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images"

import './Navbar.css';


const Navbar = () => {

  const [toggleMenu, setTogleMenu] = useState(false)

return (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt='Restaurant Logo'/>
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href='#home'>Home</a></li>
      <li className="p__opensans"><a href='#about'>About</a></li>
      <li className="p__opensans"><a href='#menu'>Menu</a></li>
      <li className="p__opensans"><a href='#awards'>Awards</a></li>
      <li className="p__opensans"><a href='#contact'>Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Login / Register </a>
      <div/>
      <a href="/" className='p__opensans'>Book a Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setTogleMenu(true)}/>

      {toggleMenu && (
        <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">  
          <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setTogleMenu(false)}/>
            <ul className='app__navbar-smallscreen-links'>
            <li className="p__opensans"><a href='#home'>Home</a></li>
            <li className="p__opensans"><a href='#about'>About</a></li>
            <li className="p__opensans"><a href='#menu'>Menu</a></li>
            <li className="p__opensans"><a href='#awards'>Awards</a></li>
            <li className="p__opensans"><a href='#contact'>Contact</a></li>
          </ul>
        </div>
    )}

      

    </div>

  </nav>
);}

export default Navbar;
