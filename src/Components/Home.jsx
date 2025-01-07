import Header from '../Components/Header';
import Delivery from './Delivery';
import Footer from './Footer';
import OffersCard from './OffersCard';
import Search from './Search';
import Options from '../Components/Options';
import BestRestautent from './BestRestautent';
import SwiggyApp from './SwiggyApp';

function Home() {
  return (
    <div className='flex flex-col '>
      {[
        <Header key="1" />,
        <Search key="2" />,
        <OffersCard key="3" />,
        <BestRestautent key="4" />,
        <Options key="" />,
        <SwiggyApp key="6" />,
        <Delivery key="7" />,
        <Delivery key="8" />,
        <Footer key="9" />
      ].map((Component, index) => (
        <div
          key={index}
          className={`${[0, 1, 2, 8].includes(index)
            ? ''
            : index === 6 || index === 7 ? index === 6
              ? 'w-[70%] mx-auto mt-[80px]'
              : 'w-[70%] mx-auto mt-[62px] mb-[80px]'
              : index === 5
                ? 'mt-[120px]'
                : 'w-[80%] mx-auto mt-[120px]'
            }`}
        >
          {Component}
        </div>
      ))}
    </div>
  );
}

export default Home;
