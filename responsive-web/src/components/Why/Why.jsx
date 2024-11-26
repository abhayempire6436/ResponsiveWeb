import React from 'react'
import logo from '../../assets/logo.svg'
import uniswap from '../../assets/uniswap.svg'

const Why = () => {

    const data = [
        { feature: "1. Point no one", moonex: true, uniswap: false },
        { feature: "2. Point no two this", moonex: true, uniswap: false },
        { feature: "2. Point no two this", moonex: true, uniswap: false },
        { feature: "2. Point no two this", moonex: true, uniswap: false },
        { feature: "2. Point no two this", moonex: true, uniswap: false },
        
    ];

  return (
    <div className=" text-white max-img:px-10 px-20 py-8 shadow-lg">
      <h2 className="text-4xl max-img:my-10 font-semibold mb-4">
        Why <span className="text-yellow-400">MoonEX</span>?
      </h2>
      <div className='rounded-xl p-5 max-text:p-0 py-7 border'>

      
      <table className="w-full   text-center">
      <thead>
        <tr className="bg-transparent text-center">
            <th className="py-3 px-6 max-mobile-menu:px-0 max-text:text-sm text-yellow-400 border-r border-b font-semibold text-xl text-center">Comparison</th>
            <th className="py-3 max-mobile-menu:px-0 px-6">
            <div className="flex justify-center max-img:w-14 w-28 m-auto items-center">
                <img src={logo} alt="logo" width={150} />
            </div>
            </th>
            <th className="py-3 border-l border-b px-6  max-mobile-menu:px-0">
            <div className="flex justify-center w-28 max-img:w-14 m-auto items-center">
                <img src={uniswap} alt="uniswap" width={150} />
            </div>
            </th>
        </tr>
        </thead>
        <tbody className='p-3'>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-transparent" : "bg-transparent"
              }`}
            >
              <td className="py-3 px-6  border-t text-gray-400 max-text:text-sm text-start">{row.feature}</td>
              <td className="py-3 px-6 max-mobile-menu:px-0 border-r border-l border-t">
                {row.moonex ? (
                  <span className="text-green-500 font-bold">✔</span>
                ) : (
                  <span className="text-red-500 font-bold">✘</span>
                )}
              </td>
              <td className="py-3 px-6 max-mobile-menu:px-0 border-t">
                {row.uniswap ? (
                  <span className="text-green-500 font-bold">✔</span>
                ) : (
                  <span className="text-red-500 font-bold">✘</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Why