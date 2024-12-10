import React, { useState } from 'react';
import delivery from '../data.json';
import { Link } from 'react-router-dom';

const Delivery = () => {
    const [show, setShow] = useState(11);
    const handleShowMore = () => {
        setShow(delivery.delivery.length)
    }

    return (
        <section className='mt-[62px] m-auto w-[70%] mb-[80px]'>
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
                            className="flex text-[#ff5200] justify-center items-center text-[14px] font-Gilroy cursor-pointer p-4 font-semibold border rounded-[12px] tracking-[-0.35px] leading-[18px]"
                            style={{ width: 'calc(25% - 32px)' }}
                        >Show more</button>
                    )
                }
            </div>
        </section>
    );
};

export default Delivery;
