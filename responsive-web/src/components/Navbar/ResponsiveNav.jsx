import React from 'react'
import { motion, AnimatePresence } from "motion/react"

const ResponsiveNav = () => {
  return (
    <div >
        <AnimatePresence>
            <motion.nav className='max-mobile-menu:flex hidden justify-center'
                initial={{ opacity: 0 }}
                animate={{y:25, opacity: 1 }}
                exit={{ opacity: 0 }}
            
            >
                <ul className='flex flex-col w-full items-center font-semibold  bg-white'>
                    <li className='p-3 text-center w-full hover:bg-yellow-400 cursor-pointer border-b border'>Home</li>
                    <li className='p-3 text-center w-full hover:bg-yellow-400 cursor-pointer border-b border'>About Us</li>
                    <li className='p-3 text-center w-full hover:bg-yellow-400 cursor-pointer border-b border'>Roadmap</li>
                    <li className='p-3 text-center w-full hover:bg-yellow-400 cursor-pointer border-b border'>FAQs</li>
                    <li className='p-3 text-center w-full hover:bg-yellow-400 cursor-pointer border-b border'>Contact Us</li>
                </ul>
            </motion.nav>
        </AnimatePresence>
    </div>
  )
}

export default ResponsiveNav