import Link from "next/link";
import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

function HomeTabItem({ image, size, availableUnits, freeUnits }) {
  return (
    <div
      className="grid grid-cols-1 items-center justify-center gap-20 py-10 
                 md:grid-cols-2 lg:pl-52"
    >
      <div className="h-[300px] w-full md:h-[500px]">
        <Zoom>
          <Image
            src={image}
            alt={`Apartment ${size} Sq.Ft.`}
            width={800}
            height={600}
            className="h-full w-full object-contain"
          />
        </Zoom>
      </div>

      <div className="flex flex-col w-full items-center md:items-start">
        <span className="text-gray text-xl italic ml-[-20px]">From</span>
        <span
          className="text-second font-bold text-4xl
                     md:text-6xl lg:text-8xl"
        >
          {size} <sup className="text-2xl">Sq.Ft.</sup>
        </span>
        <span className="my-5 font-bold text-xl">Available Units</span>
        <Link
          href="/dayim-signature-apartments/residences"
          className="w-full hover:scale-110 transition"
        >
          <span className="text-gray ml-[10%]">{freeUnits}</span>
        </Link>
      </div>
    </div>
  );
}

export default HomeTabItem;
