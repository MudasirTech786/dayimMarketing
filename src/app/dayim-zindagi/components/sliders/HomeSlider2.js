"use client";
import React from "react";

export default function HomeSlider2() {
  const slides = [
    { title: "DSA", subtitle: "Modern Living" },
    { title: "Shop/Office", subtitle: "Commercial" },
    { title: "Studio", subtitle: "Apartments" },
    { title: "One Bed", subtitle: "Apartments" },
    { title: "Two Bed", subtitle: "Apartments" },
  ];

  // duplicate slides for seamless scroll
  const allSlides = [...slides, ...slides];

  return (
    <div className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="flex animate-marquee gap-16">
        {allSlides.map((slide, idx) => (
          <div
            key={idx}
            className="min-w-[300px] flex-shrink-0 flex flex-col items-center justify-center text-center"
          >
            <p
              className="text-5xl lg:text-6xl font-bold"
              style={{ color: "#d6ad42" }}
            >
              {slide.title}
            </p>
            <p
              className="text-lg lg:text-xl font-medium mt-2"
              style={{ color: "#d6ad42" }}
            >
              {slide.subtitle}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
