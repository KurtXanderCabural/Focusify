"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Logo = () => {
  return (
    <Image
      src="/images/focusify.png"
      width={100}
      height={100}
      alt="Focusify logo"
      priority
    />
  );
};

const Landing = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[50px]">
      <Navbar />

      <div className="mt-[80px] space-y-5">
        <h1 className="text-center text-[32px] font-bold">
          Enhance your study sessions with our <br />
          customizable tool
        </h1>
        <p className="text-center text-sm sm:text-base">
          Stay focused and manage your study time effectively with our study
          tool. Listen to your favorite <br />
          tunes or background music to create a conductive study environment.
        </p>
      </div>

      <div className="mt-[50px] flex justify-center">
        <button
          className="bg-skyblue text-white rounded-md box-border px-[45px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
          onClick={() => router.push("/login")}
          type="button"
        >
          Study Now!
        </button>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center mt-[50px]">
        <Image
          src="/images/pic1.png"
          alt="image of a girl"
          width={1600}
          height={900}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, 1600px"
        />
      </div>

      <div className="mt-[100px] flex flex-col lg:flex-row justify-between gap-10 bg-musicNote p-6 sm:p-10">
        <div className="space-y-5">
          <h1 className="font-bold text-[42px]">
            Supercharge Your Studdy <br />
            Sessions
          </h1>
          <p>Experience the Power of Customizable Timers and Music Integration</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-4 sm:pt-8">
            <button
              className="border-box rounded-md px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
              onClick={() => router.push("/register")}
              type="button"
            >
              Sign up
            </button>
            <button
              className="bg-skyblue text-white rounded-md box-border px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
              onClick={() => router.push("/login")}
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/pic3.png"
            alt="decorative illustration"
            width={700}
            height={520}
            className="w-full max-w-[520px] h-auto"
            sizes="(max-width: 768px) 90vw, 520px"
          />
        </div>
      </div>

      <div className="mt-[150px] space-y-5">
        <p className="text-center">Enhance</p>
        <h1 className="text-center text-[32px] font-bold">
          Step-by-step guide to optimize
          <br />
          your <span className="text-skyblue">study sessions</span>
        </h1>
        <p className="text-center text-sm sm:text-base">
          Learn how to set up the study tool and make the most out of your study
          time. Stay focused and <br />
          improve productivity with customizable timers and a music feature
          powered by YouTube.
        </p>
      </div>

      <div className="mt-[150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-center">
          <Image
            src="/images/pic4.png"
            alt="Customizable Timers"
            width={520}
            height={360}
            className="cursor-pointer mx-auto h-auto w-full max-w-[520px]"
            sizes="(max-width: 768px) 90vw, 520px"
          />
          <p className="text-center">Customizable Timers</p>
        </div>

        <div className="text-center">
          <Image
            src="/images/pic5.png"
            alt="Music Feature"
            width={520}
            height={360}
            className="cursor-pointer mx-auto h-auto w-full max-w-[520px]"
            sizes="(max-width: 768px) 90vw, 520px"
          />
          <p className="text-center">Music Feature</p>
        </div>

        <div className="text-center">
          <Image
            src="/images/pic6.png"
            alt="Optimize Study Sessions"
            width={520}
            height={360}
            className="cursor-pointer mx-auto h-auto w-full max-w-[520px]"
            sizes="(max-width: 768px) 90vw, 520px"
          />
          <p className="text-center">Optimize Study Sessions</p>
        </div>
      </div>

      <div className="mt-[150px] flex justify-center">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button
            className="border-box rounded-md px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
            onClick={() => router.push("/register")}
            type="button"
          >
            Get Started
          </button>
          <button
            className="bg-skyblue text-white rounded-md box-border px-[20px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
            onClick={() => router.push("/login")}
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-[100px] flex justify-center">
        <Logo />
      </div>

      <div className="mt-[80px]">
        <hr />
      </div>

      <footer className="py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm">
          <FontAwesomeIcon icon={faCopyright} size="lg" />
          <span>2024 Focusify. All rights reserved</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms and Conditions</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Landing;
