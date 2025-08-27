import Link from "next/link";
import React from "react";

const HomeProductsItem = ({ houseImg, type }) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-second font-bold text-lg">{type}</h4>
      <Link href={"/dayim-signature-apartments/residences"}>
        <img
          src={houseImg}
          alt=""
          className="h-[350px]   rounded-md object-cover"
        />
      </Link>
    </div>
  );
};

export default HomeProductsItem;
