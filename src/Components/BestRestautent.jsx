import React, { useEffect, useState } from 'react';
import bestResto from '../data.json'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const BestRestautent = () => {
    console.log(bestResto.restaurantData)
    return (
        <main className='bg-white mt-[120px]'>
            <header className='flex justify-between pb-8'>
                <h2 className='text-[24px] font-semibold text-[#02060ceb] tracking-[0.6px] leading-6'>Discover best restaurants on Dineout</h2>
                <div className='flex gap-3'>
                    <div >
                        <div className='rounded-full h-[34px] w-[34px]  bg-[#02060c26] pt-2 pr-2 pb-1 pl-2 '>
                            <IoIosArrowRoundBack />
                        </div>

                    </div>
                    <div className='rounded-full h-[34px] w-[34px]  bg-[#02060c26] pt-2 pr-2 pb-1 pl-2 '>
                        <IoIosArrowRoundForward />
                    </div>
                </div>
            </header>

            <section className="flex overflow-x-scroll gap-4">
                {
                    bestResto?.restaurantData?.map((data) => {
                        return <article key={data.id} className="min-w-[328px] border rounded-[16px] rounded-[16px bg-red-800] overflow-hidden cursor-pointer">
                            <figure>
                                <div className="relative flex items-end">
                                    <img
                                        className='w-full'
                                        src={data.image}
                                        alt={data.name}
                                    />
                                    <figcaption className="absolute bg-gradient-to-t from-black to-transparent flex w-full text-white h-[50px] justify-between pt-4 pr-3 pb-3 pl-3">
                                        <p>{data.name}</p>
                                        <p className='flex items-center'><span><svg width={16} height={16} viewBox="0 0 16 16" fill="none" role="img">
                                            <circle
                                                cx="8.00005"
                                                cy="7.99999"
                                                r="7.2"
                                                fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
                                            />
                                            <path
                                                d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                                                fill="white"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="StoreRating16_svg__paint0_linear_32982_71565"
                                                    x1="8.00005"
                                                    y1="0.799988"
                                                    x2="8.00005"
                                                    y2="15.2"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#21973B" />
                                                    <stop offset={1} stopColor="#128540" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        </span>{data.rating}</p>
                                    </figcaption>
                                </div>
                            </figure>

                            <section className="text-[#02060c99] pt-2 pr-3 pb-3 pl-3">
                                <div className="flex justify-between">
                                    <p>{data.location}</p>
                                    <p>{data.costForTwo}</p>
                                </div>
                                <address className="flex text-[#02060c99] justify-between">
                                    <p>{data.cuisine}</p>
                                    <p>{data.distance}</p>
                                </address>

                                <div className="flex gap-1">
                                    <p className='bg-[#f0f0f5] gap-[2px] rounded-[12px] py-[2px] px-2 flex items-center'><span><img className='h-3 w-3 object-contain' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png" alt="" /></span><span>Table booking</span></p>
                                    <p className='bg-[#f0f0f5] gap-[2px] rounded-[12px] py-[2px] flex items-center px-2'><span><img className='h-3 w-3 object-contain' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/tag2.png" alt="" /></span><span>Free Desert</span></p>
                                </div>

                                <section className="flex justify-between items-center mt-3 bg-[#1ba672] rounded-[8px] text-white px-2 h-9">
                                    <div className='flex gap-1 items-center items-center'>
                                        <img className='h-5 w-[26px] object-contain' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="" />
                                        <p>{data.offer}</p>
                                    </div>
                                    <div>+3</div>
                                </section>

                                <section className="bg-[#c8f9e5] rounded-[8px] text-[#1ba672] px-2 h-9 mt-3 pl-2 flex items-center">
                                    <p>{data.bankOffer}</p>
                                </section>
                            </section>
                        </article>
                    })
                }
            </section>
        </main>
    );
}

export default BestRestautent;
