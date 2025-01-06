import React, { useState } from 'react';
import delivery from '../data.json';
import { Link } from 'react-router-dom';

const Delivery = () => {
    const [show, setShow] = useState(11);
    const handleShowMore = () => {
        setShow(delivery.delivery.length)
    }

    return (
        <section className=''>
            <header>
                <h2 className='font-semibold font-Gilroy text-[24px] leading-[24px] tracking-[-0.6px] text-[#02060ceb] '>Cities with Food Delivery</h2>
            </header>
            <div className="flex flex-wrap gap-4 mt-3 ">
                {delivery?.delivery.slice(0, show)?.map((data, index) => {
                    return (
                        <article
                            className="flex shrink justify-center font-Gilroy items-center text-[14px] cursor-pointer p-4 font-normal border rounded-[12px] tracking-[-0.35px] leading-[18px] text-[#02060cbf]"
                            key={index}
                            style={{ width: 'calc(25% - 32px)' }}
                        >
                            <Link to={data.link}>
                                <button className="">{data.order_food}</button>
                            </Link>
                        </article>
                    );
                })}
                {
                    show === 11 && (
                        <button
                            onClick={() => handleShowMore()}
                            className="flex gap-2 text-[#ff5200] justify-center items-center text-[14px] font-Gilroy cursor-pointer p-4 font-semibold border rounded-[12px] tracking-[-0.35px] leading-[18px]"
                            style={{ width: 'calc(25% - 32px)' }}
                        > <span>Show more</span>
                         <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        aria-hidden="true"
                        strokecolor="rgba(2, 6, 12, 0.92)"
                        fillcolor="#FF5200"
                      >
                        <path
                          d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106"
                          fill="#FF5200"
                          fillOpacity="0.92"
                        />
                      </svg>
                      </button>
                    )
                }
            </div>
        </section>
    );
};

export default Delivery;
