"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // required for arrows
import { EffectFade, Autoplay, Navigation } from "swiper";

export default function OverlayTextSlider() {
  const slides = [
    { src: "/videos/dz/studio.mp4", title: "Studio Apartments" },
    { src: "/videos/dz/one_bed.mp4", title: "One Bed Apartments" },
    { src: "/videos/dz/two_bed.mp4", title: "Two Bed Apartments" },
    { src: "/videos/dz/office.mp4", title: "Commercial Offices" },
  ];

  return (
    <div className="relative h-[420px] md:h-[500px] lg:h-[560px] w-[92%] md:w-[85%] mx-auto rounded-2xl overflow-hidden shadow-lg">
      {/* Swiper */}
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        navigation={{ prevEl: ".dz-prev", nextEl: ".dz-next" }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = ".dz-prev";
          // @ts-ignore
          swiper.params.navigation.nextEl = ".dz-next";
        }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="h-full w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <video
                src={s.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center px-4 animate-slideUp">
                  {s.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Minimal Bold Navigation Arrows */}
      <button
        className="dz-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30"
        aria-label="Previous slide"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 md:w-14 md:h-14 text-third font-extrabold animate-blink transition-transform duration-300 hover:scale-125"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="dz-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30"
        aria-label="Next slide"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 md:w-14 md:h-14 text-third font-extrabold animate-blink transition-transform duration-300 hover:scale-125"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
      `}</style>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.9s ease forwards;
        }
      `}</style>
    </div>
  );
}
