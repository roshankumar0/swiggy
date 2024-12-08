import { useEffect, useState, useMemo } from 'react';
import './App.css';
import BestFoodOptions from './Components/BestFoodOptions';
import Header from './Components/Header';
import Search from './Components/Search';
import apiData from '../src/data.json';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import OffersCard from './Components/OffersCard';
import BestRestautent from './Components/BestRestautent';


function App() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0)
  // Load data from API once and set it
  useEffect(() => {
    setData(apiData);
  }, []);
  const { bestFoodOptions } = data;


  const { topRow, bottomRow } = useMemo(() => {
    if (!bestFoodOptions) return { topRow: [], bottomRow: [] }
    const midIndex = Math.ceil(bestFoodOptions.length / 2)
    return {
      topRow: bestFoodOptions.slice(0, midIndex),
      bottomRow: bestFoodOptions.slice(midIndex)
    }
  })
  const handleLeft = () => {
    if (slide === 0) return false
    setSlide(slide - 3)
  }
  const handleRight = () => {
    if (bestFoodOptions.length - 6 == slide) return false
    setSlide(slide + 3)
    console.log(slide + 3)
  }
  return (
    <>
      <div className="bg-[#ff5200]">
        <div className="max-w-[1200px] m-auto">
          <Header />
          <Search />
          <OffersCard />
          <div className='bg-white'>
            <div className='flex justify-between'>
              <div>
                <h2>Order our best food options</h2>
              </div>
              <div className='flex gap-3'>
                <div onClick={handleLeft}>
                  <div onClick={handleLeft} className='rounded-full h-[34px] w-[34px]  bg-[#02060c26] pt-2 pr-2 pb-1 pl-2 '>
                    <IoIosArrowRoundBack />
                  </div>

                </div>
                <div onClick={handleRight} className='rounded-full h-[34px] w-[34px]  bg-[#02060c26] pt-2 pr-2 pb-1 pl-2 '>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>
            <div className='overflow-x-auto duration-300'
              style={{
                transform: `translateX(-${slide * 100})%`
              }}
            >
              {/* Top Row */}
              <div className="flex ">
                {topRow.map((data) => {
                  // Assuming `data.id` is a unique identifier for each item
                  return <BestFoodOptions key={data.id} data={data} slide={slide} />;
                })}
              </div>

              {/* Bottom Row (Scrollable) */}
              <div className="flex ">
                {bottomRow.map((data) => {
                  // Assuming `data.id` is a unique identifier for each item
                  return <BestFoodOptions key={data.id} data={data} slide={slide} />;
                })}
              </div>
            </div>
          </div>
          <BestRestautent />
        </div>
      </div>
    </>
  );
}

export default App;
