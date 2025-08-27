"use client";
import React from "react";
import NavBar from "../components/Navbar";
import Residences_item from "./Residences_item";
import MainFooter from "../components/footer/MainFooter";
import {
  getAllResidences,
  getResidenceByType,
  getResidenceByFloor,
} from "./Data";
import { GET_ALL_PROPERTIES_API } from "@/lib/apiEndPoints";
import useSWR from "swr";
import { DotLoader } from "react-spinners";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Residences() {
  const { data, error, isLoading } = useSWR(GET_ALL_PROPERTIES_API, fetcher);
  if (error) {
    return <h2>failed to load</h2>;
  }

  const residences = data?.filter((item) => item.name === "Dayim Living") || [];
  function getResidenceByFloor(floorName) {
    return residences?.filter((residence) => residence.floor === floorName);
  }

  const groundFloor = getResidenceByFloor("Ground");
  const firstFloor = getResidenceByFloor("1st");
  const secondFloor = getResidenceByFloor("2nd");
  const thirdFloor = getResidenceByFloor("3rd");
  const fourthFloor = getResidenceByFloor("4th");
  const fifthFloor = getResidenceByFloor("5th");

  return (
    <div className="mt-[120px]">
      <NavBar videoBg={false} />

      {isLoading ? (
        <div className="h-[300px] flex items-center justify-center">
          <DotLoader color="#f3ac27" />
        </div>
      ) : (
        <div
          className="py-5 px-10
                       lg:px-32"
        >
          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Ground Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {groundFloor?.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            First Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {firstFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Second Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {secondFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Third Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {thirdFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Fourth Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {fourthFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Fifth Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {fifthFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div>

          {/* <h3 className="font-bold text-second text-4xl mt-10" id="shops">
            Sixth Floor
          </h3>
          <div
            className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
          >
            {sixthFloor.map((i) => (
              <Residences_item
                key={i.id}
                id={i.id}
                sold={i.sold}
                title={i.title}
                number={i.number}
                type={i.type}
                size={i.size}
                image={i.image}
                floor={i.floor}
                purchased_by={i.purchased_by}
              />
            ))}
          </div> */}
        </div>
      )}

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Residences;
