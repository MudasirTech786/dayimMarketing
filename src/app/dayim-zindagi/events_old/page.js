"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import MainFooter from "../components/footer/MainFooter";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/dsa_event`,
        {
          cache: "no-store",
        }
      );
      res = await res.json();

      let eventsData = [];
      res.events.map((item) => {
        var srcMatch = item?.eventUrl?.match(/src="([^"]+)"/);
        var heightMatch = item?.eventUrl?.match(/height="(\d+)"/);

        if (srcMatch && srcMatch.length > 1) {
          // The src value is in the second element of the match array
          var srcValue = srcMatch[1];
          var heightValue = heightMatch[1];

          eventsData.push({
            src: srcValue,
            height: heightValue,
            createdAt: item?.createdAt,
          });
        }
      });
      setEvents(eventsData.reverse());
    };

    getAllEvents();
  }, []);

  return (
    <div>
      <NavBar videoBg={false} />

      <div className=" flex flex-col items-center justify-center gap-10 my-[150px]">
        {events?.map((url) => (
          <iframe
            key={url.src}
            src={url.src}
            height={url.height}
            width={500}
            // className="w-[800px] bg-red"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        ))}
      </div>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default EventsPage;
