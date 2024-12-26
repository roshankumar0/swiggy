import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
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
    const handleActive = (item, index) => {
        setIsActive(index)
        if (item.includes("Our Businesses")) {
            navigate("/bussiness")
        }
        if (item.includes("Delivering For Everyone")) {
            navigate("/delivering")
        }
    }
    console.log(window.scrollY)
    return (
        <header className={`p-8 sticky top-0 right-0 z-50 left-0 ${isScrolled ? "shadow bg-[#FCFAFE]" : ""}`}>
            <nav>
                <div className='flex items-center justify-between'>
                    <img className='max-w-[150px] w-full' src={navbar[0].image} alt="" />
                    <ul className='flex flex-wrap font-Gilroy'>
                        {navbar[1].links.map((item, index) => {
                            return <li onClick={() => handleActive(item, index)} className={`leading-[24px]  tracking-[-0.45px] text-left px-0 py-[6px] mx-4 cursor-pointer text-[18px] ${isActive === index ? "text-[#FF5200]" : "text-[#333333]"}`} key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default CorporateNavbar;

