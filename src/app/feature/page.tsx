"use client";

import Navbar from "../components/ui/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faCirclePlay, faClock } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8 lg:px-[50px]">
      <Navbar />

      <h1 className="font-bold text-center mt-12 sm:mt-16 text-2xl mb-10">
        Features
      </h1>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl bg-skyblue p-5 sm:p-6 min-h-[260px]">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faHourglass} size="2xl" />
          </div>
          <h2 className="mt-2 font-bold mb-3">Customizable Timers:</h2>
          <ul className="list-disc pl-5 space-y-3 text-black/90">
            <li>
              Tailor your study sessions with customizable timers to suit your focus intervals and breaks.
            </li>
            <li>Image or icon representing timer customization.</li>
          </ul>
        </div>

        <div className="rounded-xl bg-skyblue p-5 sm:p-6 min-h-[260px]">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
          </div>
          <h2 className="mt-2 font-bold mb-3">Integrated Music:</h2>
          <ul className="list-disc pl-5 space-y-3 text-black/90">
            <li>
              Enhance your study environment with integrated music powered by YouTube. Choose from genres to boost concentration.
            </li>
            <li>Visual: music interface within the app.</li>
          </ul>
        </div>

        <div className="rounded-xl bg-skyblue p-5 sm:p-6 min-h-[260px]">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faClock} size="2xl" />
          </div>
          <h2 className="mt-2 font-bold mb-3">Study Session Management:</h2>
          <ul className="list-disc pl-5 space-y-3 text-black/90">
            <li>
              Initiate, pause, resume and conclude study sessions directly within the app.
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-skyblue p-5 sm:p-6 min-h-[260px]">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faDisplay} size="2xl" />
          </div>
          <h2 className="mt-2 font-bold mb-3">Custom Backgrounds:</h2>
          <ul className="list-disc pl-5 space-y-3 text-black/90">
            <li>
              Personalize your study environment with a selection of custom backgrounds.
            </li>
            <li>Visual: thumbnail grid of background options.</li>
          </ul>
        </div>
      </div>

      <div className="h-12 sm:h-16" />
    </div>
  );
};

export default Feature;
