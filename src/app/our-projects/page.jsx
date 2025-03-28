import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { ArrowCard } from "../our-capabilities/page";

export default function page() {
  return (
    <div className="px-6 md:px-[80px] ">
      <Header title={"Our Projects"} />
      <div className="my-10 md:h-[450px] h-[400px]">
        <Image
          src="/assets/our-project.png"
          alt="our projects"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <section className="flex flex-col md:flex-row gap-5 md:pb-[60px]  justify-between">
        <div className="w-full md:w-[45%] flex items-start flex-col justify-between">
          <section>
            <p>OPERATIONAL</p>
            <h1 className="text-2xl text-[#12574A] font-medium">
              Ibom Icon Hotel & Golf Resort (formerly Le Meridien)
            </h1>
            <div className="space-y-5 mt-5">
              <p className="text-sm">
                <span className="font-medium mr-5">Location:</span> Uyo,
                Akwa-Ibom State, Nigeria{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Acreage:</span> 174 ha{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Deal Type:</span> Management{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Deal Size:</span> US$ 8
                million (Refurbishment){" "}
              </p>
            </div>
          </section>
          <div className="hidden md:block">
            <Button text="Visit Website" />
          </div>
        </div>
        <div className="space-y-5 mt-5 w-full md:w-[50%]">
          <p className="text-sm">
            <span className="font-medium mr-5">Asset Type:</span> Luxury leisure
            resort & conference center with 18 hole championship golf course{" "}
          </p>
          <hr className="text-gray-500" />
          <p className="text-sm">
            <span className="font-medium mr-5">Rooms:</span> 163 keys comprising
            standard rooms, executive rooms, executive suites, diplomatic
            suites, presidential suites and two and three bedroom
            apartment-style chalets
          </p>
          <hr className="text-gray-500" />
          <p className="text-sm">
            <span className="font-medium mr-5">F&:</span> 2 Restaurants and 2
            bars{" "}
          </p>
          <hr className="text-gray-500" />
          <p className="text-sm">
            <span className="font-medium mr-5">Pools:</span> 2 (1 adult, 1
            children’s pool) – Outdoor
          </p>
          <hr className="text-gray-500" />

          <p className="text-sm">
            <span className="font-medium mr-5">Banqueting:</span> Large banquet
            hall (sub-divisible) seating up to 700pax and seven meeting rooms
          </p>
          <hr className="text-gray-500" />
          <p className="text-sm">
            <span className="font-medium mr-5">Other Facilities:</span> Gym,
            Squash court, lawn tennis court, table tennis, 3 Kitchens, Laundry,
            hair & beauty salon, spa, sauna, pool table, games room,
            football-pitch, volleyball court, night club, water treatment plant
            and reservoir
          </p>
        </div>
      </section>
      <section className="border-t-1 border-gray-500 mt-5 ">
        <h1 className="py-10 text-2xl text-left font-medium text-[#12574A] text-[42px]">
          Project Pipeline
        </h1>
        <div className="flex flex-col md:items-start md:flex-row-reverse md:gap-x-[68px] justify-between">
          <section className="w-full h-full ">
            <img
              src="assets/pipeline.png"
              alt="project-pipeline"
              className="w-[612px] h-[743px] object-cover hidden md:block rounded-lg"
            />
            {/* mobile */}
            <img
              src="assets/project-pipeline.png"
              alt="project-pipeline"
              className="w-full h-full object-cover rounded-md md:hidden"
            />
          </section>
          <section className="pb-[60px]">
            <div className="flex justify-between">
              <h4 className=" text-2xl font-medium">
                Perennia Apapa Hotel, Lagos.
              </h4>
              <p className="p-1 text-[#12574A] border text-center rounded-full rotate-90">
                ←
              </p>
            </div>
            <div className="space-y-5 mt-5">
              <p className="text-sm">
                <span className="font-medium mr-5">Location:</span> Uyo, Akwa-Ibom
                State, Nigeria{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Acreage:</span> 174 ha{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Deal Type:</span> Management{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Deal Size:</span> US$ 8 million
                (Refurbishment){" "}
              </p>
            </div>
            <div className="space-y-5 mt-5 w-full ">
              <p className="text-sm">
                <span className="font-medium mr-5">Asset Type:</span> Luxury
                leisure resort & conference center with 18 hole championship golf
                course{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Rooms:</span> 163 keys
                comprising standard rooms, executive rooms, executive suites,
                diplomatic suites, presidential suites and two and three bedroom
                apartment-style chalets
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">F&:</span> 2 Restaurants and 2
                bars{" "}
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Pools:</span> 2 (1 adult, 1
                children’s pool) – Outdoor
              </p>
              <hr className="text-gray-500" />
              <p className="text-sm">
                <span className="font-medium mr-5">Banqueting:</span> Large
                banquet hall (sub-divisible) seating up to 700pax and seven
                meeting rooms
              </p>
              <hr className="text-gray-500  " />
              <p className="text-sm pb-5">
                <span className="font-medium mr-5">Other Facilities:</span> Gym,
                Squash court, lawn tennis court, table tennis, 3 Kitchens,
                Laundry, hair & beauty salon, spa, sauna, pool table, games room,
                football-pitch, volleyball court, night club, water treatment
                plant and reservoir
              </p>
            </div>
            <div>
              <ArrowCard
                text={
                  "Perennia Axari Hotel, Shopping Mall & Entertainment Center, Calabar."
                }
              />
              <ArrowCard
                text={"Perennia Zephyr Luxury Apartments Oniru, Lagos."}
              />
              <ArrowCard
                text={"Perennia Lansdown Ibru Heights Resort, Aburi, Ghana"}
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export function Button({ text }) {
  return (
    <button className="border border-[#3D3316] p-2 px-4 text-center text-sm rounded-full text-[#12574A]">
      {text} <span className="ml-4">→</span>
    </button>
  );
}