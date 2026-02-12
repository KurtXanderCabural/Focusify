"use client";

import Image from "next/image";
import Navbar from "../components/ui/Navbar";

const Line = () => (
  <div className="hidden lg:flex items-center">
    <div className="h-[2px] w-[140px] xl:w-[200px] bg-pinkish" />
  </div>
);

const Works = () => {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-[50px]">
      <Navbar />

      <h1 className="mt-12 sm:mt-16 text-center text-3xl font-bold">
        How it <span className="text-pinkish">Works</span>
      </h1>

      <div className="mt-12 sm:mt-16 lg:mt-24 mb-16 sm:mb-24">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
          {[
            { step: "/images/pic15.png", img: "/images/pic8.png", label: "Access Focusify", imgW: 270, imgH: 140 },
            { step: "/images/pic14.png", img: "/images/pic9.png", label: "Customizing Timers", imgW: 150, imgH: 120 },
            { step: "/images/pic13.png", img: "/images/pic11.png", label: "Choose Your Music", imgW: 150, imgH: 120 },
            { step: "/images/pic12.png", img: "/images/pic10.png", label: "Stay Productive", imgW: 150, imgH: 120 },
          ].map((c, idx) => (
            <div key={c.label} className="flex items-center">
              <div className="w-full max-w-[320px] rounded-xl bg-pinkish p-5 h-[220px]">
                <div className="flex justify-center">
                  <Image
                    src={c.step}
                    alt={`Step ${idx + 1} icon`}
                    width={50}
                    height={50}
                    className="-mt-8 h-auto w-[50px]"
                    priority={idx === 0}
                  />
                </div>

                <div className="mt-3 flex items-center justify-center">
                  <Image
                    src={c.img}
                    alt={c.label}
                    width={c.imgW}
                    height={c.imgH}
                    className="h-auto w-full max-w-[260px]"
                    sizes="(max-width: 1024px) 80vw, 260px"
                  />
                </div>

                <p className="mt-3 text-center font-bold">{c.label}</p>
              </div>

              {idx !== 3 && <Line />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
