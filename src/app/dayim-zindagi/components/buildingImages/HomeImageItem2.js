"use client";

import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";
import React from "react";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomeImageItem2 = () => {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);
  const [hovered, setHovered] = React.useState(null);

  if (isLoading) return <h2 className="text-center p-10">Loading...</h2>;
  if (error) return <h2 className="text-center p-10 text-red-500">Failed to load</h2>;

  const residences = data?.filter((item) => item.name === "DSA") || [];

  function getAvailableResidencesByFloor(floor) {
    return residences.filter(
      (item) => item.floor === floor && item.sold === "No"
    ).length;
  }

  // ✅ Define floors dynamically (easier to manage)
  const floors = [
    { key: "sixth", label: "6th", top: "16%" },
    { key: "fifth", label: "5th", top: "25%" },
    { key: "fourth", label: "4th", top: "35%" },
    { key: "third", label: "3rd", top: "45%" },
    { key: "second", label: "2nd", top: "55%" },
    { key: "first", label: "1st", top: "65%" },
    { key: "ground", label: "Ground", top: "75%" },
    { key: "lowerGround", label: "Lower Ground", top: "85%" }, // extra
  ];

  return (
    <div className="relative inline-block">
      {/* ✅ Optimized Next.js Image */}
      <Image
        src="/images/dsa/building_bg5.png"
        alt="Building Floors"
        width={800}
        height={1200}
        className="rounded-3xl w-full h-auto"
        priority
      />

      {/* Transparent clickable areas */}
      {floors.map((floor) => (
        <div
          key={floor.key}
          className="absolute left-[32%] w-[35%] h-[6%] cursor-pointer"
          style={{ top: floor.top }}
          onMouseEnter={() => setHovered(floor.key)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}

      {/* Hover Highlight Labels */}
      {floors.map(
        (floor) =>
          hovered === floor.key && (
            <div
              key={`highlight-${floor.key}`}
              className="absolute right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl"
              style={{ top: floor.top }}
            >
              Available - {getAvailableResidencesByFloor(floor.label)}
            </div>
          )
      )}
    </div>
  );
};

export default HomeImageItem2;
