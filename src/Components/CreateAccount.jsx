import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
const CreateAccount = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <section className={`w-[561px] pl-10   translate-x-[${toggle ? "100%" : "0%"}] duration-300 pr-[159px] bg-white fixed h-screen z-50 right-0 font-ProximaNova`}>
            <article>
                <header className='flex h-[130px] relative pt-[30px] mb-[69px] '>
                    <div>
                        <button >
                            <span onClick={() => setToggle(!toggle)}><RxCross1 /></span>
                        </button>
                        <h2 className='mt-[25px] text-[30px] '>Login</h2>
                        <h5 className='mt-[10px] text-[14px] cursor-pointer text-[#ff5200] '>
                            <span className=' text-[#282c3f] '>or</span> create an account
                        </h5>
                        <hr className=' mt-[22px] w-[30px] border-[#000] border  ' />
                    </div>
                    <img
                        className='h-[105px] w-[100px] object-cover absolute right-0 mt-7 '
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                        alt="Login illustration"
                    />
                </header>
                <form className='flex flex-col '>
                    <div className='border-[.8px] relative border-[#d4d5d9] '>
                        <label className='left-0 bottom-6 pl-5 font-normal absolute leading-5 text-[#93959f]' htmlFor="phone-number">Phone number</label>
                        <input id='phone-number' className='  bg-[#0000] outline-none px-5 pt-[22px] font-medium h-[70px]  ' type="text" />
                    </div>
                    <button className='mt-5 text-[#fff] text-[14px] font-semibold tracking-[0] leading-[50px] shadow-[0_1px_3px_0_rgba(0, 0, 0, .12)]  cursor-pointer px-7 h-[50px]  bg-[#ff5200] ' type="submit">LOGIN</button>
                </form>
                <footer className='text-[12px] text-[#686b78] mt-[6px] font-medium '>
                    <small>
                        <span>By clicking on Login, I accept the </span>
                        <a className='text-[#282c3f]' href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>
                    </small>
                </footer>
            </article>
        </section>
    );
};

export default CreateAccount;
