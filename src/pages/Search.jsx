import React from 'react'
import Navbar from '../Components/Navbar';
import { CiSearch } from "react-icons/ci";


const Search = () => {
  const imageUrls = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce"
  ];
  return (
    <div className=''>
      <Navbar />
      <div className='font-proxima-nova  m-auto  w-[860px] pt-12 pb-2 '>
        <div className='border border-[#282c3f4d] rounded-[3px] mb-2'>
          <form action="#">
            <div className='border flex items-center h-[48px] pr-[13px]'>
              <div className='flex-1 pl-3'>
                <input className='w-full h-full outline-none text-[16.1px] text-[#282c3f] leading-6  placeholder:text-[#282c3f]  placeholder:font-ProximaNova font-medium' type="text" name="" id="" placeholder='Search for restaurants and food' />
              </div>
              <div><CiSearch size={18} color='#686b78' /></div>
            </div>
          </form>
        </div>
      </div>
      <div className='min-h-calc(100vh-7px) m-auto  w-[860px] overflow-scroll mt-2 '>
        <h2 className='pt-[28px] trackin-[-.3px] font-ProximaNovaExtraBold pr-0 pb-0 pl-4  text-[20.02px]'>Popular Cuisines</h2>
        <div className='flex w-[71.5px] h-[101.6px]'>
          {imageUrls.map((image) => {
            return <img className='mr-[10px] cursor-pointer' key={image} src={image} alt={image} />
          })}
        </div>
      </div>

    </div>
  )
}

export default Search
