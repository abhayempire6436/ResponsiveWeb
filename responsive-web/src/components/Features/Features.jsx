import React from 'react'
import { FiDollarSign } from "react-icons/fi";
import { FaPhoneSlash } from "react-icons/fa";
import CerTIK from '../../assets/certik.svg'
import CrossDex from '../../assets/crossdex.svg'

const Features = () => {

    const cards = [
        {
            icon: <FiDollarSign className='text-white rounded-full bg-gray-800 text-5xl p-3'/>,
            title: "Cheapest TXs",
            description: `Exchange popular digital  currencies at the cheapest possible transaction price`
        },
        {
            icon: <img src={CerTIK} alt="CerTIK" className='rounded-full bg-gray-800' width={50}/>,
            title: "CerTIK",
            description: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to "
        },
        {
            icon: <FaPhoneSlash className='text-white rounded-full bg-gray-800 text-5xl p-3'/>,
            title: "No Contract Sells",
            description: "No contract sells to fund the marketing wallets"
        },
        {
            icon: <img src={CrossDex} alt='cross' className='rounded-full bg-gray-800' width={50}/> ,
            title: "CrossDex Support",
            description: "Exchange popular digital currencies at the cheapest possible transaction price"
        }
    ];

  return (
    <div className='p-16 mt-12'>
        <div>
            <h1 className='text-4xl font-semibold text-white text-center'>Our <span className='text-yellow-400'> Features</span></h1>

            <div className='grid max-tablet:grid-cols-2 max-mobile:grid-cols-1 grid-cols-4 gap-10 mt-8'>
                {cards.map((card, id) => {
                    return <div key={id} className='flex flex-col border-gray-700 border px-5 py-6 bg-[#071624] text-white rounded-md gap-4'>
                                <div className="icon ">
                                    {card.icon}
                                </div>

                                <h2 className='font-semibold'>{card.title}</h2>
                                <p className='leading-5 text-gray-400'>{card.description}</p>
                            </div>
                })}
                
                {/* <div className='flex flex-col border px-5 py-6 bg-yellow-400 rounded-md gap-4'>
                    <div className="icon ">
                        <FiDollarSign className='rounded-full bg-gray-600 text-5xl p-3'/>
                    </div>

                    <h2>Cheapest TXs</h2>
                    <p>Exchange popular digital currencies at the cheapest possible transaction price</p>
                </div>
                <div className='flex flex-col border px-5 py-6 bg-yellow-400 rounded-md gap-4'>
                    <div className="icon ">
                        <FiDollarSign className='rounded-full bg-gray-600 text-5xl p-3'/>
                    </div>

                    <h2>Cheapest TXs</h2>
                    <p>Exchange popular digital currencies at the cheapest possible transaction price</p>
                </div>
                <div className='flex flex-col border px-5 py-6 bg-yellow-400 rounded-md gap-4'>
                    <div className="icon ">
                        <FiDollarSign className='rounded-full bg-gray-600 text-5xl p-3'/>
                    </div>

                    <h2>Cheapest TXs</h2>
                    <p>Exchange popular digital currencies at the cheapest possible transaction price</p>
                </div> */}
            </div>

        </div>
    </div>
  )
}

export default Features