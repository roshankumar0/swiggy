import React, { useEffect, useState } from 'react'

const BestRestautent = () => {
    const [originalArray] = useState([1, 2, 3, 4, 2, 2, 4, 5, 3, 2, 6, 2])
    const [unique, setUnique] = useState([])
    const removeDublicates = () => {
        const temp = [];
        for (let i = 0; i < originalArray.length; i++) {
            if (!temp.includes(originalArray[i])) {
                temp.push(originalArray[i])
            }
        }
        setUnique(temp)
    }
    useEffect(() => { removeDublicates() }, [])
    console.log(unique)
    return (
        <div>
            <h2>Discover best restaurants on Dineout</h2>
            <div>
                <div className='flex items-end h-[200px] relative'>
                    <img className='h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/4/19/c644ea0f-a7f3-4490-98c7-62e078d0fae0_20240419T103038506.jpg" alt="" />
                    <span className='absolute'>Tashi</span>
                </div>
            </div>
        </div>
    )
}

export default BestRestautent
