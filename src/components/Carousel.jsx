import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import Center from "../assets/img/center.jpg";
import Inside from "../assets/img/insinde.jpg";
import Topview from "../assets/img/topview.jpg";

const slides = [
  {
    src: Center,
    alt: "Slide 1",
  },
  {
    src: Inside,
    alt: "Slide 2",
  },
  {
    src: Topview,
    alt: "Slide 3",
  },
];

const Carousel = () => {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive(active === 0 ? slides.length - 1 : active - 1);
  };

  const next = () => {
    setActive(active === slides.length - 1 ? 0 : active + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[450px] h-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2
      bg-black/40 hover:bg-black/60 text-white
      p-2 rounded-full transition"
      >
        <Icon icon="material-symbols:chevron-left" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2
      bg-black/40 hover:bg-black/60 text-white
      p-2 rounded-full transition"
      >
        <Icon icon="material-symbols:chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;
