import React from 'react'
// import { Button } from "@/components/ui/button"
import sun from '../../assets/sun.svg'
import star1 from '../../assets/star1.svg'
import star2 from '../../assets/star2.svg'
import star3 from '../../assets/star3.svg'

const Hero = () => {
  return (
    <div className='flex justify-between max-mobile-menu:my-5 my-10 max-mobile-2:px-10 px-28'>
        <div className=' flex flex-col gap-7 max-mobile-menu:py-10 py-20 '>

            <div className='ml-14 mb-7'>
              <img src={star1} alt="star1" width={50}/>
            </div>

            <div className='text-white tracking-widest'>
                <h1 className='text-7xl max-mobile-2:text-4xl raleway-font'>Trusted Multi-Chain <br />
                <span className='text-yellow-400'>DEX</span> Platform</h1>
                <p className='text-xl text-gray-400'>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            </div>

            <div className='flex gap-5'>
                <button className="bg-yellow-400 max-button:px-2 max-button:py-1 max-button:text-xs max-button:font-bold text-black px-5 py-2 rounded-full">Connect Wallet</button>
                <button className="border bg-transparent max-button:px-2 max-button:py-2 max-button:text-xs max-button:font-bold border-2 border-yellow-400 text-yellow-400 px-5 py-2 rounded-full">Trade Crypto</button>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-10 border-white'>
          {/* <div> */}
          <img src={star2} alt="star2" width={50} />
          <img src={sun} className='max-mobile-menu:hidden' alt="sun" width={200} />
          {/* </div> */}
          <img src={star3} alt="star3" className='mt-20' width={50} />
        </div>
    </div>
  )
}

export default Hero