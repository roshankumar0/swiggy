import { useState } from 'react';

const AccountSettings = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const accountList = [
        { name: "Orders" },
        { name: "Swiggy One" },
        { name: "Favourites" },
        { name: "Payments" },
        { name: "Addresses" },
        { name: "Settings" }
    ];

    const dynamicContent = [
        {
            title: "No Orders",
            description: "You haven't placed any order yet.",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw"
        },
        {
            title: "Swiggy One",
            description: `Get free delivery and extra discounts all across Swiggy. Your Swiggy One benefits can be availed only on the Swiggy App.`,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv",
            image2: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl",
            image3: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super"

        },
        {
            title: "Favourites",
            description: "Your favourite items will appear here."
        },
        {
            title: "Payments",
            description: null
        },
        {
            title: "Addresses",
            description: "Your saved addresses will appear here."
        },
        {
            title: "Settings",
            description: "Manage your account settings here."
        }
    ];
    const getDynamicContent = () => {
        const content = dynamicContent[selectedIndex]
        return (
            <div>
                <div className={`${content.image && content.title === 'No Orders' ? "m-auto text-center w-[362px]" : "flex justify-between "}`}>
                    {content.image && content.title === 'No Orders' && <img className='' src={content.image} alt={content.title} />}
                    <div className=''>
                        <h2 className={`text-[#282c3f]   text-[21px] font-proxima-nova ${content.title === 'No Orders' ? "text-[#535665] font-medium font-proxima-nova mt-8" : "font-semibold"}`}>{content.title}</h2>
                        <div className={` font-light font-proxima-nova ${content.title === 'No Orders' ? "text-[14px] text-[#7e808c] mt-2" : "text-[20px] text-[#686b78] my-5  leading-[42px] "}`}>{content.description}</div>
                        {content.image && content.image2 && <div className='flex gap-5'>{(<><img src={content.image} /> <img src={content.image2} /></>)}</div>}
                    </div>
                    {content.image3 && <img src={content?.image3} className='w-[360px] h-[330px]' />}
                </div>
            </div>
        )
    }

    const displayUserSettings = () => {
        return accountList.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
                <li
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`py-[25px] px-5 ml-5 cursor-pointer font-proxima-nova ${isSelected ? "bg-[#fff] font-semibold text-[#282c3f]" : " hover:font-bold text-[#282c3f] font-semibold"}`}>
                    {item.name}
                </li>
            );
        });
    };

    return (
        <div className='bg-[#fff]'>
            <div className='flex'>
                <div className='min-w-[260px] bg-[#edf1f7]'>
                    <ul className='py-5'>
                        {displayUserSettings()}
                    </ul>
                </div>
                <div className='flex-1 pt-[37px] pl-[50px]'>
                    <div className='bg-[#fff] pt-[37px] min-h-[80vh] relative'>
                        <div>
                            {getDynamicContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
