import React from "react";
import Header from "../components/Header";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-[90%] mx-auto">
      <Header title={"Our Projects"} />
      <div className="my-10">
        <Image
          src="/assets/our-project.png"
          alt="our projects"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <section className="flex flex-col md:flex-row gap-5  justify-between">
        <div className="w-full md:w-[45%] flex items-start flex-col justify-between">
          <section>
            <p>OPERATIONAL</p>
            <h1 className="text-2xl text-[#12574A] font-medium">
              Ibom Icon Hotel & Golf Resort (formerly Le Meridien)
            </h1>
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
          </section>

          <button className="border p-2 px-4 text-center text-sm rounded-full text-[#252420]">
            Visit Website <span className="ml-4">→</span>
          </button>
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
            <span className="font-medium mr-5">Pools:</span> 2 (1 adult, 1 children’s pool) – Outdoor
          </p>
          <hr className="text-gray-500" />

          <p className="text-sm">
            <span className="font-medium mr-5">Banqueting:</span> Large banquet hall (sub-divisible) seating up to 700pax and seven meeting rooms
          </p>
          <hr className="text-gray-500" />
          <p className="text-sm">
            <span className="font-medium mr-5">Other Facilities:</span> Gym, Squash court, lawn tennis court, table tennis, 3 Kitchens, Laundry, hair & beauty salon, spa, sauna, pool table, games room, football-pitch, volleyball court, night club, water treatment plant and reservoir
          </p>
        </div>
      </section>
    </div>
  );
}
