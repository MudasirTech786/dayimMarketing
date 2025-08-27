"use client";

import React from "react";
import Image from "next/image";

const HomeImageItem = () => {
  const handleMouseOver = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    if (highlightArea) {
      highlightArea.classList.remove("hidden");
      highlightArea.classList.add("flex");
    }
  };

  const handleMouseOut = (id) => {
    const highlightArea = document.getElementById(`highlight-${id}`);
    if (highlightArea) {
      highlightArea.classList.add("hidden");
      highlightArea.classList.remove("flex");
    }
  };

  return (
    <div className="relative">
      {/* ✅ Optimized Image with next/image */}
      <Image
        src="/images/dsa/building_bg3.jpg"
        alt="Building Plan"
        width={1200}
        height={900}
        className="w-full h-auto"
        useMap="#your-image-map"
      />

      {/* Image map */}
      <map name="your-image-map">
        <area
          shape="rect"
          coords="657,145,997,222"
          href="/dayim-signature-apartments/residences#apartments"
          onMouseEnter={() => handleMouseOver("area1")}
          onMouseLeave={() => handleMouseOut("area1")}
        />
        <area
          shape="rect"
          coords="658,227,997,301"
          href="/dayim-signature-apartments/residences#apartments"
          onMouseEnter={() => handleMouseOver("area2")}
          onMouseLeave={() => handleMouseOut("area2")}
        />
        <area
          shape="rect"
          coords="661,309,997,388"
          href="/dayim-signature-apartments/residences#apartments"
          onMouseEnter={() => handleMouseOver("area3")}
          onMouseLeave={() => handleMouseOut("area3")}
        />
        <area
          shape="rect"
          coords="662,397,999,476"
          href="/dayim-signature-apartments/residences#apartments"
          onMouseEnter={() => handleMouseOver("area4")}
          onMouseLeave={() => handleMouseOut("area4")}
        />
        <area
          shape="rect"
          coords="661,483,999,564"
          href="/dayim-signature-apartments/residences#apartments"
          onMouseEnter={() => handleMouseOver("area5")}
          onMouseLeave={() => handleMouseOut("area5")}
        />
        <area
          shape="rect"
          coords="665,572,997,643"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area6")}
          onMouseLeave={() => handleMouseOut("area6")}
        />
        <area
          shape="rect"
          coords="652,650,999,709"
          href="/dayim-signature-apartments/residences"
          onMouseEnter={() => handleMouseOver("area7")}
          onMouseLeave={() => handleMouseOut("area7")}
        />
      </map>

      {/* ✅ Highlight boxes */}
      <div className="hidden lg:block">
        <div
          id="highlight-area1"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[150px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 4
        </div>
        <div
          id="highlight-area2"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[230px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 4
        </div>
        <div
          id="highlight-area3"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[310px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 3
        </div>
        <div
          id="highlight-area4"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[390px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 3
        </div>
        <div
          id="highlight-area5"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[480px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 0
        </div>
        <div
          id="highlight-area6"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[560px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 2
        </div>
        <div
          id="highlight-area7"
          className="absolute hidden bg-third w-[200px] h-[70px] top-[640px] right-[300px] rounded-2xl items-center justify-center text-white font-bold text-xl"
        >
          Available - 1
        </div>
      </div>
    </div>
  );
};

export default HomeImageItem;
