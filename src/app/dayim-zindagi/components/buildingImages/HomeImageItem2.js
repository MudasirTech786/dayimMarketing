"use client";

import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomeImageItem2 = () => {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);

  // state for hover tracking
  const [hovered, setHovered] = React.useState(null);

  // loading & error placeholders
  if (isLoading) {
    return <h2 className="text-center p-10">Loading...</h2>;
  }
  if (error) {
    return <h2 className="text-center p-10 text-red-500">Failed to load</h2>;
  }

  const residences = data?.filter((item) => item.name === "DSA") || [];

  function getAvailableResidencesByFloor(floor) {
    return residences.filter(
      (item) => item.floor === floor && item.sold === "No"
    ).length;
  }

  const lowerGroundFloorAvailable = getAvailableResidencesByFloor("Lower Ground");
  const groundFloorAvailable = getAvailableResidencesByFloor("Ground");
  const firstFloorAvailable = getAvailableResidencesByFloor("1st");
  const secondFloorAvailable = getAvailableResidencesByFloor("2nd");
  const thirdFloorAvailable = getAvailableResidencesByFloor("3rd");
  const fourthFloorAvailable = getAvailableResidencesByFloor("4th");
  const fifthFloorAvailable = getAvailableResidencesByFloor("5th");
  const sixthFloorAvailable = getAvailableResidencesByFloor("6th");

  return (
    <div className="relative inline-block">
      {/* Background image */}
      <img
        src="/images/dsa/building_bg5.png"
        alt="Building Floors"
        className="rounded-3xl"
      />

      {/* Transparent clickable areas */}
      <div
        className="absolute left-[32%] top-[16%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("sixth")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[25%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("fifth")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[35%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("fourth")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[45%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("third")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[55%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("second")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[65%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("first")}
        onMouseLeave={() => setHovered(null)}
      />
      <div
        className="absolute left-[32%] top-[75%] w-[35%] h-[6%] cursor-pointer"
        onMouseEnter={() => setHovered("ground")}
        onMouseLeave={() => setHovered(null)}
      />

      {/* Highlight labels */}
      {hovered === "sixth" && (
        <div className="absolute top-[16%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {sixthFloorAvailable}
        </div>
      )}
      {hovered === "fifth" && (
        <div className="absolute top-[25%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {fifthFloorAvailable}
        </div>
      )}
      {hovered === "fourth" && (
        <div className="absolute top-[35%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {fourthFloorAvailable}
        </div>
      )}
      {hovered === "third" && (
        <div className="absolute top-[45%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {thirdFloorAvailable}
        </div>
      )}
      {hovered === "second" && (
        <div className="absolute top-[55%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {secondFloorAvailable}
        </div>
      )}
      {hovered === "first" && (
        <div className="absolute top-[65%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {firstFloorAvailable}
        </div>
      )}
      {hovered === "ground" && (
        <div className="absolute top-[75%] right-[15%] bg-third w-[200px] h-[60px] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
          Available - {groundFloorAvailable}
        </div>
      )}
    </div>
  );
};

export default HomeImageItem2;
