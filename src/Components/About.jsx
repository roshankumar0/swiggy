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

    return <div>{renderNestedData(data)}</div>;
};

export default About;
