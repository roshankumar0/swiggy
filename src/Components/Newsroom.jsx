import React from 'react'
import CorporateNavbar from './CorporateNavbar'
import Footer from './Footer'
import SwiggyApp from './SwiggyApp'

const Newsroom = () => {
    return (
        <div className=''>
            <CorporateNavbar />
            <div className='bg-[#EBEBF3]'>
                <div>
                    <h2 className="text-[rgb(2,6,12)] font-black leading-[49.92px] text-[40px] break-after-auto tracking-[0.03px] uppercase text-center m-0">
                        Newsroom
                    </h2>
                    <p className="text-[rgba(2,6,12,0.45)] text-[18px] font-medium tracking-[-0.03px] leading-[24px] text-center">
                        Announcements and updates at Swiggy
                    </p>
                </div>
                <div>
                    <div>arrow</div>
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
            <SwiggyApp />
            <Footer/>
        </div>
    )
}

export default Newsroom
