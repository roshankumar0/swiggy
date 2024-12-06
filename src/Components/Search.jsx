import React from 'react'

const Search = () => {
    return (
        <div>
            <h1>  Order food & groceries. Discover best restaurants. Swiggy it!</h1>
            <div className='flex justify-center mt-[24px]'>
                <div className="flex bg-white rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]">
                    <input type="text" placeholder="Enter your delivery location" />
                </div>
                <div className='pl-4 w-[500px]'>
                    <div>
                        Search for restaurant, item or more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
