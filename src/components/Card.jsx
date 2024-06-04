import React from 'react'
import { useSelector } from 'react-redux'
import youtube from "../assets/youtube.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import forwardArrow from "../assets/forwardArrow.svg"

const Card = () => {
    const userData = useSelector((state)=>state.userData);
    const linkData = useSelector((state) => state.linkData);

  return (
    <>
        <div id="cardContainer" className='h-[92%] w-full flex justify-center items-center mt-10'>
            <div id="cardWrapper" className='border-2 border-gray-300 p-10 m-10 rounded-2xl bg-white '>
             {userData.profilePhoto || userData.firstName || userData.lastName || userData.email ? (
                <>
                    <div id="imageContainer" className='w-full flex justify-center'>
                    <img src={userData.profilePhoto} alt="avatar" className='h-24 w-24 rounded-full border-4 border-purply'/>
                    </div>
                    <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-gray-700'>{userData.firstName} {userData.lastName}</h2>
                    <p className='text-sm text-gray-500'>{userData.email}</p>
                    </div>
                </>
                ) : (
                <div className="text-center">
                    <p className=' text-lg'>Please add Profile Details</p>
                </div>
                )}
                <div id="links" className='mt-5'>
                {linkData.map((link, index) => (
                    <div key={index} id="socialLinks" className='flex flex-col items-center gap-2'>
                    {link.platform==='Github' && (
                        <button type="button" class="text-white bg-[#24292F] hover:bg-[#333942] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-2 pb-2">
                            <div class="flex items-center">
                            <img src={github} alt="github" className="w-4 h-4 me-2 "/>      
                            <a href={link.link} target='_blank'>GitHub</a> 
                            </div>
                            <img src={forwardArrow} alt="arrow" className="rtl:rotate-180 w-3.5 h-3.5 ms-2"/>
                        </button>
                    )}
                    {link.platform==='Linkedin' && (
                        <button type="button" class="text-white bg-[#0077B5] hover:bg-[#0D8DB5] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-2 pb-2">
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
    </>
  )
}

export default Card