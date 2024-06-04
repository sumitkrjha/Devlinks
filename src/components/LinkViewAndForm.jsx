import React, { useState } from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import  { Toaster } from 'react-hot-toast'
import LinkForm from './LinkForm'
import { useSelector } from 'react-redux'
import youtube from "../assets/youtube.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import forwardArrow from "../assets/forwardArrow.svg"



const LinkViewAndForm = () => {
  const [formCount, setFormCount] = useState(1);
  const maxForms = 3;

  const addNewForm = () => {
    if(formCount < maxForms ){
      setFormCount((prevCount) => prevCount + 1);
    }
  };

  const linkData = useSelector((state) => state.linkData);
  
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen mb-8'>
          <div id="mobileWrapper" className='basis-2/5 border-2 rounded-xl bg-white p-2 m-2 flex justify-center items-center h-[45rem]'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] w-[23%] absolute' alt='Phone Outline'/>
              <div className="absolute w-[29%] top-60 left-27 text-black">
                <div id="cardWrapper" className='mt-5'>
                  <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                        {linkData.map((link, index) => (
                          <div key={index} id="socialLinks">
                            {link.platform==='Github' && (
                              <button type="button" class="text-white bg-[#24292F] hover:bg-[#333942] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-5 pb-2">
                                  <div class="flex items-center">
                                  <img src={github} alt="github" className="w-4 h-4 me-2 "/>      
                                  <a href={link.link} target='_blank'>GitHub</a> 
                                  </div>
                                  <img src={forwardArrow} alt="arrow" className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                              </button>
                            )}
                            {link.platform==='Linkedin' && (
                              <button type="button" class="text-white bg-[#0077B5] hover:bg-[#0D8DB5] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-5 pb-2">
                                  <div class="flex items-center">
                                  <img src={linkedin} alt="linkedin" className="w-4 h-4 me-2 "/>   
                                  <a href={link.link} target='_blank'>LinkedIn</a>
                                  </div>
                                  <img src={forwardArrow} alt="arrow" className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                              </button>
                            )}
                            {link.platform==='Youtube' && (
                              <button type="button" class="text-white bg-[#FF0000] hover:bg-[#FF3333] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-2 pb-2">
                                  <div class="flex items-center">
                                  <img src={youtube} alt="youtube" className="w-4 h-4 me-2 "/>
                                  <a href={link.link} target='_blank'>YouTube</a>
                                  </div>
                                  <img src={forwardArrow} alt="arrow" className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                              </button>
                            )}
                            </div> 
                        ))}    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2 rounded-xl bg-white m-2 p-2 overflow-y-auto h-[45rem]'>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Customize your links </h1>
              <p className=' text-base text-gray-600'>Add/edit/remove links below and then share all your profiles with the world!</p>
              <button 
                onClick={addNewForm} 
                className={`p-2 mt-4 rounded-md  border-2  border-purply text-purply hover:bg-purply hover:text-white font-semibold
                ${formCount === maxForms ? 'cursor-not-allowed bg-gray-500 border-white text-white hover:bg-gray-500':''}`}
                disabled={formCount === maxForms}
              >
                {formCount < maxForms && (
                  <h1>+Add New Link</h1>
                )}
                {formCount === maxForms && (
                  <h1>You have reached the maximum limit of links.</h1>
                )}
              </button>
            </div>
            <div id="form" className="p-5 ">
            {[...Array(formCount)].map((_, index) => (
              <div key={index} className="mb-4">
                <h2 className="pl-5 text-xl text-gray-600">Link #{index + 1}</h2>
                <LinkForm />
              </div>
            ))}
          </div>
            </div>
          </div>
        
        
    </>
  )
}

export default LinkViewAndForm