import React, { useEffect, useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
    return (
        <div className='bg-[#ff5200]'>
            <h1>  Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            <div className='flex justify-center gap-4 mt-[24px]'>
                <div className="flex items-center h-[60px] bg-white rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]">
                    <div><CiLocationOn size={24} className='text-[#ff5200]' /></div>
                    <input type="text" placeholder="Enter your delivery location" />
                    <div>
                        <IoIosArrowDown size={24} />
                    </div>
                </div>
                <div className='pl-4 w-[500px] flex justify-between items-center bg-white rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]'>
                    <span>Search for restaurant, item or more</span>
                    <div>
                        <CiSearch size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
