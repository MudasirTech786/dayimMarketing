"use client";

import { motion } from "framer-motion";

import NavBar from "../components/Navbar";
import Link from "next/link";

import MainFooter from "../components/footer/MainFooter";
import AboutSlider1 from "../components/sliders/about/AboutSlider1";
import AboutSlider2 from "../components/sliders/about/AboutSlider2";
import AboutSlider3 from "../components/sliders/about/AboutSlider3";

function Terms() {
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      <NavBar videoBg={false} />

      <section className="mt-[200px] w-full flex items-center justify-center">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className="text-second text-3xl lg:text-5xl font-bold mb-5">
            Terms & Conditions
          </h2>
          <ul className="list-decimal ml-[30px] text-lg flex flex-col gap-5">
            <li>
              Allocation of any Unit in the project is provisional and will be
              confirmed only after receiving the down payment. All payments
              shall be made in favor of Developers via Online, Cash, or any
              other sources provided by the Developer.
            </li>
            <li>
              The possession and ownership of the Unit shall remain with
              Developer until full payment, including service charges for
              utilities and documentation charges, is made by the Applicant (s).
            </li>
            <li>
              Apart from the Units price, the Applicant (s) shall also pay
              connection and meter charges of water, gas, sewerage system, and
              other utilities within 30 days on demand by Developer and, in no
              circumstances, will be refundable.
            </li>
            <li>
              After taking possession of the Unit, the Applicant(s) will pay
              monthly service charges for maintenance and administrative cost.
              The costs will be charged according to the total area of the Unit.
            </li>
            <li>
              If the Applicant wishes to transfer or sell their Unit, they made
              it according to SOPs as prescribed by the Developer, and Developer
              will charge a transfer fee according to the size of the Unit with
              only eligible for transfer provided that its installments and
              other dues are cleared until the date of transfer. Any transfer
              without the involvement of the Developer shall be considered void.
            </li>
            <li>
              In case any applicant(s) desires to get a refund of the amount or
              surrenders their unit for any reason, the overall amount deposited
              towards the Unit they have booked, the same will be refunded to
              them within three months. There will be no deduction made against
              the refund or surrender. The payment will be refunded through the
              same channel by which the applicant booked the unit.
            </li>
            <li>
              The installment payment shall be made according to the payment
              schedule provided by Developer. If the Applicant (s) fail to pay
              three consecutive installments, Developer reserves the right to
              cancel the booking. The deposited amount by the Applicant (s) will
              be refundable within three months in case of booking cancellation.
            </li>
            <li>
              In case of a change of mailing address, the Applicant (s) shall
              inform Developer in writing about the difference within 15 days.
              In case of recovery, default, or cancellation, the address
              mentioned in the application form shall be treated as the final
              address. The Developer shall send all addresses through registered
              post acknowledgment due to urgent mail service and renowned
              courier service. Non-availability reported by the above agencies
              of the Applicant (s) at the address given shall be deemed valid
              service of the notice/letter.
            </li>
            <li>
              The projects construction is supposed to be completed within 24
              months. These 24 months will be reckoned according to the
              installment schedule.
            </li>
            <li>
              No claim otherwise will be made on Developer by the Applicant (s)
              if the Developer interrupts the construction work or is unable to
              keep the schedule due to Force majeure, war, natural calamities,
              civil unrest, labor strikes, or any other event over which
              Developer has no power.
            </li>
            <li>
              The total area of the Unit consists of the area as prescribed in
              the booking form and shares in a common area. The size will vary
              according to the unit type, but the parking area and share in the
              common area will remain the same.
            </li>
            <li>
              The Developer and Applicant (s) will be bounded by a contract
              after booking. That contract will address the specification of the
              Unit in detail.
            </li>
            <li>
              The price includes the construction of the unit and development
              work, and the standard price is for the formal specification of a
              building that will be mentioned in the contract. Any change in the
              specification will amend the price accordingly.
            </li>
            <li>
              If the project is abandoned for any reason, Developer will refund
              the total amount received from the Applicant (s) within 2 months
              from the announcement to this effect. It is clearly understood
              that in such eventuality, the Applicant (s) will not claim any
              interest or damage of whatsoever nature from the Developer.
            </li>
            <li>
              The Developer shall remain the exclusive honor of the entire Roof
              Space, and no applicant(s) shall claim any rights of any nature
              upon the Roof Space.
            </li>
            <li>
              Suppose the unit size area is increased/decreased during the final
              demarcation. In that case, the cost difference due to such an
              increase in size/area shall have to be paid by the applicant(s) to
              Developer or vice versa if the size area is decreased. Variation
              will be applicable above a 3% difference in the area.
            </li>
            <li>
              All serial numbers and other identification numbers and markings
              given in the layout plans, booking, and allocation letter about
              units are on Ad-hoc, temporary, and tentative basis. The Developer
              reserves the right to amend/change/or renumber the same if
              necessary.
            </li>
            <li>
              The Applicant (s) shall not carry out any additions or alterations
              in the Unit of the project involving the buildings structure
              (including columns, slabs, and beams) within the premises allotted
              to them and will not perform any amendments to utilities that
              disturb and harm another resident.
            </li>
            <li>
              The Applicant(s) shall not bring any hazardous goods or machinery
              inside the project or the Unit of the project that endangers the
              life of the Applicant(s) and other residents. In exceptional
              cases, permission from the Developer is deemed necessary.
            </li>
            <li>
              Applicant(s) shall use the Unit for its development, construction,
              and allotted purpose.
            </li>
            <li>
              The Applicant (s) shall maintain the Unit at their own cost in
              good condition that it will not harm other units and shall not do
              any act to endanger, damage, or impair the building and the common
              area of the building. The Applicant (s) shall abide by the rules
              and regulations of authoritative bodies.
            </li>
            <li>
              The Applicant (s) of the Unit is not allowed to erect any
              external-sign boards or Hoardings, also will not affix any kind of
              publicity or any material on the said property without the
              permission of the Developer.
            </li>
            <li>
              That Applicant (s) will not undertake activity that changes the
              elevation/outlook of the building nor do anything which spoils the
              atmosphere of the project.
            </li>
            <li>
              The Applicant (s) shall not use common areas and corridors of the
              building for personal use.
            </li>
            <li>
              The Developer reserves the right to cancel the agreement in case
              of breach of any terms and conditions by the Applicant(s).
            </li>
            <li>
              Booking a unit shall be considered valid subject to clearance of
              instruments. The Developer shall issue NOC for this purpose.
            </li>
          </ul>
        </div>
      </section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Terms;
