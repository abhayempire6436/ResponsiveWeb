import React from 'react'
import logo from '../../assets/logo.svg'
// import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import ResponsiveNav from './ResponsiveNav';
  

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)

const handleMenu = () => {
    console.log('Menu clicked')
}

  return (
    <div>
        <div>
            <nav className='flex items-center justify-between bg-transparent max-desktop:px-7 px-24 p-7 '>
                <div className="logo ">
                    <img src={logo} alt="Logo" width={150}/>
                </div>
                <ul className='flex font-semibold mb-2 text-white gap-20 max-desktop:gap-10 max-mobile-menu:hidden'>
                    <li className='text-yellow-400'>Home</li>
                    <li>About Us</li>
                    <li>Roadmap</li>
                    <li>FAQs</li>
                    <li>Contact US</li>
                </ul>

                <div onClick={()=>setisOpen(!isOpen)} className="menu hidden max-mobile-menu:block">
                    {isOpen ?  <RxCross1 className="text-4xl text-yellow-400"/> : <IoMdMenu className="text-4xl text-yellow-400"/>}
                </div>

                <div className="btn mb-2 max-desktop:hidden">
                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full">Connect Wallet</button>
                </div>
            </nav>

            {isOpen && <ResponsiveNav /> }
        </div>
    </div>
  )
}

export default Navbar