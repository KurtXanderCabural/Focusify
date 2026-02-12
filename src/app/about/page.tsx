"use client";

import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import { Logo } from "../components/ui/Navbar";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const About = () => {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-[50px]">
      <Navbar />

      <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-10">
        <h1 className="text-center font-bold text-3xl">
          About <span className="text-pinkish">Us</span>
        </h1>
        <h2 className="font-bold text-center text-xl sm:text-2xl">
          Welcome to <span className="text-skyblue">Focusify</span> - Your Study
          Companion!
        </h2>
        <p className="mx-auto max-w-4xl font-bold text-center text-sm sm:text-base text-black/90">
          At <span className="text-skyblue">Focusify,</span> we believe that every
          student deserves a tool that empowers them to make the most out of their
          study sessions. Our mission is to enhance the study experience by providing
          a user-friendly and effective study tool that caters to the unique needs of students.
        </p>
      </div>

      <div className="mt-14 sm:mt-20 grid gap-10 lg:grid-cols-[1fr,auto,1fr] lg:items-start">
        <div className="space-y-4">
          <h3 className="text-center text-pinkish text-xl font-bold">Our Vision</h3>
          <p className="text-sm sm:text-base text-black/90">
            We envisioned a world where students can effortlessly manage their study time,
            stay focused, and create an ideal study environment that suits their individual
            preferences. Focusify is more than just an app; it's a commitment to optimizing
            study sessions and fostering a productive learning atmosphere.
          </p>
        </div>

        <div className="hidden lg:block h-full w-px bg-gray-200" />

        <div className="space-y-4">
          <h3 className="text-center text-pinkish text-xl font-bold">Our Commitment</h3>
          <p className="text-sm sm:text-base text-black/90">
            User-Centric Design: Focusify is designed with you in mind. We prioritize user
            experience and strive to create an intuitive and easy-to-use tool that enhances your study routine.
          </p>
          <p className="text-sm sm:text-base text-black/90">
            Continuous Improvement: We are committed to continuously improving and updating Focusify to meet evolving needs.
            Your feedback is invaluable in shaping the future of our app.
          </p>
          <p className="text-sm sm:text-base text-black/90">
            Empowering Students: Focusify is not just a tool; it's a companion that empowers students to stay organized and
            achieve their academic goals.
          </p>
        </div>
      </div>

      <h2 className="mt-16 sm:mt-24 text-3xl font-bold text-center">What Sets Us Apart</h2>

      <div className="mt-10 sm:mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">Customizable Timers for Enhanced Focus</h3>
          <p className="text-sm sm:text-base text-black/90">
            Focusify stands out with customizable timers, allowing users to tailor study sessions based on personal preferences.
            We understand the balance of focus and breaks, and our timers are designed to accommodate those needs seamlessly.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl">Integrated Music for a Conductive Study Environment</h3>
          <p className="text-sm sm:text-base text-black/90">
            Our app integrates a music feature powered by YouTube, enabling students to listen to their favorite tunes while studying.
            We recognize the impact of an ideal environment on productivity.
          </p>
        </div>
      </div>

      <div className="mt-14 sm:mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h3 className="font-bold text-2xl">Get in Touch</h3>
          <p className="text-sm sm:text-base text-black/90">
            We'd love to hear from you! If you have questions, suggestions, or feedback,
            please don't hesitate to contact us or connect with us on social media.
          </p>
          <p className="text-sm sm:text-base text-black/90">
            Thank you for choosing Focusify to optimize your study sessions. Together, let's unlock your full potential!
          </p>
          <p className="text-sm sm:text-base text-black/90">
            Feel free to customize the content based on your brand voice and any specific details you want to highlight.
          </p>
          <hr />
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/pic7.png"
            alt="Picture Get in Touch"
            width={700}
            height={520}
            sizes="(max-width: 1024px) 90vw, 700px"
            className="h-auto w-full max-w-xl cursor-pointer"
          />
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

export default About;
