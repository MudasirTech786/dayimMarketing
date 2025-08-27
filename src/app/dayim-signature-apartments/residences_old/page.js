import React from "react";
import NavBar from "../components/Navbar";
import Residences_item from "./Residences_item";
import MainFooter from "../components/footer/MainFooter";
import {
  getAllResidences,
  getResidenceByType,
  getResidenceByFloor,
} from "./Data";

function Residences() {
  // const residences = getAllResidences();
  // const apartments = getResidenceByType("Apartment");
  // const offices = getResidenceByType("Office");
  // const shops = getResidenceByType("Shop");

  const lowerGroundFloor = getResidenceByFloor("Lower Ground Floor");
  const groundFloor = getResidenceByFloor("Ground Floor");
  const firstFloor = getResidenceByFloor("1st Floor");
  const secondFloor = getResidenceByFloor("2nd Floor");
  const thirdFloor = getResidenceByFloor("3rd Floor");
  const fourthFloor = getResidenceByFloor("4th Floor");
  const fifthFloor = getResidenceByFloor("5th Floor");
  const sixthFloor = getResidenceByFloor("6th Floor");

  return (
    <div className="mt-[120px]">
      <NavBar videoBg={false} />

      <div
        className="py-5 px-10
                       lg:px-32"
      >
        <h3 className="font-bold text-second text-4xl mt-10" id="shops">
          Lower Ground Floor
        </h3>
        <div
          className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
        >
          {lowerGroundFloor.map((i) => (
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
          Ground Floor
        </h3>
        <div
          className="py-5 grid grid-cols-1 gap-5
                        md:grid-cols-2 lg:grid-cols-4 "
        >
          {groundFloor.map((i) => (
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

        <h3 className="font-bold text-second text-4xl mt-10" id="shops">
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
        </div>
      </div>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Residences;
