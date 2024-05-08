import React from 'react'
import image from "../images/cartoonme.png"
import Skills from './Skills';
export const content = () => {
  return (
    <div className='flex-row p-4 w-1/2 justify-between mt-10 mb-10'>
      <div className='flex justify-center'>
        <div className='p-4 w-3/4 justify-center '>
          <p className=' font-bold text-5xl tracking-widest'>Hi!</p>
          <h2 className=' font-semibold text-3xl tracking-widest'>Im Ayzul</h2>
          <p className=' font-mono text-l tracking-wide text-justify'>
            A passionate individual with aspirations to become a Software Engineer, focusing on Mobile Application Development, Web3 Technologies, and Computer Security. Dedication to skill enhancement and knowledge acquisition drives progress toward career goals.
          </p>
        </div>
        <img src={image} className=' w-1/4'/>
      </div>
      <Skills/>
      <div className='flex mt-10  tracking-widest'>
        <div className=' p-3 text-center border-r border-orange-200 w-1/2'>
          <h1 className='mb-4 font-bold text-2xl tracking-widest'>EDUCATION</h1>
          <h2 className=' font-semibold text-xl tracking-widest'>Bachelor of Computer Science</h2>
          <p className='mb-4 italic'>2021 - 2024</p>
          <h2 className=' font-semibold text-xl tracking-widest'>Accounting</h2>
          <p className='italic'>2020 - 2021</p>
        </div>
        <div className=' p-3 text-center border-l border-orange-200 w-1/2'>
          <h1 className='mb-4 font-bold text-2xl tracking-widest'>PROJECT</h1>
          <h2 className=' font-semibold text-xl tracking-widest'>Complaint Capture</h2>
          <p className=''>Mobile App for Complaint Using Image Classification</p>
          <p className='mb-4  italic'>Flutter, MySQL</p>
          <h2 className=' font-semibold text-xl tracking-widest'>Buddy App</h2>
          <p className=''>Mobile App for Storing Friends Infomations</p>
          <p className='italic'>Android Studio, sqlite</p>
        </div>
      </div>
    </div>
  )
}
export default content;