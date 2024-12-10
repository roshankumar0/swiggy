import React, { useEffect, useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
    return (
        <div className='relative pt-16 pb-8'>
            <img className='h-[450px] w-[250px] absolute top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <header>
                <h1 className='w-[60%] m-auto font-gilroy-bold text-center pl-3 text-white text-[48px] leading-[-0.3px]'> Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            </header>
            <div className='flex justify-center gap-4 mt-[24px]'>
                <div className="flex items-center h-[60px] bg-white rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]">
                    <div><CiLocationOn size={24} className='text-[#ff5200] ' /></div>
                    <input className='font-Gilroy' type="text" placeholder="Enter your delivery location" />
                    <div>
                        <IoIosArrowDown size={24} />
                    </div>
                </div>
                <div className=' pl-4 w-[500px] flex justify-between bg-white items-center rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]'>
                    <span className='text-[18px] leading-[24px] tracking-[-0.3px] font-extralight text-[#02060c73] font-Gilroy'>Search for restaurant, item or more</span>
                    <div>
                        <CiSearch size={24} />
                    </div>
                </div>
            </div>
            <img className='h-[450px] w-[250px] absolute right-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        </div>
    )
}

export default Search
