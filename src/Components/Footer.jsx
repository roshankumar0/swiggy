import React from 'react'
import footerData from '../data.json'

const Footer = () => {
    return (
        <section className='bg-[#f0f0f5]'>
            <footer className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-[5%] pt-12 pr-[20%] pb-[48px] pl-[15%]'>
                <section className=''>
                    <img
                        src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
                        alt="Swiggy Logo"
                    />
                    <p>© 2024 Swiggy Limited</p>
                </section>
                {
                    footerData?.footerData?.map((data, index) => {
                        return (
                            <section key={index}>
                                <h4 className='flex font-bold text-[16px] leading-[19px] tracking-[0.3px] text-[#02060c99]'>{data.title}</h4>
                                <ul>
                                    {
                                        data?.items?.map((item, i) => {
                                            return <li key={i} className='font-extralight text-[18px] leading-[20px] tracking-[0.3px] py-4 text-[#02060ceb]'>{item}</li>
                                        })
                                    }
                                </ul>
                            </section>
                        )
                    })
                }
            </footer>
            <div className='flex flex-col gap-8 pb-8 items-center'>
                <div className='h-[1px] w-[90%] m-auto bg-[#02060c73]'></div>
                <footer className='flex gap-8 items-center justify-center'>
                    <header className='text-[#02060cbf] text-[24px] font-semibold leading-6 tracking-[-0.6px]'>For better experience, download the Swiggy app now</header>
                    <div className='flex gap-6'>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer
