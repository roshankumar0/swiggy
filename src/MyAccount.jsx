import React, { useState } from 'react'

import AccountSettings from './Components/AccountSettings';
import Navbar from './Components/Navbar';


const MyAccount = () => {
  
 
  
  return (
    <div>
      <Navbar/>
      <div className='bg-[#37718e]'>
        <div className='relative px-5 max-w-[1200px] min-w-[1200px]  m-auto'>
          <div className='pt-5 relative mb-[37px] text-[#FFFFFF] font-proxima-nova'>
            <div className='absolute right-0 mb-[7px] border border-[fff9] px-5 py-3 text-[14px]'><button>Edit profile</button></div>
            <div className='text-[32px]'>
               kumar
            </div>
            <div>
              <span>9876543210</span>
              <span className='ml-[15px]'>kumar40786@gmail.com</span>
            </div>
          </div>
          <AccountSettings />
        </div>
      </div>
    </div>
  )
}

export default MyAccount
