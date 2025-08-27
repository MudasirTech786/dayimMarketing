"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import HomeTabItem from "./HomeTabItem";
import { getAvailableResidencesByFloor } from "../../residences_old/Data";

export default function HomeTab() {
  const lowerGroundFloorAvailable =
    getAvailableResidencesByFloor("Lower Ground Floor");
  const groundFloorAvailable = getAvailableResidencesByFloor("Ground Floor");
  const firstFloorAvailable = getAvailableResidencesByFloor("1st Floor");
  const secondFloorAvailable = getAvailableResidencesByFloor("2nd Floor");
  const thirdFloorAvailable = getAvailableResidencesByFloor("3rd Floor");
  const fourthFloorAvailable = getAvailableResidencesByFloor("4th Floor");
  const fifthFloorAvailable = getAvailableResidencesByFloor("5th Floor");
  const sixthFloorAvailable = getAvailableResidencesByFloor("6th Floor");
  return (
    <Tab.Group>
      <Tab.List className="text-center text-xl px-10">
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[220px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              Lower Ground Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              Ground Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              1st Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              2nd - 4th Floor
            </button>
          )}
        </Tab>
        <Tab as={Fragment} className="outline-none h-full mt-2 w-[150px] pb-5 ">
          {({ selected }) => (
            <button
              className={`
                border-b-2 ${
                  selected
                    ? "text-second  border-second "
                    : "bg-white text-black border-gray"
                }
              `}
            >
              5th - 6th Floor
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/lower_ground_floor2.jpeg"
            size="202"
            availableUnits="#"
            freeUnits={`${lowerGroundFloorAvailable} Shops/Offices Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/ground_floor.png"
            size="683"
            availableUnits="#"
            freeUnits={`${groundFloorAvailable} Shops/Offices Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/first_floor.png"
            size="284"
            availableUnits="#"
            freeUnits={`${firstFloorAvailable} Shops/Offices Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/2nd-4th-Floor.png"
            size="360"
            availableUnits="#"
            freeUnits={`${
              secondFloorAvailable + thirdFloorAvailable + fourthFloorAvailable
            } Apartments Available`}
          />
        </Tab.Panel>
        <Tab.Panel>
          <HomeTabItem
            image="/images/dsa/tabs/5th-6th-Floor.png"
            size="360"
            availableUnits="#"
            freeUnits={`${
              fifthFloorAvailable + sixthFloorAvailable
            } Apartments Available`}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
