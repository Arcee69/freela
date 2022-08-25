import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Logo from "../asset/icons/logo.png";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

      

  return (
    <>
        <div className='w-full flex flex-row justify-between item-center'>
            <div className="w-2/12"> 
                <img src={Logo} alt='logo' className='mt-1.5' />
            </div>
            <div className='md:hidden cursor-pointer' onClick={handleToggle}>
                {navbarOpen ? 
                    <GrClose style={{ color: "#7b7b7b", width: "40px", height: "30px" }} /> 
                    : 
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                }
            </div>
        
            <div className="w-9/12 hidden md:flex flex-row justify-between items-center">
                <ul className='w-8/12 flex flex-row justify-between'>
                    <li className=''><a href='#' className='text-xl font-bold'>Home</a></li>
                    <li><a href='#features' className='text-xl text-opacity-30'>Features</a></li>
                    <li><a href='#works' className='text-xl'>How it Works</a></li>
                </ul>
                <div className='w-2/12'>
                    <a className='outline-black rounded-md border-black border-2 p-2 text-base font-normal' href='#footer'>Contact Us</a>
                </div>
            </div>
        </div>
            {navbarOpen && 
            <div className="w-12/12 mt-5 h-full z-10 bg-gray-400 flex flex-col">
                <ul className='w-12/12 flex flex-col content-between'>
                    <li className='border-b-2'><a href='#' className='text-xl font-bold'>Home</a></li>
                    <li className='border-b-2'><a href='#features' className='text-xl text-opacity-30'>Features</a></li>
                    <li className='border-b-2'><a href='#works' className='text-xl'>How it Works</a></li>
                    <li><a className=' rounded-md text-base font-normal' href='#footer'>Contact Us</a></li>
                </ul>
            </div>}
    </>
  )
}

export default Navbar;