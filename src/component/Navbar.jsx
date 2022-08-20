import React, { useState } from 'react';
import { Button } from '@mui/material';

import Logo from "../asset/icons/logo.png";

const Navbar = () => {
    const [active, setActive] = useState("Home");


  return (
    <div className='w-full flex flex-row justify-between item-center'>
        <div className="w-1/3"> 
            <img src={Logo} alt='logo' className='mt-1.5' />
        </div>
        <ul className="w-1/3 flex flex-row justify-between items-center">
            <li><a href='' className='text-xl font-bold'>Home</a></li>
            <li><a href='' className='text-xl text-opacity-30'>Features</a></li>
            <li><a href='' className='text-xl'>How it Works</a></li>
        </ul>
        <div className="w-1/3 flex flex-row justify-end">
            <button className='outline-black rounded-md border-black border-2 p-2 text-base font-normal'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar;