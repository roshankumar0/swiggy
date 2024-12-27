import React from 'react'

const SwiggyApp = () => {
  return (
    <div className="max-w-[1180px] m-auto ">
      <div className='pt-[180px]'>
        <div className='flex flex-col gap-[50px]'>
          <div className='flex'>
            <div className='flex gap-6'>
              <button className=" shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] overflow-visible w-[186.525px]    select-none flex-[0_1_content] flex-row gap-[5px] h-[62.6px] justify-center relative px-[32px] py-[20px] rounded-[48px] border-[0.8px] border-solid border-[rgb(255,82,0)]  bg-[#ff5200] text-white " >
                Press Release
              </button>
              <button className="text-[rgba(2,6,12,0.45)] items-center flex text-[20px]  leading-[21px] font-semibold  decoration-[rgba(2,6,12,0.45)] decoration-solid decoration-auto cursor-pointer shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] overflow-visible w-[186.525px]    select-none flex-[0_1_content] flex-row gap-[5px] h-[62.6px] justify-center relative px-[32px] py-[20px] rounded-[48px] border-[0.8px] border-solid border-[rgba(2,6,12,0.15)]  " >
                Media Kit
              </button>

            </div>
            <div>
              <input placeholder="Search" type="search" className="box-border text-[rgb(122,122,122)] text-[20px] leading-[21px] transition-[padding-inline] w-[580px] overflow-clip -outline-offset-2 h-[65.6px] min-h-[64px] font-semibold tracking-[-0.3px] text-start px-[30px] py-[20px] rounded-[16px] border-[0.8px] border-solid border-[rgb(205,205,205)]" />
            </div>
          </div>
          <div>bottom</div>
        </div>
      </div>
    </div>
  )
}

export default SwiggyApp;

