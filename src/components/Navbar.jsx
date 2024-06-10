import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div id="navWrapper" className='bg-white flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-3 sm:gap-0 w-11/12 p-2 rounded-md px-5'>
          <Link to="/"><button id="backToEditorButton" 
          className='p-3 border-2 rounded-md border-purply text-base text-purply w-40
            hover:bg-purply hover:text-white
          '> Back to Editor</button> </Link>
          <button id="shareLinkButton"
          className='sm:ml-2 p-3 border-2 rounded-md text-base bg-purply w-40 text-white
            hover:border-purply hover:bg-white hover:text-purply
          '
          onClick={()=>{toast.success("Thanks for using Devlinks! We are working to bring Sharing Feature soon!")}}>
                Share Link
          </button>
    </div>
    
  )
}

export default Navbar