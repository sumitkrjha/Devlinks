import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const ProfileNavbar = () => {
  return (
    <>
            <div id="navWrapper" className='h-20 w-auto p-2 m-3 border-2  rounded-xl bg-white flex flex-row justify-center items-center text-gray-700 '>
                <div id="logo" className='basis-[15%] sm:basis-2/6 flex flex-row items-center gap-2 pl-2 cursor-pointer'>
                    <img src={logo} alt="logo" className='h-8 w-8'/>
                    <h2 className='text-xl font-semibold block max-[500px]:hidden'>Devlinks</h2>
                </div>
                <div id="menu" className='basis-[65%] sm:basis-2/6'>
                    <ul className='flex flex-row justify-center items-center gap-6'>
                        <Link to="/link"><li className='text-base rounded-xl px-4 py-2 flex flex-row justify-center items-center gap-2 hover:bg-purple-100 hover:text-purply cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='shrink-0' width="18" height="20" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                            </svg><h1 className='hidden sm:block'>Links</h1>
                        </li></Link>

                        <Link to="/"><li className=' text-base rounded-xl px-4 py-2 flex flex-row justify-center items-center gap-2 hover:bg-purple-100 hover:text-purply cursor-pointer focus:bg-purple-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='shrink-0' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg><h1 className='hidden sm:block'> Profile Details</h1>
                        </li></Link>
                    </ul>
                </div>
                <div id="preview" className='basis-[20%] sm:basis-2/6 pr-2'>
                    <Link to="/preview"> <button className='float-right p-2 border-2 rounded-md border-purply text-purply w-36
                     hover:bg-purply hover:text-white font-semibold'>Preview</button></Link>
                </div>
            </div>
       
    </>
  )
}

export default ProfileNavbar