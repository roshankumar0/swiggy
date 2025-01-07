import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CorporateNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const navbar = {
        image: 'https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp',
        links: [
            { name: 'About Swiggy', route: '/about' },
            { name: 'Our Businesses', route: '/bussiness' },
            { name: 'Delivering For Everyone', route: '/delivering' },
            { name: 'Newsroom', route: '/newsroom' },
            { name: 'Investor Relations', route: '/investor' },
            { name: 'Sustainability', route: '/sustainability' },
            { name: 'Contact Us', route: '/contactus' },
        ],
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Navigation
    const handleActive = (route) => {
        // if (item.includes("About Swiggy")) {
        //     navigate("/about")
        // }
        // if (item.includes("Our Businesses")) {
        //     navigate("/bussiness")
        // }
        // if (item.includes("Delivering For Everyone")) {
        //     navigate("/delivering")
        // }
        // if (item.includes("Newsroom")) {
        //     navigate("/newsroom")
        // }
        // if (item.includes("Investor Relations")) {
        //     navigate("/investor")
        // }
        // if (item.includes("Contact Us")) {
        //     navigate("/contactus")
        // }
        // if (item.includes("Sustainability")) {
        //     navigate("/sustainability")
        // }
        navigate(route);
    };

    return (
        <div
            className={`sticky top-0 px-8 right-0 z-50 left-0 transition-shadow ${isScrolled ? 'shadow-md bg-white' : ''
                }`}
        >
            <header className='py-8 max-w-[1400px] mx-auto'>
                <nav>
                    <div className='flex items-center justify-between'>
                        <img
                            className='max-w-[150px] w-full'
                            src={navbar.image}
                            alt='Swiggy Logo'
                        />
                        <ul className='flex flex-wrap font-Gilroy py-[6px] [&>li]:mx-4 [&>li:first-child]:ml-0 [&>li:last-child]:mr-0'>
                            {navbar.links.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleActive(item.route)}
                                    className={`leading-[24px] relative flex flex-col relative font-semibold tracking-[-0.45px] py-[6px] cursor-pointer justify-center items-center text-[18px] ${location.pathname === item.route
                                            ? 'text-[#FF5200]'
                                            : 'text-[#333333]'
                                        }`}
                                >
                                    {item.name}
                                    {location.pathname === item.route && (
                                        <span className='w-[24px]  absolute bottom-0 rounded-[100px] bg-[#FF5200] h-1 mt-1'></span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default CorporateNavbar;
