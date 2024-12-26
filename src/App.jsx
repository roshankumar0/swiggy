import { useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BestFoodOptions from './Components/BestFoodOptions';
import Header from './Components/Header';
import Search from './Components/Search';
import apiData from '../src/data.json';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import OffersCard from './Components/OffersCard';
import BestRestautent from './Components/BestRestautent';
import SwiggApp from './Components/SwiggApp';
import Delivery from './Components/Delivery';
import Footer from './Components/Footer';
import MyAccount from './MyAccount';
import Login from './Login';
import SearchPage from './pages/Search';
import Corporate from './pages/corporat'
import Bussiness from './pages/bussiness';
import Delivering from './pages/Delivering'
function App() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);
  // Load data from API once and set it
  useEffect(() => {
    setData(apiData);
  }, []);
  const { bestFoodOptions } = data;

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
  // useEffect(() => {
  //   navigate("/")
  // }, [])
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="relative bg-[#ff5200]">
              <Header />
              <Search />
              <OffersCard />
            </div>
            <div className="w-[80%] m-auto bg-white">
              <div className="mt-[120px]">
                <div className="flex justify-between pb-8">
                  <header>
                    <h2 className="text-[24px] font-semibold font-Gilroy text-[#02060ceb] tracking-[0.6px] leading-6">
                      Order our best food options
                    </h2>
                  </header>
                  <div className="flex gap-3">
                    <div onClick={handleLeft}>
                      <div className="rounded-full h-[34px] w-[34px] bg-[#02060c26] pt-2 pr-2 pb-1 pl-2">
                        <IoIosArrowRoundBack />
                      </div>
                    </div>
                    <div onClick={handleRight} className="rounded-full h-[34px] w-[34px] bg-[#02060c26] pt-2 pr-2 pb-1 pl-2">
                      <IoIosArrowRoundForward />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto duration-300" style={{ transform: `translateX(-${slide * 100})%` }}>
                  {/* Top Row */}
                  <div className="flex">
                    {topRow.map((data, index) => {
                      return <BestFoodOptions key={index} data={data} slide={slide} />;
                    })}
                  </div>

                  {/* Bottom Row (Scrollable) */}
                  <div className="flex">
                    {bottomRow.map((data, index) => {
                      return <BestFoodOptions key={index} data={data} slide={slide} />;
                    })}
                  </div>
                </div>
              </div>
              <BestRestautent />
            </div>
            <SwiggApp />
            <Delivery />
            <Footer />
          </div>
        }
      />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/corporate' element={<Corporate />} />
      <Route path='/bussiness' element={<Bussiness />} />
      <Route path='/delivering' element={<Delivering />} />
    </Routes>
  );
}

export default App;
