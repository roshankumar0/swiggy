import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const Orders = ({handleLeft,handleRight}) => {
  return (
    <div className="flex justify-between pb-8">
      <h2 className="text-[24px] px-3 font-semibold font-Gilroy text-[#02060ceb]  tracking-[-0.6px] leading-6">
        Order our best food options 
      </h2>
    <div className="flex gap-3">
      <div onClick={handleLeft}>
        <div className="rounded-full h-[34px] w-[34px] bg-[#02060c26] pt-2 pr-2 pb-1 pl-2">
          <IoIosArrowRoundBack />
        </div>
      </div>
      <div onClick={handleRight} className="rounded-full h-[34px] w-[34px] bg-[#02060c26] pt-2 pr-2 pb-1 pl-2">
        <IoIosArrowRoundForward />
      </div>
    </div>
  </div>
  )
}

export default Orders
