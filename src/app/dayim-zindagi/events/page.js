"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import MainFooter from "../components/footer/MainFooter";
import useSWR from "swr";

import { DotLoader } from "react-spinners";
import { GET_DSA_EVENTS_API } from "@/lib/apiEndPoints";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setLoading(true);
        let res = await fetch(GET_DSA_EVENTS_API);
        let data = await res.json();

        let eventsData = [];
        data?.forEach((item) => {
          // Match src and height from eventUrl
          let srcMatch = item?.event?.match(/src="([^"]+)"/);
          let heightMatch = item?.event?.match(/height="(\d+)"/);
          if (srcMatch && srcMatch.length > 1) {
            let srcValue = srcMatch[1];
            let heightValue = heightMatch ? heightMatch[1] : "defaultHeight"; // Fallback if height is not found

            eventsData.push({
              src: srcValue,
              height: heightValue,
              createdAt: item?.createdAt,
            });
          }
        });

        setEvents(eventsData.reverse());
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllEvents();
  }, []);

  return (
    <div>
      <NavBar videoBg={false} />

      {loading ? (
        <div className="h-[300px] flex items-center justify-center">
          <DotLoader color="#f3ac27" />
        </div>
      ) : (
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
      )}

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default EventsPage;
