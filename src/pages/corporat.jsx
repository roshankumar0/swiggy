import React from 'react';
import CorporateNavbar from '../Components/CorporateNavbar';

const corporat = () => {
  const imageUrls = [
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp",
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1.webp",
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout.webp",
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/genie-1.webp",
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-sign.webp",
    "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/minis-1.webp"
  ];

  return (
    <div style={{
      backgroundImage: "url('https://www.swiggy.com/corporate/wp-content/uploads/2024/10/about-banner-image-scaled.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
    >
      <CorporateNavbar />
      <div className='max-w-[80%] m-auto text-center pt-[72px] pb-[80px]'>
        <h1 className='text-[40px] font-Gilroy font-black leading-[49.92px] tracking-[0.03px] text-[#02060C]'>ABOUT US</h1>
        <p className='text-[22px] font-Gilroy font-medium leading-[32px] tracking-[-0.35px] text-[#02060C73] mt-4 mb-14'>Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-[60%] m-auto text-center mt-[150px]">
          {imageUrls.map((image, index) => (
            <div className={`${index == 1 || index == 4 ? "mt-[-100px]" : ""}`} key={index}>
              <img className='h-[196px] w-auto' src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default corporat;
