import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const animated = [
        {
            title: "PARTNER WITH SWIGGY!",
            animationTitle: ['Reach customers far away from you', 'Access to Swiggy tools and support', 'Increase your online orders'],
            icon: (
                <svg width={32} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.844 22.282c.219-1.263-.032-2.233-.678-2.74-.973-.763-2.434-1.177-5.913-1.177-2.575 0-5.338.003-6.52.002a.651.651 0 01-.52-.64l-.017-7.732c0-.488.384-.885.858-.886.474 0 .86.395.86.882 0 0 .012 4.198.013 5.69 0 .143.082.48.4.567 2.079.57 12.584.153 12.421-1.808C30.857 6.306 24.17 0 16.05 0c-2.556 0-4.977.626-7.12 1.736C3.8 4.45.156 9.927.251 16.254c.067 4.484 2.94 12.454 4.7 13.638.81.545 1.878.343 6.652.343 2.165 0 4.18.008 5.171.012.103.02.643.147.643.658l.013 5.877a.87.87 0 01-.858.886.871.871 0 01-.86-.883s.043-2.358.043-3.237c0-.204.014-.554-.563-.818-1.902-.87-8.077-.345-8.423.615-.133.37.558 1.798 1.62 3.629 3.541 5.746 7.018 10.227 7.58 10.944.034.03.068.06.098.082.463-.58 12.825-14.49 14.776-25.718z"
                        fill="#fff"
                    />
                </svg>
            )
        }
    ];
    const steps = [
        {
            title: "Step 1",
            description: "Install the Swiggy Owner App",
        },
        {
            title: "Step 2",
            description: "Login/Register using your phone number",
        },
        {
            title: "Step 3",
            description: "Enter restaurant details"
        }
    ];
    const documents = [
        { title: 'For an easy form filling process,', subtitle: 'you can keep these documents handy.' },
        { title: 'FSSAI License copy', action: 'Apply Here' },
        { title: 'Your Restaurant menu' },
        { title: 'Bank details' },
        { title: 'GSTIN', action: 'Apply Here' },
        { title: 'PAN card copy' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleTitles, setVisibleTitles] = useState([]);
    console.log(visibleTitles)
    useEffect(() => {
        if (visibleTitles.length === 0) {
            setVisibleTitles([animated[0].animationTitle[currentIndex]])
        }
        const intervalId = setInterval(() => {
            setVisibleTitles((prev) => {
                const newTitles = [...prev.slice(1), animated[0].animationTitle[currentIndex]];
                setCurrentIndex((prevIndex) => (prevIndex + 1) % animated[0].animationTitle.length);

                return newTitles;
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
            <section className=" font-Gilroy  w-[1536px] min-h-[calc(-346px+100vh)] flex items-center justify-center" style={{
                backgroundImage: 'url("https://vendor-media-assets.swiggy.com/static-assets/images/PartnerBG.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <article className="mr-5">
                    {animated.map((item, index) => (
                        <div key={index} className="">
                            {item.icon}
                            <header>
                                <h6 className="text-[12px] font-Gilroy-Medium-Rupee my-[6px] tracking-[2px] text-[#ffffff]">{item.title}</h6>
                                <svg width={72} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 1.44h55.796c21.468 0 20.21 1.999-3.827 3.56"
                                        stroke="#F15700"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </header>
                            <div>
                                <ul>
                                    {visibleTitles.map((animation, index) => (
                                        <li key={index} className="text-[36px] leading-10 font-Gilroy-ExtraBold-Rupee my-[14px] text-[#ffffff] max-w-[423px] w-[423px]">
                                            {animation}
                                        </li>
                                    ))}
                                </ul>
                                <div className='bg-[#ffffff4d] rounded-[20px] h-1 w-[72px] flex gap-1'>
                                    <div
                                        className={`h-1 w-[33%] cursor-pointer bg-white rounded-[20px]`}
                                        style={{ transform: `translateX(${currentIndex * 100}%)` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
                <article className="py-[20px] px-[27px] bg-[#ffffff] rounded-[20px] m-[10px] w-[23.4375rem]">
                    <header className="text-[#2a3a50] font-ProximaNovaBoldd tracking-[-0.1px] text-[24px]">
                        <h2 className='font-ProximaNovaBoldd tracking-[-0.1px] text-[#2a3a50] text-2xl font-bold'>Get Started</h2>
                    </header>
                    <section className="pt-[27px]">
                        <div className="flex  justify-between gap-1">
                            <p className='max-w-[258px] text-[#282c3eb3] tracking-[-0.1px] text-[14px] leading-4 font-ProximaNova-Medium'>Enter a mobile number or restaurant ID to continue</p>
                            <p>
                                <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="#696B79" strokeWidth={2} strokeMiterlimit={10} />
                                    <path d="M8 11.77V7.46" stroke="#696B79" strokeWidth={2} />
                                    <circle cx={8} cy={5} r={1} fill="#696B79" />
                                </svg>
                            </p>
                        </div>
                        <div className="rounded-[2px] border min-h-[56px] px-[18.8px] flex items-center flex-1  mt-[10px] mb-[27px]">
                            <input type="text" placeholder="Enter Restaurant ID / Mobile number" className="w-full" />
                        </div>
                        <div className="bg-[#d4d5d9] text-center h-[46px] flex justify-center items-center font-ProximaNova-Medium text-[#ffffff] text-[18px]">
                            <button>Continue</button>
                        </div>
                    </section>
                    <footer className="flex font-ProximaNova-Medium text-[13px] justify-center mt-[20px] gap-[3px]">
                        <p className='text-[#93959f]'>By logging in, I agree to Swiggy’s </p>
                        <p className='text-[#3d4051] underline decoration-[#3d4051]'> terms & conditions </p>
                    </footer>
                </article>
            </section>

            <section className='flex items-center py-6 px-8 gap-6 justify-center font-Gilroy'>
                <article className=' max-w-[508px] flex gap-3 flex-col'>
                    <div>
                        <p className='text-[#02060c73] text-[16px] leading-[21px] tracking-[-0.4px]'>In just 3 easy steps</p>
                        <h3 className='text-[#02060cbf] text-[20px] font-extrabold tracking-[-0.5px] leading-6'>Get your restaurant delivery-ready in 24hrs!</h3>
                    </div>
                    <div className='w-[38px] h-1 rounded-[16px] bg-[#ff5200]'></div>
                    <div className='bg-[#f0f0f5] pt-[24px] pr-[100px] pb-[24px] pl-[16px] rounded-[16px]'>
                        <ul className='relative pl-5 gap-6 flex flex-col custom__steps'>
                            {steps.map((step, index) => (
                                <li key={index} className="custom__steps__li">
                                    <div className='text-[#02060c99] text-[12px] leading-[16px] tracking-[-0.3px] font-extralight'>{step.title}</div>
                                    <div className='text-[#02060cbf] text-[18px] leading-[21px] tracking-[-0.45px] font-semibold'>{step.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
                <article className='max-w-[612px] flex-1 p-8 flex flex-col gap-4'
                    style={
                        {
                            backgroundImage: 'url("https://vendor-media-assets.swiggy.com/static-assets/icons/paper.svg")',
                            backgroundRepeat: "no-repeat"
                        }
                    }
                >
                    {
                        documents.map((document, __i) => {
                            const { title, subtitle, action } = document;
                            return (
                                <div key={__i} className='flex flex-col'>
                                    {title && subtitle && (
                                        <div className='text-[14px]'>
                                            <p className='text-[#02060cbf] text-[14px] leading-[18px] tracking-[-0.35px] font-semibold'>{title}</p>
                                            <p className='text-[#02060c99] text-[14px] leading-[18px] tracking-[-0.35px] font-extralight'>{subtitle}</p>
                                        </div>
                                    )}

                                    <ul className='flex text-[16px] gap-4 list-none p-0 m-0'>
                                        <li className="flex gap-3 text-[#02060cbf] text-[16px] leading-[21px] tracking-[-0.4px] font-semibold">
                                            <p>{title}</p>
                                            {action && (
                                                <span className='text-[#ff5200] underline  text-[#02060cbf] text-[16px] leading-[21px] tracking-[-0.4px] font-extralight'>
                                                    <Link to='/'>{action}</Link>
                                                </span>
                                            )}
                                        </li>
                                    </ul>

                                </div>
                            );
                        })
                    }
                </article>
            </section>
        </>
    );
}

export default Login;
