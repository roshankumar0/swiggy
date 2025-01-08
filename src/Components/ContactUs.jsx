import React from 'react'
import CorporateNavbar from './CorporateNavbar'
import Footer from '../Components/Footer'
import SwiggyApp from './SwiggyApp'
const ContactUs = () => {
    return (
        <div>
            {/* <CorporateNavbar /> */}
            <div className='bg-[#EBEBF3] relative '>
                <img className='max-w-[170px] object-cover w-full absolute botto ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/yoga-day-2.webp" alt="" />
                <img className='max-w-[170px] object-cover w-full absolute right-0 top-0 ' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1.webp" alt="" />
                <div className=' w-[1180px] m-auto '>
                    <div className='flex gap-x-[138px] pt-6 pb-[67px] '>
                        <div className=''>
                            <h1 className=" mb-[30px] text-[rgba(2,6,12,0.92)] font-bold leading-[45px] text-[48px]  tracking-[-0.4px]  ">
                                Customer Support
                            </h1>

                            <p className=" mb-[14px] text-[rgba(2,6,12,0.75)] text-[24px] font-bold tracking-[-0.9px] leading-[28px] ">
                                <span>Email: </span>support@swiggy.in
                            </p>

                            <h3 className=" mt-10 mb-5 text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  ">
                                Find us on
                            </h3>

                            <ul className='flex space-x-5'>
                                <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_1336_2703)">
                                        <path
                                            d="M17.04 17.043H14.078V12.403C14.078 11.296 14.055 9.872 12.534 9.872C10.99 9.872 10.754 11.076 10.754 12.321V17.043H7.793V7.5H10.637V8.8H10.676C11.073 8.05 12.04 7.26 13.484 7.26C16.485 7.26 17.04 9.234 17.04 11.805V17.043ZM4.447 6.194C3.493 6.194 2.727 5.423 2.727 4.474C2.727 3.525 3.494 2.754 4.447 2.754C4.90317 2.754 5.34066 2.93521 5.66322 3.25778C5.98579 3.58034 6.167 4.01783 6.167 4.474C6.167 4.93017 5.98579 5.36766 5.66322 5.69022C5.34066 6.01279 4.90317 6.194 4.447 6.194ZM5.931 17.044H2.961V7.5H5.931V17.044ZM18.522 0H1.476C0.66 0 0 0.645 0 1.44V18.56C0 19.355 0.66 20 1.476 20H18.518C19.333 20 20 19.356 20 18.56V1.44C20 0.646 19.333 0 18.518 0H18.522Z"
                                            fill="#F15700"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1336_2703">
                                            <rect width={20} height={20} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </li>
                                <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.0276 2C14.1526 2.003 14.7236 2.009 15.2166 2.023L15.4106 2.03C15.6346 2.038 15.8556 2.048 16.1226 2.06C17.1866 2.11 17.9126 2.278 18.5496 2.525C19.2096 2.779 19.7656 3.123 20.3216 3.678C20.8303 4.17773 21.2238 4.78247 21.4746 5.45C21.7216 6.087 21.8896 6.813 21.9396 7.878C21.9516 8.144 21.9616 8.365 21.9696 8.59L21.9756 8.784C21.9906 9.276 21.9966 9.847 21.9986 10.972L21.9996 11.718V13.028C22.002 13.7574 21.9944 14.4868 21.9766 15.216L21.9706 15.41C21.9626 15.635 21.9526 15.856 21.9406 16.122C21.8906 17.187 21.7206 17.912 21.4746 18.55C21.2238 19.2175 20.8303 19.8223 20.3216 20.322C19.8219 20.8307 19.2171 21.2242 18.5496 21.475C17.9126 21.722 17.1866 21.89 16.1226 21.94L15.4106 21.97L15.2166 21.976C14.7236 21.99 14.1526 21.997 13.0276 21.999L12.2816 22H10.9726C10.2429 22.0026 9.51312 21.9949 8.78359 21.977L8.58959 21.971C8.3522 21.962 8.11487 21.9517 7.87759 21.94C6.81359 21.89 6.08759 21.722 5.44959 21.475C4.78242 21.2241 4.17804 20.8306 3.67859 20.322C3.16954 19.8224 2.7757 19.2176 2.52459 18.55C2.27759 17.913 2.10959 17.187 2.05959 16.122L2.02959 15.41L2.02459 15.216C2.00616 14.4868 1.99782 13.7574 1.99959 13.028V10.972C1.99682 10.2426 2.00416 9.5132 2.02159 8.784L2.02859 8.59C2.03659 8.365 2.04659 8.144 2.05859 7.878C2.10859 6.813 2.27659 6.088 2.52359 5.45C2.77529 4.7822 3.16982 4.17744 3.67959 3.678C4.17875 3.16955 4.78278 2.77607 5.44959 2.525C6.08759 2.278 6.81259 2.11 7.87759 2.06C8.14359 2.048 8.36559 2.038 8.58959 2.03L8.78359 2.024C9.51278 2.00623 10.2422 1.99857 10.9716 2.001L13.0276 2ZM11.9996 7C10.6735 7 9.40174 7.52678 8.46406 8.46447C7.52638 9.40215 6.99959 10.6739 6.99959 12C6.99959 13.3261 7.52638 14.5979 8.46406 15.5355C9.40174 16.4732 10.6735 17 11.9996 17C13.3257 17 14.5974 16.4732 15.5351 15.5355C16.4728 14.5979 16.9996 13.3261 16.9996 12C16.9996 10.6739 16.4728 9.40215 15.5351 8.46447C14.5974 7.52678 13.3257 7 11.9996 7ZM11.9996 9C12.3936 8.99993 12.7837 9.07747 13.1477 9.22817C13.5117 9.37887 13.8424 9.5998 14.1211 9.87833C14.3997 10.1569 14.6207 10.4875 14.7715 10.8515C14.9224 11.2154 15 11.6055 15.0001 11.9995C15.0002 12.3935 14.9226 12.7836 14.7719 13.1476C14.6212 13.5116 14.4003 13.8423 14.1218 14.121C13.8432 14.3996 13.5126 14.6206 13.1486 14.7714C12.7847 14.9223 12.3946 14.9999 12.0006 15C11.2049 15 10.4419 14.6839 9.87927 14.1213C9.31666 13.5587 9.00059 12.7956 9.00059 12C9.00059 11.2044 9.31666 10.4413 9.87927 9.87868C10.4419 9.31607 11.2049 9 12.0006 9M17.2506 5.5C16.9191 5.5 16.6011 5.6317 16.3667 5.86612C16.1323 6.10054 16.0006 6.41848 16.0006 6.75C16.0006 7.08152 16.1323 7.39946 16.3667 7.63388C16.6011 7.8683 16.9191 8 17.2506 8C17.5821 8 17.9001 7.8683 18.1345 7.63388C18.3689 7.39946 18.5006 7.08152 18.5006 6.75C18.5006 6.41848 18.3689 6.10054 18.1345 5.86612C17.9001 5.6317 17.5821 5.5 17.2506 5.5Z"
                                        fill="#F15700"
                                    />
                                </svg>
                                </li>
                                <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                                        fill="#F15700"
                                    />
                                </svg>
                                </li>
                                <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.006 4.356 19.462 7.758 21.058L10.048 10.292C10.1067 10.0362 10.2636 9.81367 10.4848 9.6725C10.7061 9.53132 10.974 9.4828 11.2307 9.5374C11.4874 9.592 11.7124 9.74535 11.8571 9.96435C12.0017 10.1833 12.0545 10.4504 12.004 10.708C11.73 12 11.49 12.5 11.501 13.1C11.518 14.04 11.774 14.542 12.022 14.802C12.275 15.067 12.64 15.21 13.117 15.202C13.604 15.192 14.155 15.021 14.643 14.713C15.592 14.117 16 13.095 16 12C15.9993 11.4058 15.8663 10.8191 15.6105 10.2828C15.3547 9.74639 14.9827 9.27374 14.5213 8.89917C14.06 8.5246 13.5211 8.25752 12.9436 8.11734C12.3661 7.97717 11.7647 7.96741 11.183 8.08879C10.6013 8.21017 10.0539 8.45963 9.58067 8.81905C9.10745 9.17846 8.72025 9.6388 8.44722 10.1666C8.17419 10.6944 8.02218 11.2764 8.00225 11.8703C7.98232 12.4642 8.09497 13.0551 8.332 13.6C8.42864 13.8413 8.42756 14.1107 8.32898 14.3511C8.2304 14.5916 8.04207 14.7843 7.80389 14.8883C7.56572 14.9923 7.2964 14.9995 7.05301 14.9083C6.80962 14.8172 6.61128 14.6349 6.5 14.4C6.10192 13.4869 5.93742 12.4891 6.02133 11.4966C6.10524 10.5041 6.43494 9.54806 6.98066 8.7148C7.52639 7.88153 8.27098 7.19724 9.14726 6.72365C10.0235 6.25006 11.0039 6.00208 12 6.00208C12.9961 6.00208 13.9765 6.25006 14.8527 6.72365C15.729 7.19724 16.4736 7.88153 17.0193 8.7148C17.5651 9.54806 17.8948 10.5041 17.9787 11.4966C18.0626 12.4891 17.8981 13.4869 17.5 14.4C17.132 15.248 16.46 15.934 15.708 16.407C14.953 16.882 14.051 17.186 13.153 17.202C12.334 17.217 11.481 16.99 10.794 16.394L9.66 21.726C10.41 21.906 11.194 22.001 11.999 22.001L12 22Z"
                                        fill="#F15700"
                                    />
                                </svg>
                                </li>
                                <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M17.751 3H20.818L14.118 10.625L22 21H15.828L10.995 14.707L5.464 21H2.394L9.561 12.845L2 3H8.328L12.698 8.752L17.751 3ZM16.675 19.172H18.375L7.404 4.732H5.58L16.675 19.172Z"
                                        fill="#F15700"
                                    />
                                </svg>
                                </li>
                            </ul>
                            <h3 className=" mt-10 mb-5 text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  ">
                                Corporate Office
                            </h3>

                            <p className=" text-[rgba(2,6,12,0.75)] h-[80px] text-[18px] font-medium tracking-[-0.3px] leading-[20px] ">
                                No. 55, Sy No. 8-14, Ground Floor, I&amp;J Block, Embassy TechVillage, Outer
                                Ring Road, Devarbisanahalli, Bengaluru 560 103, Karnataka, India, Corporate
                                Identity Number: U74110KA2013PLC096530 Registration Number: 096530
                            </p>

                            <button className=" mt-[30px] bg-[#ff5200] text-white shadow-[rgba(27,30,36,0.08)_0px_4px_8px_0px] inline-block text-[13px] leading-[16px] text-center transition-[0.3s] font-bold tracking-[-0.1px] px-[24px] py-[12px] rounded-[12px]" >
                                Get Directions
                            </button>

                        </div>
                        <form >
                            <div className=' '>
                                <div className='border-[#FFFFFF] bg-[#FBF8FB] py-[34.78px] px-[26.17px] border-[1.6px] rounded-[20px] flex flex-col items-start '>
                                    <h2 className=" text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  mb-4 ">
                                        Get in touch
                                    </h2>

                                    <div className='mb-[14px] flex flex-col items-start '>
                                        <input placeholder="Enter Name" type="text" name="your-name" className=" mb-[18px] shadow-[rgba(27,30,36,0.08)_0px_3.49px_6.98px_0px] text-neutral-600 text-[15.7px] leading-[15.7px] transition-[0.3s] w-[388.475px] overflow-clip font-medium tracking-[-0.26px] text-left pt-[17.45px] pb-[16.28px] px-[20.94px] rounded-[7px] border-[0.8px] border-solid border-[rgba(2,6,12,0.05)]" />
                                        <input placeholder="Enter Email Address" type="email" name="your-email" className=" shadow-[rgba(27,30,36,0.08)_0px_3.49px_6.98px_0px] text-neutral-600 text-[15.7px] leading-[15.7px] transition-[0.3s] w-[388.475px] overflow-clip font-medium tracking-[-0.26px] text-left pt-[17.45px] pb-[16.28px] px-[20.94px] rounded-[7px] border-[0.8px] border-solid border-[rgba(2,6,12,0.05)]  mb-[18px] " />
                                        <textarea cols={40} rows={10} aria-invalid="false" placeholder="Enter Message" name="your-message" className=" shadow-[rgba(27,30,36,0.08)_0px_3.49px_6.98px_0px] text-neutral-600 text-[15.7px] leading-[15.7px] transition-[0.3s] w-[388.475px] overflow-auto resize-y font-medium tracking-[-0.26px] max-h-[171.48px] text-left px-[20.94px] py-[23.56px] rounded-[7px] border-[0.8px] border-solid border-[rgba(2,6,12,0.05)]" />
                                        <button className=" mt-[30px] bg-[#ff5200] text-white shadow-[rgba(27,30,36,0.08)_0px_4px_8px_0px] inline-block text-[13px] leading-[16px] text-center transition-[0.3s] font-bold tracking-[-0.1px] px-[24px] py-[12px] rounded-[12px]" >
                                            Submit
                                        </button>
                                    </div>
                                    <div className=" text-[rgb(122,122,122)] h-[41.875px] text-[15.7px] font-medium tracking-[-0.26px] leading-[20.94px] text-center">
                                        By contacting us you agree to the and
                                        <a href="https://www.swiggy.com/terms-and-conditions" className=" text-[rgb(241,87,0)] font-bold text-[15.7px] tracking-[-0.26px] leading-[20.94px] text-center ml-1 ">
                                            Terms and Conditions
                                        </a>
                                        <a href="https://www.swiggy.com/privacy-policy" className=" text-[rgb(241,87,0)] font-bold text-[15.7px] tracking-[-0.26px] leading-[20.94px] text-center">
                                            Privacy Policy
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex w-[1180px] max-w-[1180px] m-auto py-[120px] gap-x-[150px] '>
                {/* left  */}
                <div className='flex-1 '>
                    <div>
                        <div>
                            <h2 className=" mb-6 text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  ">
                                Investor Queries and Grievances
                            </h2>
                            <div>
                                <h5 className=" text-[rgba(2,6,12,0.92)] font-semibold leading-[24px] text-[20px] tracking-[-0.3px] mb-2 ">
                                    Abhishek Agarwal
                                </h5>
                                <div className=" text-[rgba(2,6,12,0.75)] h-[38px] text-[20px] font-normal tracking-[-0.3px] leading-[24px]   mb-[14px] mx-0">
                                    Vice President, Investor Relations
                                </div>

                                <div className=" text-[rgba(2,6,12,0.75)] h-[20px] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                    Email:&nbsp;<a href="mailto:ir@swiggy.in" className=" text-[rgb(255,82,0)] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                        ir@swiggy.in
                                    </a>

                                </div>
                            </div>
                            <div className='mb-[61px] mt-10 '>
                                <h5 className=" text-[rgba(2,6,12,0.92)] font-semibold leading-[24px] text-[20px] tracking-[-0.3px] mt-[8.5px]  ">
                                    Sridhar. M
                                </h5>
                                <p className=" mb-3 text-[rgba(2,6,12,0.6)] text-[20px] font-normal tracking-[-0.3px] leading-[24px] ">
                                    Company Secretary and Compliance Officer
                                </p>
                                <div className=" text-[rgba(2,6,12,0.92)] h-[20px] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                    Email:&nbsp;<a href="mailto:secretarial@swiggy.in" className=" text-[rgb(255,82,0)] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                        secretarial@swiggy.in
                                    </a>

                                </div>

                            </div>
                            <h2 className=" text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px] mb-6  tracking-[-0.6px]  ">
                                Registrar and Share Transfer Agent
                            </h2>
                            <div className=" text-[rgba(2,6,12,0.75)] h-[86px] text-[20px] tracking-[-0.3px] leading-[24px]  font-normal mb-[14px] mx-0">
                                Link Intime India Private Limited Registrar and Share Transfer Agent 543/A,
                                7th Main, 3rd Cross S L Bhyrappa Road, Hanumanthnagar Bengaluru, Karnataka
                                560019
                            </div>
                            <div className=" text-[rgba(2,6,12,0.92)] h-[20px] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                Email:&nbsp; <a href="mailto:https://www.linkintime.co.in/" className=" text-[rgb(255,82,0)] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                    https://www.linkintime.co.in/
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* right  */}
                <div className='flex-1'>
                    <div>
                        <div>
                            <h2 className=" mb-6 text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  ">
                                Public Relations and Media
                            </h2>
                            <h5 className=" text-[rgba(2,6,12,0.92)] font-semibold leading-[24px] mb-[8.5px] text-[20px] tracking-[-0.3px]  ">
                                Sanjana Shetty
                            </h5>

                            <div className=" text-[rgba(2,6,12,0.6)] h-[36px] text-[20px] font-normal tracking-[-0.3px] leading-[24px]  mb-[12px] mx-0">
                                Vice President, Corporate Affairs
                            </div>
                            <div className=" text-[rgba(2,6,12,0.92)] h-[20px] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                Email:&nbsp; <a href="mailto:pr@swiggy.in" className=" text-[rgb(255,82,0)] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                    pr@swiggy.in
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className=" mt-10 text-[rgba(2,6,12,0.92)] font-semibold leading-[24px] text-[20px] tracking-[-0.3px]  ">
                                Dinker Vashisht
                            </h5>
                            <div className=" text-[rgba(2,6,12,0.6)] h-[36px] text-[20px] font-normal tracking-[-0.3px] leading-[24px]  mb-[12px] mx-0">
                                Vice President, Corporate Affairs
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className=" text-[rgba(2,6,12,0.92)] font-bold leading-[32px] text-[28px]  tracking-[-0.6px]  ">
                            Customer Support
                        </h2>
                        <div className=" text-[rgba(2,6,12,0.92)] h-[20px] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                            Email:&nbsp;
                            <a href="mailto:support@swiggy.in" className=" text-[rgb(255,82,0)] text-[18px] font-bold tracking-[-0.3px] leading-[20px] ">
                                support@swiggy.in
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            {/* <SwiggyApp /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default ContactUs
