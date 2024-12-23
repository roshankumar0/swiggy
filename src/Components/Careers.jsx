import React from 'react'

const Careers = () => {
    return (
        <div className='bg-white'>
            <div className='flex flex-col gap-5 m-auto max-w-[1180px] py-[80px]'>
                <span className="text-[rgba(2,6,12,0.75)] text-[40px] leading-[49.92px] font-black tracking-[0.03px] uppercase text-center mx-[10px]">
                    Careers at swiggy
                </span>
                <div className='flex gap-[48px]'>
                    <div className='flex-1'>
                        <p className=" text-[rgba(2,6,12,0.6)] text-[18px] font-medium tracking-[-0.03px] leading-[24px] mb-[14px]">
                            When you work at Swiggy, you’re joining a culture of innovation, teamwork, and endless possibilities. We believe in empowering our employees to take charge of their careers and make a real impact. Whether you’re a software engineer, a marketing guru, a logistics expert, or someone who loves delivering exceptional customer experiences, there’s a place for you at Swiggy.<br /><br />If you’re excited about making a difference and want to be part of a team that’s transforming the way people live, then we want to hear from you!
                        </p>
                        <p className=" text-[rgba(2,6,12,0.6)] text-[18px] font-medium tracking-[-0.03px] leading-[24px] mb-[14px]">
                            Explore our current openings and embark on your next career adventure with
                            Swiggy. Let’s deliver unparalleled convenience together!
                        </p>
                        <button className="bg-[#ff5200] leading-[24px]  px-[16px] py-[13.5px] rounded-[12px]" >
                            <span className=" text-white block text-[18px] leading-[24px] text-center font-medium tracking-[-0.3px]">
                                Know more
                            </span>

                        </button>

                    </div>
                    <div className='flex-1'>
                        <img loading="lazy" decoding="async" width={800} height={525} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-1024x672.webp" alt="" srcSet="
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-1024x672.webp  1024w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-300x197.webp    300w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-768x504.webp    768w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-1536x1008.webp 1536w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/career-at-swiggy-2048x1344.webp 2048w
  " sizes="auto, (max-width: 800px) 100vw, 800px" className=" h-[371.438px] max-w-full text-[rgb(51,51,51)] break-inside-auto transition-[0.2s] inline-block align-middle w-[566px] text-center text-[16px] font-normal leading-[24px] rounded-[32px]" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
