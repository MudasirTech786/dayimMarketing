"use client";

import React, { useEffect, useState } from "react";
import { getAvailableResidencesByFloor } from "../../residences/Data";
import useSWR from "swr";
import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomeImageItemDL = () => {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);
  if (error) {
    return <h2>failed to load</h2>;
  }

  const residences = data?.filter((item) => item.name === "Dayim Living") || [];

  function getAvailableResidencesByFloor(floor) {
    return residences.filter(
      (item) => item.floor === floor && item.sold == "No"
    ).length;
  }

  const firstFloorAvailable = residences.filter(
    (item) => item.floor === "Ground" && item.sold == "No"
  ).length;
  // const secondFloorAvailable = getAvailableResidencesByFloor("2nd");
  // const thirdFloorAvailable = getAvailableResidencesByFloor("3rd");
  // const fourthFloorAvailable = getAvailableResidencesByFloor("4th");
  const fifthFloorAvailable = residences.filter(
    (item) => item.floor !== "Ground" && item.sold == "No"
  ).length;

  const handleMouseOver = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    highlightArea.classList.remove("hidden");
    highlightArea.classList.add("flex");
  };

  const handleMouseOut = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);

    highlightArea.classList.add("hidden");
    highlightArea.classList.remove("flex");
  };

  return (
    <div className="relative">
      <img
        src="/images/dayim_living/img3-imageItem.jpg"
        alt="Your Image"
        useMap="#your-image-map"
        className=" "
      />

      <map name="your-image-map">
        <area
          target=""
          alt=""
          title=""
          coords="215,58,440,630"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area5")}
          onMouseLeave={() => handleMouseOut("area5")}
        />

        <area
          target=""
          alt=""
          title=""
          coords="205,637,444,736"
          shape="rect"
          href="/dayim-living/residences"
          onMouseEnter={() => handleMouseOver("area1")}
          onMouseLeave={() => handleMouseOut("area1")}
        />
      </map>
      <div className="hidden lg:block">
        <div
          id="highlight-area5"
          className="absolute hidden  bg-third w-[200px] h-[60px] top-[45%] right-[0px] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {fifthFloorAvailable}
        </div>
        <div
          id="highlight-area1"
          className="absolute hidden bg-third w-[200px] h-[60px] top-[85%] right-[0px] rounded-2xl  items-center justify-center text-white font-bold text-xl "
        >
          Available - {firstFloorAvailable}
        </div>
      </div>

      {/* Add more highlight divs for additional areas */}
    </div>
  );
};

export default HomeImageItemDL;
