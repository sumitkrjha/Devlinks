import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Preview = () => {
  return (
    <>
    <div id='profileViewContainer' className='h-screen w-full'>
      <div id="profileViewWrapper" className='sm:bg-purply h-36% rounded-b-3xl'>
        <div className='sm:pl-24 pt-4 '>
            <Navbar/>
            <Card/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Preview