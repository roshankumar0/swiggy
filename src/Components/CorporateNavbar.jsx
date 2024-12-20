import React, { useEffect, useState } from 'react'

const CorporateNavbar = () => {
    const navbar = [
        {
            image: "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp"
        },

        {
            links: [" About Swiggy", " Our Businesses", "  Delivering For Everyone", "Newsroom", " Investor Relations", "Contact Us", "Sustainability"
            ]

        }
    ]
    const [isScrolled, setIsScrolled] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const handleActive = (index) => {
        setIsActive(index)
    }
    console.log(window.scrollY)
    return (
        <header className={`p-8 sticky top-0 right-0 left-0 ${isScrolled ? "bg-white shadow" : ""}`}>
            <nav>
                <div className='flex items-center justify-between'>
                    <img className='max-w-[150px] w-full' src={navbar[0].image} alt="" />
                    <ul className='flex flex-wrap font-Gilroy'>
                        {navbar[1].links.map((item, index) => {
                            return <li onClick={()=>handleActive(index)} className={`mx-4 cursor-pointer ${isActive === index ? "text-[#FF5200]" : "text-[#02060CBF]"}`} key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default CorporateNavbar
