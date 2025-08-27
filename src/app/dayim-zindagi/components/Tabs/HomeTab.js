"use client";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import HomeTabItem from "./HomeTabItem";
import { getAvailableResidencesByFloor } from "../../residences_old/Data";

export default function HomeTab() {
  const tabs = [
    {
      name: "Lower Ground Floor",
      image: "/images/dsa/tabs/lower_ground_floor2.jpeg",
      size: "202",
      freeUnits: `${getAvailableResidencesByFloor("Lower Ground Floor")} Shops/Offices Available`,
    },
    {
      name: "Ground Floor",
      image: "/images/dsa/tabs/ground_floor.png",
      size: "683",
      freeUnits: `${getAvailableResidencesByFloor("Ground Floor")} Shops/Offices Available`,
    },
    {
      name: "1st Floor",
      image: "/images/dsa/tabs/first_floor.png",
      size: "284",
      freeUnits: `${getAvailableResidencesByFloor("1st Floor")} Shops/Offices Available`,
    },
    {
      name: "2nd - 4th Floor",
      image: "/images/dsa/tabs/2nd-4th-Floor.png",
      size: "360",
      freeUnits: `${getAvailableResidencesByFloor("2nd Floor") +
        getAvailableResidencesByFloor("3rd Floor") +
        getAvailableResidencesByFloor("4th Floor")
        } Apartments Available`,
    },
    {
      name: "5th - 6th Floor",
      image: "/images/dsa/tabs/5th-6th-Floor.png",
      size: "360",
      freeUnits: `${getAvailableResidencesByFloor("5th Floor") +
        getAvailableResidencesByFloor("6th Floor")
        } Apartments Available`,
    },
  ];

  const [selectedFloor, setSelectedFloor] = useState(0);

  return (
    <div>
      {/* Mobile Dropdown */}
      <div className="md:hidden px-4 py-2">
        <select
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(Number(e.target.value))}
          className="w-full p-2 rounded border border-gray-300"
        >
          {tabs.map((tab, idx) => (
            <option key={tab.name} value={idx}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <Tab.Group
        selectedIndex={selectedFloor}
        onChange={setSelectedFloor}
      >
        <div className="hidden md:flex justify-center overflow-x-auto">
          <Tab.List className="flex gap-4 px-4 py-2">
            {tabs.map((tab) => (
              <Tab key={tab.name} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`flex-shrink-0 min-w-[140px] px-4 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${selected
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-second border-[#d6ad42] shadow-lg"
                        : "bg-gray-100 text-gray-700 border-black hover:bg-gray-200"
                      }`}
                  >
                    {tab.name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>


        {/* Tab Panels */}
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.name}>
              <HomeTabItem
                image={tab.image}
                size={tab.size}
                availableUnits="#"
                freeUnits={tab.freeUnits}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
