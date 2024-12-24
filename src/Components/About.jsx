import { useState } from 'react';

const About = () => {
    const data = [
        {
            title: "IPO Delivered - November 2024",
            videoOrImage: "https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4",
        },
        {
            title: "Get to know us",
            content: [
                {
                    title: "Mission",
                    text: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.",
                    imagaULR: "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png"
                },
                {
                    title: "vission",
                    text: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.",
                    imagaULR: "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png"
                },
                {
                    title: "values",
                    text: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.",
                    imagaULR: "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png"
                },


            ],
        },
        {
            title: "industry pioneer",
            totalCount: [
                {
                    total: "3 Billion+",
                    tag: "orders delivered"
                },
                {
                    total: "220k+",
                    tag: "restaurant partners"
                },
                {
                    total: "520k+",
                    tag: "delivery partners"
                },
                {
                    total: "680+",
                    tag: "cities in India"
                },
            ]
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNavigate = (index) => {
        console.log(index)
        setCurrentIndex(index)
    }
    const renderNestedData = (content) => {
        console.log(content)
        let result = [];
        for (let idx = 0; idx < content.length; idx++) {
            let currentLoopItem = content[idx];
            const contentItem = (
                <div key={idx}>
                    {currentLoopItem?.title && <h2 className='text-center text-[#02060CBF] text-[40px] font-Gilroy font-black leading-[49.92px] tracking-[0.03px]'>{currentLoopItem.title.toUpperCase()}</h2>}

                    {
                        currentLoopItem?.videoOrImage?.includes('.mp4') && <video controls>
                            <source src={currentLoopItem.videoOrImage} />
                        </video>
                    }
                    {currentLoopItem.videoOrImage?.includes('.webp') && <img src={currentLoopItem.videoOrImage} alt={currentLoopItem.title} />}
                    <div className=''>
                        {currentLoopItem.content && currentLoopItem.content.map((item, __i) => {
                            console.log(item, 'data')
                            return <div className='' key={__i}>
                                <div className='' onClick={() => handleNavigate(__i)} >
                                    <span >{item.title}</span>
                                </div>
                                <div className=''>
                                    {currentIndex === __i && (
                                        <div>
                                            {item.text}
                                            <img src={item.imagaULR} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            )
            result.push(contentItem)
        }
        return result

    };

    return <>
        <div className='flex justify-center items-center py-20 bg-white'>
            <div className='h-[460px]  rounded-[45px] w-[800px]  flex justify-center items-center gap-5 flex-col'>
                <h2 className=' text-[rgba(2,6,12,0.75)] text-[40px] leading-[49.92px] max-w-[95%] shrink-0 font-black tracking-[0.03px] uppercase text-center mx-[10px] my-0'>IPO Delivered - November 2024</h2>
                <video className='w-full max-w-full rounded-[45px]' width="600" controls muted autoPlay>
                    <source src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div className='bg-white'>
            <div className='px-[10px]'>
                <div className=' max-w-[1180px] m-auto flex flex-col justify-center gap-5 pt-[50px] pb-20'>
                    <h2 className=' text-[rgba(2,6,12,0.75)] text-[40px] leading-[49.92px] max-w-[95%] shrink-0 font-black tracking-[0.03px] uppercase text-center mx-[10px] my-0'>GET TO KNOW US</h2>
                    <div className='flex gap-14 '>
                        <div className='flex flex-col font-Gilroy text-[22px] w-[40%] '>
                            <button className='pb-14 text-[#ff5200] font-medium border-b-[1px] border-b-[#02060C26] text-start '>Mission</button>
                            <button className='pt-14 text-start text-[#02060C4D] font-medium border-b-[1px] border-b-[#02060C26]'>
                                Vission
                            </button>
                            <button className='pt-14 text-start text-[#02060C4D] font-medium'>values</button>
                        </div>
                        <div className='flex gap-[56px] items-center'>
                            <div className='text-[#02060C99] w-[60%] text-[18px] font-Gilroy font-medium leading-6 tracking-[-0.03px]'>
                                <p>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.
                                </p>
                            </div>
                            <div>
                                <img className='rounded-[32px]' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className='px-[10px]'>
                <div className=' max-w-[1180px] m-auto flex flex-col justify-center gap-5 pt-[50px] pb-20'>
                    <h2 className=' text-[rgba(2,6,12,0.75)] text-[40px] leading-[49.92px] max-w-[95%] shrink-0 font-black tracking-[0.03px] uppercase text-center mx-[10px] my-0 '> INDUSTRY PIONEER</h2>
                    <div className='flex gap-[56px] items-center'>
                        <div className='text-[#02060C99]  text-[18px] font-Gilroy font-medium leading-6 tracking-[-0.03px] flex-1'>
                            <p className=' text-[rgba(2,6,12,0.6)] h-[144px] text-[18px] font-medium tracking-[-0.03px] leading-[24px] text-start'>Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.
                            </p>
                        </div>
                        <div className='px-[66px] py-9 flex-1 border-2 rounded-[45px]  text-[rgb(51,51,51)] overflow-hidden h-[357.65px] text-center text-[16px] font-normal leading-[24px]'>
                            <img className='className=" h-[285.65px] max-w-full text-[rgb(51,51,51)] break-inside-auto transition-[0.2s] inline-block align-middle text-center text-[16px] font-normal leading-[24px] rounded-none"' src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/Group-1116602947-768x507.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className='px-[10px]'>
                <div className=' max-w-[1180px] m-auto flex flex-col justify-center gap-5 pt-[50px] pb-20'>
                    <div className='flex justify-between'>
                        <div>
                            <span className=' text-[rgb(27,166,114)] grow  whitespace-pre-wrap text-[36px] font-extrabold leading-[40px] tracking-[-0.8px]'>3 Billion+</span>
                            <p className=' text-[rgb(84,89,95)]  flex flex-1 text-[18px] font-medium leading-[24px] tracking-[-0.3px] '>orders delivered</p>
                        </div>
                        <div>
                            <span className=' text-[rgb(27,166,114)] grow  whitespace-pre-wrap text-[36px] font-extrabold leading-[40px] tracking-[-0.8px]'>220k+</span>
                            <p className=' text-[rgb(84,89,95)]  flex flex-1 text-[18px] font-medium leading-[24px] tracking-[-0.3px] '>restaurant partners</p>
                        </div>
                        <div>
                            <span className=' text-[rgb(27,166,114)] grow  whitespace-pre-wrap text-[36px] font-extrabold leading-[40px] tracking-[-0.8px]'>520k+</span>
                            <p className=' text-[rgb(84,89,95)]  flex flex-1 text-[18px] font-medium leading-[24px] tracking-[-0.3px] '>delivery partners</p>
                        </div>
                        <div>
                            <span className=' text-[rgb(27,166,114)] grow  whitespace-pre-wrap text-[36px] font-extrabold leading-[40px] tracking-[-0.8px]'>680k+</span>
                            <p className=' text-[rgb(84,89,95)]  flex flex-1 text-[18px] font-medium leading-[24px] tracking-[-0.3px] '>cities in India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default About;


