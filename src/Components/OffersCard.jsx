import React from 'react';

const OffersCard = () => {
  const offers = [
    {
      companyImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
    },
    {
      companyImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
    },
    {
      companyImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
    },
    {
      companyImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
    },
  ];
     
  return (
    <div className='flex justify-center items-center pb-5 px-2 bg-[#ff5200]'>
      <div className='flex justify-center overflow-x-scroll max-w-[80%] w-full min-h-[320px] flex-nowrap'>
        {offers.map((image, index) => {
          return (
            <div
              key={index}
              className='cursor-pointer'
            >
              <img
                className='w-full h-full object-contain'
                src={image.companyImage}
                alt={`offer-${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OffersCard;
