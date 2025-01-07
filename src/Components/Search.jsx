
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/search')
    }
    return (
        <div className='bg-[#ff5200] relative pt-16 pb-8 flex flex-col items-center'>
            <img className='h-[450px] w-[250px] absolute left-0 top-0 object-cover ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <div className="px-4 flex justify-center text-center " >
                <div className="font-Gilroy_Bold text-5xl text-[#fff] pl-3 font-bold w-[60%] tracking-[-0.3px] leading-[56px] ">
                    Order food &amp; groceries. Discover best restaurants. Swiggy it!
                </div>
            </div>

           <div className="w-full">
           <div className='flex justify-center mt-[24px]'>
                <div className="flex items-center h-[60px] bg-white rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 18 23"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                                fill="#FF5200"
                            />
                        </svg>
                    </div>
                        <input
                            className='font-Gilroy text-[16px]  placeholder:font-Gilroy placeholder:font-bold placeholder:leading-[24px] placeholder:tracking-[-0.3px] w-[208.8px] focus:outline-none'
                            type="text"
                            placeholder="Enter your delivery location"
                        />
                    <div>
                        <svg
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                            aria-label="rating-down-down-icon"
                            aria-hidden="false"
                            strokecolor="rgba(2, 6, 12, 0.92)"
                            fillcolor="rgba(2, 6, 12, 0.92)"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117"
                                fill="rgba(2, 6, 12, 0.92)"
                                fillOpacity="0.92"
                            />
                        </svg>

                    </div>
                </div>
               <div className="pl-4 w-[500px]">
               <div onClick={handleNavigate} className=' h-full  flex justify-between bg-white items-center rounded-[16px] px-[16px] gap-[10px] border-[1.5px] border-[#02060C26]'>
                    <span className='text-[18px] leading-[24px] tracking-[-0.3px] font-extralight text-[#02060c73] font-Gilroy'>Search for restaurant, item or more</span>
                    <div className="mb-2">
                        <CiSearch size={20} color="#02060c99" fontWeight={600} />
                    </div>
                </div>
               </div>
            </div>
           </div>
            <img className=' object-cover h-[450px] w-[250px] absolute right-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        </div>
    )
}

export default Search
