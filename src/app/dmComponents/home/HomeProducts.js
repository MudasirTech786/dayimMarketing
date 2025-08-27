import React from "react";
import HomeProductsItem from "./HomeProductsItem";

const HomeProducts = () => {
  return (
    <div
      className="p-[20px] w-full  text-center space-y-7
                        lg:px-[200px]"
    >
      <h2 className="text-second font-bold text-4xl hover:text-black">
        Our Featured Exclusives​
      </h2>
      <p className="text-gray text-lg">
        Searching for your ideal home or commercial property in Lahore should
        not be a daunting experience. That is why we are here to assist you in
        finding the perfect property at the right price.
      </p>

      <div
        className="w-full grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-3  "
      >
        {/* <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house1.jpeg" /> */}
        <HomeProductsItem
          houseImg="/images/dsa/vr/studio/2.png"
          type="Studio Apartments"
        />
        <HomeProductsItem
          houseImg="/images/dsa/vr/one_bed/5.jpg"
          type="1 Bed Apartments"
        />
        <HomeProductsItem
          houseImg="/images/dsa/vr/two_bed/02.jpg"
          type="2 Bed Apartments"
        />
        {/* <HomeProductsItem houseImg="/images/dayimMarketing/home/houses/house5.jpeg" /> */}
      </div>
    </div>
  );
};

export default HomeProducts;
