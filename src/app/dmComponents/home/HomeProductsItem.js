import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomeProductsItem = ({ houseImg, type }) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-second font-bold text-lg">{type}</h4>
      <Link href={"/dayim-signature-apartments/residences"}>
        <Image
          src={houseImg}
          alt=""
          width={500}
          height={350}
          className="h-[350px] rounded-md object-cover w-full"
        />
      </Link>
    </div>
  );
};

export default HomeProductsItem;
