"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Logo = () => (
  <Image
    src="/images/focusify.png"
    width={100}
    height={100}
    alt="Focusify logo"
    priority
  />
);

const Landing = () => {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-[50px]">
      <Navbar />

      <div className="mt-12 space-y-5 sm:mt-16 lg:mt-20">
        <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-[40px]">
          Enhance your study sessions with our <br className="hidden sm:block" />
          customizable tool
        </h1>
        <p className="mx-auto max-w-3xl text-center text-sm text-black/80 sm:text-base">
          Stay focused and manage your study time effectively with our study
          tool. Listen to your favorite
          <br className="hidden sm:block" /> tunes or background music to create a
          conductive study environment.
        </p>
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <button
          className="rounded-md bg-skyblue px-10 py-3 text-center text-white transition duration-500 ease-in-out hover:shadow-2xl"
          onClick={() => router.push("/login")}
          type="button"
        >
          Study Now!
        </button>
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <Image
          src="/images/pic1.png"
          alt="image of a girl"
          width={1600}
          height={900}
          priority
          sizes="(max-width: 768px) 100vw, 1400px"
          className="h-auto w-full max-w-6xl"
        />
      </div>

      <div className="mt-14 flex flex-col gap-10 rounded-xl bg-musicNote p-6 sm:mt-20 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold leading-tight sm:text-[42px]">
            Supercharge Your Studdy <br className="hidden sm:block" />
            Sessions
          </h2>
          <p className="max-w-xl text-black/80">
            Experience the Power of Customizable Timers and Music Integration
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-6 sm:pt-6">
            <button
              className="rounded-md px-5 py-3 transition duration-500 ease-in-out hover:shadow-2xl"
              onClick={() => router.push("/register")}
              type="button"
            >
              Sign up
            </button>
            <button
              className="rounded-md bg-skyblue px-5 py-3 text-white transition duration-500 ease-in-out hover:shadow-2xl"
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
            alt="Music notes illustration"
            width={700}
            height={520}
            sizes="(max-width: 1024px) 90vw, 700px"
            className="h-auto w-full max-w-xl"
          />
        </div>
      </div>

      <div className="mt-16 space-y-5 sm:mt-24">
        <p className="text-center text-sm text-black/70 sm:text-base">Enhance</p>
        <h2 className="text-center text-2xl font-bold sm:text-[32px]">
          Step-by-step guide to optimize
          <br className="hidden sm:block" />
          your <span className="text-skyblue">study sessions</span>
        </h2>
        <p className="mx-auto max-w-4xl text-center text-sm text-black/80 sm:text-base">
          Learn how to set up the study tool and make the most out of your study
          time. Stay focused and
          <br className="hidden sm:block" />
          improve productivity with customizable timers and a music feature
          powered by YouTube.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <div className="text-center">
          <Image
            src="/images/pic4.png"
            alt="Customizable timers"
            width={520}
            height={360}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
            className="mx-auto h-auto w-full max-w-[520px] cursor-pointer"
          />
          <p className="mt-3">Customizable Timers</p>
        </div>
        <div className="text-center">
          <Image
            src="/images/pic5.png"
            alt="Music feature"
            width={520}
            height={360}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
            className="mx-auto h-auto w-full max-w-[520px] cursor-pointer"
          />
          <p className="mt-3">Music Feature</p>
        </div>
        <div className="text-center">
          <Image
            src="/images/pic6.png"
            alt="Optimize study sessions"
            width={520}
            height={360}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
            className="mx-auto h-auto w-full max-w-[520px] cursor-pointer"
          />
          <p className="mt-3">Optimize Study Sessions</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center sm:mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <button
            className="rounded-md px-5 py-3 transition duration-500 ease-in-out hover:shadow-2xl"
            onClick={() => router.push("/register")}
            type="button"
          >
            Get Started
          </button>
          <button
            className="rounded-md bg-skyblue px-5 py-3 text-white transition duration-500 ease-in-out hover:shadow-2xl"
            onClick={() => router.push("/login")}
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-center sm:mt-24">
        <Logo />
      </div>

      <div className="mt-10">
        <hr />
      </div>

      <footer className="py-8 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 text-sm text-black/80">
          <FontAwesomeIcon icon={faCopyright} size="lg" />
          <span>2024 Focusify. All rights reserved</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <Link href="#">Event Calendar</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Terms and Conditions</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Landing;
