import React from 'react';

const BestFoodOptions = ({ data, slide }) => {
  return (
    <div
      className="h-[180px] w-[184px] cursor-pointer shrink-0 flex-grow-0"
      style={{
        transform: `translateX(-${slide * 100}%)`, // Apply the sliding effect here
      }}
    >
      <img className="w-full h-full object-cover" src={data?.image} alt="Best Food Option" />
    </div>
  );
};

export default BestFoodOptions;
