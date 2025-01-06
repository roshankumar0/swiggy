import React, { useEffect, useMemo, useState } from 'react'
import Orders from './Orders';
import BestFoodOptions from './BestFoodOptions';
import BestRestautent from './BestRestautent';
import apiData from '../data.json';
const Options = () => {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);
    const { bestFoodOptions } = data;
    // Load data from API once and set it
    useEffect(() => {
        setData(apiData);
    }, []);
    const { topRow, bottomRow } = useMemo(() => {
        if (!bestFoodOptions) return { topRow: [], bottomRow: [] };
        const midIndex = Math.ceil(bestFoodOptions.length / 2);
        return {
            topRow: bestFoodOptions.slice(0, midIndex),
            bottomRow: bestFoodOptions.slice(midIndex),
        };
    }, [bestFoodOptions]);

    const handleLeft = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);
    };
    const handleRight = () => {
        if (bestFoodOptions.length - 6 === slide) return false;
        setSlide(slide + 3);
    };
    return (
        <div className="">
            <div className="mt-[120px]">
                <Orders handleRight={handleRight} handleLeft={handleLeft} />
                <div className="overflow-x-auto duration-300" style={{ transform: `translateX(-${slide * 100})%` }}>
                    {/* Top Row */}
                    <div className="flex">
                        {topRow.map((data, index) => {
                            return <BestFoodOptions key={index} data={data} slide={slide} />;
                        })}
                    </div>
                    <div className="flex">
                        {bottomRow.map((data, index) => {
                            return <BestFoodOptions key={index} data={data} slide={slide} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
