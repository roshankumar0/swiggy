import React from 'react'
import CorporateNavbar from './CorporateNavbar'
import Footer from './Footer'
import App from 'next/app'
import SwiggyApp from './SwiggyApp'

const Investors = () => {
    return (
        <div className=''>
            {/* <CorporateNavbar /> */}
            <div className='bg-[#ebebf3]'>
                <div className='mx-[82px] m-auto pb-[120px] '>
                    <div className='flex flex-col items-center'>
                        <h1 className=" text-[rgb(2,6,12)] mt-[70px] pb-[75px] font-black leading-[49.92px] text-[40px] tracking-[0.03px] uppercase  m-0">
                            INVESTOR RELATIONS
                        </h1>
                        <div className='flex items-center rounded-[40px] shadow-lg px-[100px] bg-white '>
                            <div className='flex flex-col'>
                                <h2 className=" text-[rgba(2,6,12,0.92)] font-semibold mb-5 leading-[50px] text-[40px] break-after-auto tracking-[-0.55px]  m-0">
                                    Earnings Release Q2 FY2024-25
                                </h2>
                                <div className='flex items-center space-x-5 mt-[30px] '>
                                    <a href="https://www.swiggy.com/corporate/investor-relations/financial-results/" target="_blank" className=" shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] inline-block fill-[rgb(255,82,0)] text-[13px] leading-[16px]  transition-[0.3s] border-[#F15700] border font-bold tracking-[0.1px] px-[16px] py-[12px] rounded-[12px] bg-[#ff5200]  " >
                                        <span className=" text-white text-[13px] leading-[16px]  font-bold tracking-[0.1px]">
                                            View Press Release
                                        </span>
                                    </a>
                                    <a href="https://www.swiggy.com/corporate/investor-relations/financial-results/" target="_blank" className=" shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] inline-block fill-[rgb(255,82,0)] text-[13px] leading-[16px]  transition-[0.3s] border-[#F15700] border font-bold tracking-[0.1px] px-[16px] py-[12px] rounded-[12px]" >
                                        <span className=" text-[rgb(255,82,0)] text-[13px] leading-[16px]  font-bold tracking-[0.1px]">
                                            For more details
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <img width={398} height={365} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/12/banner-IR-overview.png" alt="" srcSet="
    https://www.swiggy.com/corporate/wp-content/uploads/2024/12/banner-IR-overview.png         398w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/12/banner-IR-overview-300x275.png 300w
  " sizes="(max-width: 398px) 100vw, 398px" className=" mt-5 h-[255.5px] max-w-[400px] text-[rgb(51,51,51)] break-inside-auto inline-block align-middle object-cover object-[50%_50%] w-[278.6px]  text-[16px] font-normal leading-[24px] rounded-none" />

                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[1180px] m-auto flex flex-col '>
                <div className='pt-[50px] pb-[70px] gap-5 '>
                    <h2 className=" text-[rgba(2,6,12,0.75)] font-bold leading-[30px] text-[27px] break-after-auto tracking-[-0.55px] text-center m-0">
                        Corporate Announcements
                    </h2>
                    <div className='grid grid-cols-3 gap-5 mt-10 '>
                        <div className='border flex flex-col group  hover:scale-[1.03] duration-300 border-[#02060C26] rounded-[30px] p-[30px] mt-2 mb-4 '>
                            <a href="https://www.swiggy.com/corporate/press-release/swiggy-launches-one-blck-an-invite-only-premium-membership/" target="_blank" className="group-hover:text-[rgb(255,82,0)]  text-[rgba(2,6,12,0.92)] text-[17px] font-bold tracking-[-0.3px] leading-[24px] text-left cursor-pointer">
                                Swiggy Launches One BLCK, An Invite-Only Premium Membership
                            </a>
                            <time className=" text-[rgb(122,122,122)] text-[14px] font-medium text-left cursor-pointer leading-[21px] m-0">
                                December 11, 2024
                            </time>
                            <span className=" mt-5 group-hover:bg-[rgb(255,82,0)]  transition-all duration-75 bg-[#02060C26] cursor-pointer  items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mr-[30px] rounded-[50%] border-[0.8px] border-solid border-[rgba(0,0,0,0)]" >
                                <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Union.svg" className=" h-[24px] max-w-full  break-inside-auto w-[24px] text-[16px] font-medium text-center leading-[24px] rounded-none" />
                            </span>
                        </div>
                        <div className='border flex flex-col group  hover:scale-[1.03] duration-300 border-[#02060C26] rounded-[30px] p-[30px] mt-2 mb-4 '>
                            <a href="https://www.swiggy.com/corporate/press-release/swiggy-launches-one-blck-an-invite-only-premium-membership/" target="_blank" className="group-hover:text-[rgb(255,82,0)]  text-[rgba(2,6,12,0.92)] text-[17px] font-bold tracking-[-0.3px] leading-[24px] text-left cursor-pointer">
                                Swiggy Launches One BLCK, An Invite-Only Premium Membership
                            </a>
                            <time className=" text-[rgb(122,122,122)] text-[14px] font-medium text-left cursor-pointer leading-[21px] m-0">
                                December 11, 2024
                            </time>
                            <span className=" mt-5 group-hover:bg-[rgb(255,82,0)]  transition-all duration-75 bg-[#02060C26] cursor-pointer  items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mr-[30px] rounded-[50%] border-[0.8px] border-solid border-[rgba(0,0,0,0)]" >
                                <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Union.svg" className=" h-[24px] max-w-full  break-inside-auto w-[24px] text-[16px] font-medium text-center leading-[24px] rounded-none" />
                            </span>
                        </div>
                        <div className='border flex flex-col group  hover:scale-[1.03] duration-300 border-[#02060C26] rounded-[30px] p-[30px] mt-2 mb-4 '>
                            <a href="https://www.swiggy.com/corporate/press-release/swiggy-launches-one-blck-an-invite-only-premium-membership/" target="_blank" className="group-hover:text-[rgb(255,82,0)]  text-[rgba(2,6,12,0.92)] text-[17px] font-bold tracking-[-0.3px] leading-[24px] text-left cursor-pointer">
                                Swiggy Launches One BLCK, An Invite-Only Premium Membership
                            </a>
                            <time className=" text-[rgb(122,122,122)] text-[14px] font-medium text-left cursor-pointer leading-[21px] m-0">
                                December 11, 2024
                            </time>
                            <span className=" mt-5 group-hover:bg-[rgb(255,82,0)]  transition-all duration-75 bg-[#02060C26] cursor-pointer  items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mr-[30px] rounded-[50%] border-[0.8px] border-solid border-[rgba(0,0,0,0)]" >
                                <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Union.svg" className=" h-[24px] max-w-full  break-inside-auto w-[24px] text-[16px] font-medium text-center leading-[24px] rounded-none" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' pb-[120px]'>
                    <div className='bg-[#9E1E62] flex items-center  rounded-[40px] '>
                        <div className='flex-1'>
                            <div className='flex items-center f '>
                                <div className='flex flex-col px-[126px] py-[90px] '>
                                    <h2 className=" text-white mb-[30px] font-bold leading-[30px] text-[27px] break-after-auto tracking-[-0.55px]  m-0">
                                        Subscribe for investor alerts
                                    </h2>

                                    <div className='flex space-x-9'>
                                        <input aria-invalid="false" placeholder="Enter Your mail" name="your-email" className=" text-white text-[14px] leading-[30px] transition-[0.3s] w-[341.5px] overflow-clip  font-normal px-[20.36px] py-[7px] rounded-[12px] border-[0.8px] border-solid bg-transparent " />
                                        <input type="submit" className=" bg-[#F0F0F5] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] text-[rgba(2,6,12,0.92)] bg-[F0F0F5] text-[13px] leading-[16px] overflow-clip w-[97.1625px] block font-bold text-center whitespace-nowrap transition-[0.3s] select-none cursor-pointer tracking-[-0.1px] capitalize px-[18.5px] py-[14px] rounded-[12px] border-[0.8px] border-solid border-[rgb(240,240,245)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><img loading="lazy" decoding="async" width={800} height={839} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins-976x1024.webp" alt="" srcSet="
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins-976x1024.webp   976w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins-286x300.webp    286w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins-768x806.webp    768w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins-1464x1536.webp 1464w,
    https://www.swiggy.com/corporate/wp-content/uploads/2024/10/coins.webp           1468w
  " sizes="auto, (max-width: 800px) 100vw, 800px" className=" h-[363.913px] max-w-[347px] text-[rgb(51,51,51)] break-inside-auto inline-block align-middle object-cover object-[50%_50%] w-[347px] text-center text-[16px] font-normal leading-[24px] rounded-none" />
                        </div>
                    </div>
                </div>
                <div className=' pb-[120px]'>
                    <div className='bg-[#F5F5F5] flex items-center  rounded-[40px] px-[67px] py-[72px] '>
                        <div>
                            <h5 className=" pr-[34px] text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px] tracking-[-0.6px] text-left m-0">
                                Investor Queries and Grievances
                            </h5>
                        </div>
                        <div className='flex space-x-[80px] '>
                            <div className='flex flex-col'>
                                <h5 className=" text-[rgba(2,6,12,0.75)] mb-3 font-semibold leading-[24px] text-[20px] tracking-[-0.3px]  m-0">
                                    Abhishek Agarwal
                                </h5>
                                <div className=" mb-3 text-[rgba(2,6,12,0.6)] h-[36px] text-[20px] font-normal tracking-[-0.3px] leading-[24px]  mt-0  ">
                                    Vice President, Investor Relations
                                </div>
                                <div className='flex'>
                                    <p className=" text-[rgba(2,6,12,0.92)] text-[20px] font-semibold tracking-[-0.3px] leading-[24px] ">
                                        Email:
                                    </p>
                                    <a href="mailto:pr@swiggy.in" className=" text-[rgb(255,82,0)] text-[20px] font-semibold tracking-[-0.3px] leading-[24px] ">
                                        ir@swiggy.in
                                    </a>
                                </div>

                            </div>
                            <div className='flex flex-col'>
                                <h5 className=" text-[rgba(2,6,12,0.75)] mb-3 font-semibold leading-[24px] text-[20px] tracking-[-0.3px]  m-0">
                                    Sridhar. M
                                </h5>
                                <div className=" mb-3 text-[rgba(2,6,12,0.6)] h-[36px] text-[20px] font-normal tracking-[-0.3px] leading-[24px]  mt-0  ">
                                    Company Secretary and Compliance Officer
                                </div>
                                <div className='flex'>
                                    <p className=" text-[rgba(2,6,12,0.92)] text-[20px] font-semibold tracking-[-0.3px] leading-[24px] ">
                                        Email:
                                    </p>
                                    <a href="mailto:pr@swiggy.in" className=" text-[rgb(255,82,0)] text-[20px] font-semibold tracking-[-0.3px] leading-[24px] ">
                                        secretarial@swiggy.in
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SwiggyApp /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Investors
