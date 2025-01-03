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
import Newsroom from './Components/Newsroom';
import Investors from './Components/Investors';
import ContactUs from './Components/ContactUs';
import Sustainability from './Components/Sustainability';
import Orders from './Components/Orders';
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
      <Route path='/newsroom' element={<Newsroom />} />
      <Route path='/investor' element={<Investors />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/sustainability' element={<Sustainability />} />

    </Routes>
  );
}

export default App;
