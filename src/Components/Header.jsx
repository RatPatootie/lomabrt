import React from 'react';
import image from '../assets/favicon1.png'

const Header = () => {
  return (
    <header className='bg-gray-800 text-white  flex justify-between items-center'>
      <img src={image}   alt="logo" />
      <nav>
        <ul className='flex space-x-4'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;