import React, { useState, useEffect } from 'react';

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
            description: "Enter restaurant details and for an easy form filling process, you can keep these documents handy."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleTitles, setVisibleTitles] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (visibleTitles.length === null) return animated[0].animationTitle[0];
            else {
                setVisibleTitles((prev) => {
                    const newTitles = [...prev.slice(1), animated[0].animationTitle[currentIndex]];
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % animated[0].animationTitle.length);

                    return newTitles;
                });
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
            <section className="flex justify-center" style={{
                backgroundImage: 'url("https://vendor-media-assets.swiggy.com/static-assets/images/PartnerBG.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <article className="flex flex-col justify-center mr-5">
                    {animated.map((item, index) => (
                        <div key={index} className="">
                            {item.icon}
                            <header>
                                <h1 className="text-[24px] text-[#ffffff]">{item.title}</h1>
                            </header>
                            <ul>
                                {visibleTitles.map((animation, index) => (
                                    <li key={index} className="text-[24px] text-[#ffffff] max-w-[423px]">
                                        {animation} {currentIndex}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </article>
                <article className="py-[20px] px-[27px] bg-[#ffffff] rounded-[20px]">
                    <header className="text-[#2a3a50] font-proxima-nova-bold tracking-[-0.1px] text-[24px]">
                        <h2>Get Started</h2>
                    </header>
                    <section className="pt-[27px]">
                        <div className="flex items-center gap-1">
                            <p>Enter a mobile number or restaurant ID to continue</p>
                            <p>
                                <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="#696B79" strokeWidth={2} strokeMiterlimit={10} />
                                    <path d="M8 11.77V7.46" stroke="#696B79" strokeWidth={2} />
                                    <circle cx={8} cy={5} r={1} fill="#696B79" />
                                </svg>
                            </p>
                        </div>
                        <div className="rounded-[2px] border min-h-[56px] px-[18.8px] flex items-center flex-1 my-[27px]">
                            <input type="text" placeholder="Enter Restaurant ID / Mobile number" className="w-full" />
                        </div>
                        <div className="bg-[#d4d5d9] text-center h-[46px] flex justify-center items-center font-proxima-nova-bold text-[#ffffff] text-[18px]">
                            <button>Continue</button>
                        </div>
                    </section>
                    <footer className="flex">
                        <p>By logging in, I agree to Swiggy’s</p>
                        <p>terms & conditions</p>
                    </footer>
                </article>
            </section>

            <section>
                <article>
                    <p>In just 3 easy steps</p>
                    <h3>Get your restaurant delivery-ready in 24hrs!</h3>
                    <ul className='before:absolute before:w-[1px] before:border before:border-dashed before:border-[#02060c26]'>
                        {steps.map((step, index) => (
                            <li key={index} className="flex flex-col  before:h-[14px] before:w-[14px] before:bg-[#6541e4] before:rounded-full">
                                <div>{step.title}</div>
                                <div>{step.description}</div>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </>
    );
}

export default Login;
