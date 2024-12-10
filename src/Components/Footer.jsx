import React from 'react';
import footerData from '../data.json';

// Function to render the items based on their structure
const renderItems = (items) => {
  return items.map((item, i) => {
    // Check for nested items (items2 or items3)
    if (item?.items2) {
      return (
        <div key={i}>
          <ul>
            {item.items2.map((subItem, j) => (
              <li key={j} className='font-extralight text-[16px] font-Gilroy leading-[20px] cursor-pointer py-4 text-[#02060ceb]'>
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (item?.items3) {
      return (
        <div key={i}>
          <h5 className='font-Gilroy text-[16px] leading-[19px] text-[#02060ceb]'>Legal:</h5>
          <ul>
            {item.items3.map((subItem, j) => (
              <li key={j} className='font-extralight text-[16px] font-Gilroy leading-[20px] cursor-pointer py-4 text-[#02060ceb]'>
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // Default item rendering
    return (
      <li key={i} className='font-extralight text-[16px] font-Gilroy cursor-pointer leading-[20px] my-4 text-[#02060c99]'>
        {item}
      </li>
    );
  });
};

const Footer = () => {
  return (
    <section className='bg-[#f0f0f5]'>
      <footer className='flex gap-[5%] pt-12 pr-[20%] pb-[48px] pl-[15%]'>
        <section className=''>
          <img
            className='mb-2'
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
          />
          <p className='font-Gilroy text-[#02060c99] text-[16px] tracing-[-0.3px] leading-[19px]'>
            © 2024 Swiggy Limited
          </p>
        </section>
        {footerData?.footerData?.map((data, index) => (
          <section key={index}>
            <h4 className='flex font-gilroy-bold text-[18px] leading-[19px] tracking-[0.3px] text-[#02060ceb] font-bold'>
              {data?.title}
            </h4>
            <ul>
              {/* Render items (items, items2, or items3) for each section */}
              {renderItems(data?.items)}
              {data?.title2 && data?.items2 && (
                <>
                  <h5 className='flex font-gilroy-bold text-[18px] leading-[19px] tracking-[0.3px] text-[#02060ceb] font-bold'>
                    {data.title2}
                  </h5>
                  <ul>
                    <li className={`${data.title2 === 'Social Links' ? "flex gap-4" : ""}`}>
                      {renderItems(data?.items2)}
                    </li>
                  </ul>
                </>
              )}

              {/* Handle additional title3 and items3 (if they exist) */}
                {/* {data?.title3 && data?.items3 && (
                    <>
                    <h5 className='font-Gilroy text-[16px] leading-[19px] text-[#02060ceb]'>
                        {data.title3}
                    </h5>
                    {renderItems(data?.items3)}
                    </>
                )} */}
            </ul>
          </section>
        ))}
      </footer>

      <div className='flex flex-col gap-8 pb-8 items-center'>
        <div className='h-[1px] w-[90%] m-auto bg-[#02060c73]'></div>
        <footer className='flex gap-8 items-center justify-center'>
          <header className='text-[#02060cbf] font-Gilroy text-[24px] font-semibold leading-6 tracking-[-0.6px]'>
            For better experience, download the Swiggy app now
          </header>
          <div className='flex gap-6'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store" />
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Google Play" />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
