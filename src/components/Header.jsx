import React from 'react';
import image from '../assets/favicon1.png'

const Header = () => {
  return (
    <header className='bg-gray-800 text-white  flex justify-between items-center'>
      <img src={image}   alt="logo" />
      <nav>
        <ul className='flex space-x-4'>
          <li><a href="#">Головна</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#contact">Наші контакти</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;