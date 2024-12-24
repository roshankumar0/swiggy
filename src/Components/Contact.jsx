import React from 'react'
import Footer from './Footer'

const Contact = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-[1180px] m-auto py-[80px]'>
                <div>
                    <div className='flex flex-col'>
                        <span className=" text-[rgba(2,6,12,0.75)] text-[40px] mb-10 leading-[49.92px]   font-black tracking-[0.03px] uppercase text-center mx-[10px">
                            get in touch with us
                        </span>
                        <div className='flex gap-14'>
                            <div className='flex-1 flex flex-col'>
                                <h2 className="text-[rgba(2,6,12,0.75)] font-bold leading-[29px] text-[22px] break-after-auto tracking-[-0.55px]  mb-2">
                                    Head Office Address:
                                </h2>
                                <p className=" text-[rgba(2,6,12,0.45)] text-[16px] font-medium tracking-[-0.3px] leading-[22px] mb-8 ">
                                    Swiggy LimitedNo. <br /> 55 Sy No 8 to 14 I &amp; J Block – Ground Floor, Embassy
                                    Tech Village | <br/> Outer Ring Road, Devarbisanahalli,&nbsp; Bengaluru – 560103
                                </p>
                                <div>
                                    <h2 className=" text-[rgba(2,6,12,0.75)] font-bold leading-[29px] text-[22px] break-after-auto tracking-[-0.55px]  m-0">
                                        For help and support:
                                    </h2>
                                    <div>
                                        <p className=" text-[rgba(2,6,12,0.45)] text-[16px] font-medium tracking-[-0.3px] leading-[22px] ">
                                            Email :  <a href="mailto:support@swiggy.in" className=" text-[rgba(2,6,12,0.45)] text-[16px] font-medium tracking-[-0.3px] leading-[22px] ">
                                                support@swiggy.in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 rounded-[32px] overflow-hidden'>
                                <iframe
                                    height={355}
                                    className='w-full'
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=Swiggy%20HO&t=m&z=10&output=embed&iwloc=near"
                                    title="Swiggy HO"
                                    aria-label="Swiggy HO"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
