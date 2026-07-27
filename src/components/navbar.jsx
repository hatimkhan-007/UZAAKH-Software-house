import React from 'react'

const Navbar = () => {
  return (
        <>
        <div className="w-full max-w-[1100px] mx-auto mt-3 px-4 mb-3">
            <div className="h-[70px] rounded-full bg-[#0B1220]/70 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center">
                <img src="../assets/logo.png" alt="Logo" />
                <p className="ml-3 font-bold ">UZAAKH</p>
                <div className='flex justify-between'>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">Home</button>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">Services</button>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">Products</button>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">Portfolio</button>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">About</button>
                    <button className="px-4 py-2 hover:bg-gray-400 hover:text-white text-gray-300 rounded-full cursor-pointer">Contact</button>
                </div>
            </div>
            </div>
        </>
  )
}

export default Navbar