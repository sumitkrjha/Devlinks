import React from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import ProfileForm from './ProfileForm'
import  { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'


const MobileView = () => {
  const userData = useSelector((state)=>state.userData);
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex tablet:flex-row mobile:flex-col gap-2 tablet:h-screen h-[210vh] mb-8 '>
          <div id="mobileWrapper" className='basis-1/2 lg:basis-2/5 border-2 rounded-xl bg-white p-2 m-2 flex justify-center items-center h-[45rem]'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] sm:w-[40%] tablet:w-[31%] lg:w-[23%] absolute' alt='Phone Outline'/>
              <div className="absolute w-[56%] sm:w-[29%] top-64 sm:top-60 left-27 text-black">
                <div id="cardWrapper" className='mt-5 '>
                  <div id="imageContainer" className='w-full flex justify-center'>
                  {userData.profilePhoto && <img src={userData.profilePhoto } alt="avatar" className='h-24 w-24 rounded-full border-4 border-purply'/>}
                  </div>
                  <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                      <h2 className='text-xl sm:text-3xl font-bold text-gray-700'>{userData.firstName} {userData.lastName}</h2>
                      <p className='text-sm text-gray-500'>{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-1/2 lg:basis-3/5 border-2 rounded-xl bg-white m-2 h-[45rem]'>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Profile Details </h1>
              <p className=' text-base text-gray-600'>Add your details to create a personal touch to your profile.</p>
            </div>
            <div id="form " >
              <ProfileForm />
            </div>
          </div>
        </div>
        
    </>
  )
}

export default MobileView
