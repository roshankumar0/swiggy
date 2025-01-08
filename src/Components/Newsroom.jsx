import React from 'react'
import CorporateNavbar from './CorporateNavbar'
import Footer from './Footer'
import SwiggyApp from './SwiggyApp'

const Newsroom = () => {
    return (
        <div >
            {/* <CorporateNavbar /> */}
            <div className='bg-[#EBEBF3]'>
                <div className=''>
                    <div className='pt-[33px]'>
                    <h2 className="  text-[rgb(2,6,12)] font-black leading-[49.92px] text-[40px] break-after-auto tracking-[0.03px] uppercase text-center m-0">
                        Newsroom
                    </h2>
                    </div>
                    <p className="text-[rgba(2,6,12,0.45)] mb-[14px] text-[18px] font-medium tracking-[-0.03px] leading-[24px] text-center">
                        Announcements and updates at Swiggy
                    </p>
                    <div>
                        <div>
                            <div className='pt-[111px] pb-[150px] px-4 '>
                                <div className="flex overflow-x-auto space-x-4  justify-center py-4">
                                    <div className="w-[621px] flex-shrink-0 flex border-white border-2 rounded-[20px] overflow-hidden opacity-[0.2] snap-start">
                                        <div className="py-[35px] px-10">
                                            <div className="box-border text-[rgba(2,6,12,0.92)] text-[20px] leading-[24px] font-bold tracking-[-0.3px] mb-[17px]">
                                                How India Swiggy’d Its Way Through 2024: A Deep Dive into the Nation’s Eatopia
                                            </div>

                                            <p className="box-border text-[rgb(2,6,12)] text-[16px] font-medium tracking-[-0.3px] leading-[20px]">
                                                If there’s one thing that truly united India this year, it wasn’t cricket, or viral dance trends—it was the collective midnight panic of deciding between pizza and biryani to satisfy the hunger pangs.
                                            </p>

                                            <button className="mt-[28px] bg-[#ff5200] font-Gilroy text-[18px] text-white block rounded-[12px] px-4 py-[13px] leading-[24px] text-center font-medium tracking-[-0.3px]">
                                                Know more
                                            </button>
                                        </div>
                                        <div className="">
                                            <img className="w-full h-full object-cover" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className='mb-[20px]'>
                                                <div className='flex  items-center justify-between '>
                                                    <div
                                                        className=" bg-[#02060C26] rounded-[50%] p-2 cursor-pointer "
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M6.47883 2.43888C6.80185 2.13743 7.30808 2.15492 7.60953 2.47794C7.91097 2.80096 7.89349 3.30719 7.57047 3.60864L4.09404 6.85289C3.95525 6.98242 3.83266 7.09704 3.72428 7.19997L14.1038 7.19997C14.5456 7.19997 14.9038 7.55814 14.9038 7.99997C14.9038 8.4418 14.5456 8.79997 14.1038 8.79997L3.67664 8.79997C3.79639 8.91434 3.9345 9.04352 4.09403 9.1924L7.52805 12.3971C7.85106 12.6986 7.86855 13.2048 7.5671 13.5278C7.26565 13.8509 6.75942 13.8683 6.4364 13.5669L2.96478 10.3271C2.55662 9.94622 2.19194 9.60594 1.93661 9.29209C1.65887 8.95068 1.42686 8.5425 1.42686 8.02263C1.42686 7.50277 1.65888 7.09459 1.93662 6.75318C2.19195 6.43933 2.55663 6.09907 2.96479 5.71824L6.47883 2.43888Z"
                                                                fill="#02060C"
                                                                fillOpacity="0.92"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className=" bg-[#02060C26] rounded-[50%] p-2 rotate-180 cursor-pointer"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"

                                                        >
                                                            <path
                                                                d="M6.47883 2.43888C6.80185 2.13743 7.30808 2.15492 7.60953 2.47794C7.91097 2.80096 7.89349 3.30719 7.57047 3.60864L4.09404 6.85289C3.95525 6.98242 3.83266 7.09704 3.72428 7.19997L14.1038 7.19997C14.5456 7.19997 14.9038 7.55814 14.9038 7.99997C14.9038 8.4418 14.5456 8.79997 14.1038 8.79997L3.67664 8.79997C3.79639 8.91434 3.9345 9.04352 4.09403 9.1924L7.52805 12.3971C7.85106 12.6986 7.86855 13.2048 7.5671 13.5278C7.26565 13.8509 6.75942 13.8683 6.4364 13.5669L2.96478 10.3271C2.55662 9.94622 2.19194 9.60594 1.93661 9.29209C1.65887 8.95068 1.42686 8.5425 1.42686 8.02263C1.42686 7.50277 1.65888 7.09459 1.93662 6.75318C2.19195 6.43933 2.55663 6.09907 2.96479 5.71824L6.47883 2.43888Z"
                                                                fill="#02060C"
                                                                fillOpacity="0.92"
                                                            />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[621px] flex-shrink-0 flex border-white border-2 rounded-[20px] overflow-hidden snap-start">

                                            <div className="py-[35px] px-10">
                                                <div className="box-border text-[rgba(2,6,12,0.92)] text-[20px] leading-[24px] font-bold tracking-[-0.3px] mb-[17px]">
                                                    How India Swiggy’d Its Way Through 2024: A Deep Dive into the Nation’s Eatopia
                                                </div>

                                                <p className="box-border text-[rgb(2,6,12)] text-[16px] font-medium tracking-[-0.3px] leading-[20px]">
                                                    If there’s one thing that truly united India this year, it wasn’t cricket, or viral dance trends—it was the collective midnight panic of deciding between pizza and biryani to satisfy the hunger pangs.
                                                </p>

                                                <button className="mt-[28px] bg-[#ff5200] font-Gilroy text-[18px] text-white block rounded-[12px] px-4 py-[13px] leading-[24px] text-center font-medium tracking-[-0.3px]">
                                                    Know more
                                                </button>
                                            </div>
                                            <div className="">
                                                <img className="w-full h-full object-cover" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[621px] flex-shrink-0 opacity-[0.2] flex border-white border-2 rounded-[20px] overflow-hidden snap-start">
                                        <div className="py-[35px] px-10">
                                            <div className="box-border text-[rgba(2,6,12,0.92)] text-[20px] leading-[24px] font-bold tracking-[-0.3px] mb-[17px]">
                                                How India Swiggy’d Its Way Through 2024: A Deep Dive into the Nation’s Eatopia
                                            </div>

                                            <p className="box-border text-[rgb(2,6,12)] text-[16px] font-medium tracking-[-0.3px] leading-[20px]">
                                                If there’s one thing that truly united India this year, it wasn’t cricket, or viral dance trends—it was the collective midnight panic of deciding between pizza and biryani to satisfy the hunger pangs.
                                            </p>

                                            <button className="mt-[28px] bg-[#ff5200] font-Gilroy text-[18px] text-white block rounded-[12px] px-4 py-[13px] leading-[24px] text-center font-medium tracking-[-0.3px]">
                                                Know more
                                            </button>
                                        </div>
                                        <div className="">
                                            <img className="w-full h-full object-cover" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex space-x-1 mt-8 justify-center'>
                                    <span className='h-[8px] w-[8px] bg-[#babbc0] rounded-full '></span>
                                    <span className='h-[8px] w-[8px] bg-[#babbc0] rounded-full '></span>
                                    <span className='h-[8px] w-[8px] bg-[#babbc0]  rounded-full'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] m-auto ">
                <div className='pt-[120px] pb-[180px] '>
                    <div className='flex flex-col gap-[50px]'>
                        <div className='flex'>
                            <div className='flex gap-6'>
                                <button className=" font-Gilroy text-[20px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] overflow-visible w-[186.525px] select-none flex-[0_1_content] flex-row gap-[5px] h-[62.6px] justify-center relative px-[32px] py-[20px] rounded-[48px] border-[0.8px] border-solid border-[rgb(255,82,0)]  bg-[#ff5200] text-white " >
                                    Press Release
                                </button>
                                <button className="text-[rgba(2,6,12,0.45)] items-center flex text-[20px]  leading-[21px] font-semibold  decoration-[rgba(2,6,12,0.45)] decoration-solid decoration-auto cursor-pointer shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] overflow-visible w-[186.525px]    select-none flex-[0_1_content] flex-row gap-[5px] h-[62.6px] justify-center relative px-[32px] py-[20px] rounded-[48px] border-[0.8px] border-solid border-[rgba(2,6,12,0.15)]  " >
                                    Media Kit
                                </button>

                            </div>
                            <div>
                                <input placeholder="Search" type="search" className=" text-[rgb(122,122,122)] text-[20px] leading-[21px] transition-[padding-inline] w-[580px] overflow-clip -outline-offset-2 h-[65.6px] min-h-[64px] font-semibold tracking-[-0.3px] text-start px-[30px] py-[20px] rounded-[16px] border-[0.8px] border-solid border-[rgb(205,205,205)]" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-3 gap-y-10 gap-x-4'>
                                <div className='rounded-[32px] overflow-hidden shadow-lg '>
                                    <div className='h-[232px] '>
                                        <img className='object-cover h-full w-full ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                    </div>
                                    <div className='flex items-start flex-col p-5'>
                                        <div className='mb-6 h-[178px] '>
                                            <time className=" mb-3 text-[rgba(2,6,12,0.6)] text-[14px] font-normal tracking-[-0.35px] leading-[18px] list-none text-left">
                                                December 26, 2024
                                            </time>
                                            <div className=" text-[rgba(2,6,12,0.92)] block text-[22px] leading-[32px] font-bold tracking-[-0.5px] text-start">
                                                Swiggy Partners with NSE to Empower its Delivery Partners with Financial
                                                Literacy Programs
                                            </div>
                                        </div>
                                        <div className=" text-[rgb(255,82,0)] bg-[#FFEEE5] text-[14px] font-bold tracking-[-0.1px] leading-[17px] text-start px-[20px] py-[10px] rounded-[12px]">
                                            Read more
                                        </div>

                                    </div>
                                </div>
                                <div className='rounded-[32px] overflow-hidden shadow-lg '>
                                    <div className='h-[232px] '>
                                        <img className='object-cover h-full w-full ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                    </div>
                                    <div className='flex items-start flex-col p-5'>
                                        <div className='mb-6 h-[178px] '>
                                            <time className=" mb-3 text-[rgba(2,6,12,0.6)] text-[14px] font-normal tracking-[-0.35px] leading-[18px] list-none text-left">
                                                December 26, 2024
                                            </time>
                                            <div className=" text-[rgba(2,6,12,0.92)] block text-[22px] leading-[32px] font-bold tracking-[-0.5px] text-start">
                                                Swiggy Partners with NSE to Empower its Delivery Partners with Financial
                                                Literacy Programs
                                            </div>
                                        </div>
                                        <div className=" text-[rgb(255,82,0)] bg-[#FFEEE5] text-[14px] font-bold tracking-[-0.1px] leading-[17px] text-start px-[20px] py-[10px] rounded-[12px]">
                                            Read more
                                        </div>

                                    </div>
                                </div>
                                <div className='rounded-[32px] overflow-hidden shadow-lg '>
                                    <div className='h-[232px] '>
                                        <img className='object-cover h-full w-full ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                    </div>
                                    <div className='flex items-start flex-col p-5'>
                                        <div className='mb-6 h-[178px] '>
                                            <time className=" mb-3 text-[rgba(2,6,12,0.6)] text-[14px] font-normal tracking-[-0.35px] leading-[18px] list-none text-left">
                                                December 26, 2024
                                            </time>
                                            <div className=" text-[rgba(2,6,12,0.92)] block text-[22px] leading-[32px] font-bold tracking-[-0.5px] text-start">
                                                Swiggy Partners with NSE to Empower its Delivery Partners with Financial
                                                Literacy Programs
                                            </div>
                                        </div>
                                        <div className=" text-[rgb(255,82,0)] bg-[#FFEEE5] text-[14px] font-bold tracking-[-0.1px] leading-[17px] text-start px-[20px] py-[10px] rounded-[12px]">
                                            Read more
                                        </div>

                                    </div>
                                </div>
                                <div className='rounded-[32px] overflow-hidden shadow-lg '>
                                    <div className='h-[232px] '>
                                        <img className='object-cover h-full w-full ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/09/News-Detail.png" alt="" />
                                    </div>
                                    <div className='flex items-start flex-col p-5'>
                                        <div className='mb-6 h-[178px] '>
                                            <time className=" mb-3 text-[rgba(2,6,12,0.6)] text-[14px] font-normal tracking-[-0.35px] leading-[18px] list-none text-left">
                                                December 26, 2024
                                            </time>
                                            <div className=" text-[rgba(2,6,12,0.92)] block text-[22px] leading-[32px] font-bold tracking-[-0.5px] text-start">
                                                Swiggy Partners with NSE to Empower its Delivery Partners with Financial
                                                Literacy Programs
                                            </div>
                                        </div>
                                        <div className=" text-[rgb(255,82,0)] bg-[#FFEEE5] text-[14px] font-bold tracking-[-0.1px] leading-[17px] text-start px-[20px] py-[10px] rounded-[12px]">
                                            Read more
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='mt-[80px]'>
                                <nav className='flex justify-center '>
                                    <span className=" bg-[#02060C26] cursor-pointer text-[rgb(255,82,0)] items-center flex h-[50px] justify-center w-[50px] opacity-60 text-[16px] font-medium text-center leading-[24px] mr-[30px] rounded-[50%] border-[0.8px] border-solid border-[rgba(0,0,0,0)]" >
                                        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Nav-Arrow-Front-Stroke.svg" className=" h-[24px] max-w-full text-[rgb(255,82,0)] break-inside-auto w-[24px] text-[16px] font-medium text-center leading-[24px] rounded-none" />
                                    </span>
                                    <span className=" text-white items-center hover:border-[rgb(255,82,0)] flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mx-[10px] rounded-[4px] border-[0.8px] border-solid border-[rgba(2,6,12,0.15)] bg-[#FF5200] ">
                                        1
                                    </span>
                                    <a href="https://www.swiggy.com/corporate/newsroom/?e-page-aaf7a35=2" className=" text-[rgb(255,82,0)] hover:border-[rgb(255,82,0)] items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mx-[10px] rounded-[4px] border-[0.8px] border-solid border-[rgba(2,6,12,0.15)]">
                                        2
                                    </a>
                                    <a href="https://www.swiggy.com/corporate/newsroom/?e-page-aaf7a35=3" className="hover:border-[rgb(255,82,0)] text-[rgb(255,82,0)] items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mx-[10px] rounded-[4px] border-[0.8px] border-solid border-[rgba(2,6,12,0.15)]">
                                        3
                                    </a>
                                    <span className=" hover:bg-[rgb(255,82,0)] hover:text-white transition-all duration-75 bg-[#02060C26] cursor-pointer text-[rgb(255,82,0)] items-center flex h-[50px] justify-center w-[50px] text-[16px] font-medium text-center leading-[24px] mr-[30px] rounded-[50%] border-[0.8px] border-solid border-[rgba(0,0,0,0)]" >
                                        <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Union.svg" className=" h-[24px] max-w-full text-[rgb(255,82,0)] break-inside-auto w-[24px] text-[16px] font-medium text-center leading-[24px] rounded-none" />
                                    </span>
                                </nav>
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

export default Newsroom
