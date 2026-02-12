"use client";

import Image from "next/image";
import Navbar from "../components/ui/Navbar";

const Line = () => {
  return (
    <div>
      <div className="h-[2px] w-[200px] bg-pinkish" />
    </div>
  );
};

const Works = () => {
  return (
    <div className="mx-auto max-w-[1920px] px-4 sm:px-8 lg:px-[50px]">
      <Navbar />
      <h1 className="mt-[150px] text-center text-[32px] font-bold">
        How it <span className="text-pinkish">Works</span>
      </h1>

      <div className="mb-[200px] mt-[250px] flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0">
        {/* Card 1 */}
        <div className="h-[200px] w-[300px] rounded-[10px] bg-pinkish">
          <div className="flex justify-center">
            <Image
              src="/images/pic15.png"
              alt="Step 1 icon"
              width={50}
              height={50}
              className="mt-[-40px] h-auto w-[50px]"
              priority
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/pic8.png"
              alt="Access Focusify"
              width={270}
              height={140}
              className="h-auto w-[90%]"
              priority
            />
          </div>
          <p className="mt-[5px] text-center font-bold">Access Focusify</p>
        </div>

        <div className="flex items-center">
          <Line />
        </div>

        {/* Card 2 */}
        <div className="h-[200px] w-[300px] rounded-[10px] bg-pinkish">
          <div className="flex justify-center">
            <Image
              src="/images/pic14.png"
              alt="Step 2 icon"
              width={50}
              height={50}
              className="mt-[-40px] h-auto w-[50px]"
              priority
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/pic9.png"
              alt="Customizing timers"
              width={150}
              height={120}
              className="mt-[40px] h-auto w-[50%]"
            />
          </div>
          <p className="mt-[50px] text-center font-bold">Customizing Timers</p>
        </div>

        <div className="flex items-center">
          <Line />
        </div>

        {/* Card 3 */}
        <div className="h-[200px] w-[300px] rounded-[10px] bg-pinkish">
          <div className="flex justify-center">
            <Image
              src="/images/pic13.png"
              alt="Step 3 icon"
              width={50}
              height={50}
              className="mt-[-40px] h-auto w-[50px]"
              priority
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/pic11.png"
              alt="Choose your music"
              width={150}
              height={120}
              className="mt-[40px] h-auto w-[50%]"
            />
          </div>
          <p className="mt-[50px] text-center font-bold">Choose Your Music</p>
        </div>

        <div className="flex items-center">
          <Line />
        </div>

        {/* Card 4 */}
        <div className="h-[200px] w-[300px] rounded-[10px] bg-pinkish">
          <div className="flex justify-center">
            <Image
              src="/images/pic12.png"
              alt="Step 4 icon"
              width={50}
              height={50}
              className="mt-[-40px] h-auto w-[50px]"
              priority
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/pic10.png"
              alt="Stay productive"
              width={150}
              height={120}
              className="mt-[40px] h-auto w-[50%]"
            />
          </div>
          <p className="mt-[50px] text-center font-bold">Stay Productive</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
