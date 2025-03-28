"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { ArrowCard } from "../our-capabilities/page";

// Pipeline projects data
const pipelineProjects = [
  {
    name: "Perennia Apapa Hotel, Lagos",
    location: "Apapa, Lagos, Nigeria",
    acreage: "9,842 Sqm",
    dealType: "Management & Technical",
    dealSize: "US$ 12 million (Refurbishment)",
    assetType:
      "Upscale business hotel in city setting located in close proximity to Nigeria's main seaport",
    rooms:
      "110plus keys comprising deluxe and executive rooms & suites on three levels",
    foodAndBeverage: "2 Restaurants, 3 bars and 1 Café",
    pools: "1 lazy river pool (adult & children), 1 adult pool – all outdoor",
    banqueting:
      "110-seater banquet hall, 2 meeting rooms and 1 executive board room",
    otherFacilities:
      "Gym, 2 Kitchens, Laundry, hair & beauty salon, spa, sauna, business centre, retail shops",
    desktopImage: "/assets/pipeline.png",
    mobileImage: "/assets/project-pipeline.png",
  },
  {
    name: "Perennia Axari Hotel, Shopping Mall and Entertainment Center, Calabar",
    location: "Calabar, Nigeria",
    acreage: "4 ha",
    dealType: "Management",
    dealSize: "US$ 10 million (Completion)",
    assetType:
      "Upscale business hotel in city setting located in the heart of Nigeria’s most preferred tourist and conference destination",
    rooms: "104 keys comprising Queen rooms, Suites and VIP Loft Suites on 14 floors.",
    foodAndBeverage: "2 Restaurants, 2 bars and 1 rooftop restaurant and outdoor barbeque garden and bush bar.",
    pools: "2 (1 adult, 1 children’s pool) – Outdoor",
    banqueting: "6 Conference halls.",
    otherFacilities: "Gym, 3 Kitchens, Laundry, business centre, hair & beauty salon, spa, pool-table, night club, shopping mall, Skateboard park, cinema",
    desktopImage: "/assets/axari-desktop.png",
    mobileImage: "/assets/axari-mobile.png",
  },
  {
    name: "Perennia Zephyr Luxury Apartments Oniru, Lagos, Nigeria",
    location: "Oniru, Victoria Island Lagos",
    acreage: "7,500 sqm",
    dealType: "Partial Sale & Lease - back Agreement",
    dealSize: "N20.4b",
    assetType: "Upper Upscale Aparthotel development",
    rooms: "199 key upper upscale Aparthotel featuring multiple apartment types, banquet, and meeting facilities. ",
    foodAndBeverage: "F & B facilities",
    pools: "2 pools (main pool and lap pool)",
    banqueting: "Banquet space ",
    otherFacilities:
      "Gym, Squash court, lawn tennis court, table tennis, Kitchens, Laundry, water treatment plant and reservoir, Leisure and wellness offerings.",
    desktopImage: "/assets/zephyr-desktop.png",
    mobileImage: "/assets/zephyr-mobile.png",
  },
  {
    name: "Perennia Lansdown Ibru Heights Resort, Aburi, Ghana & Wanshi Gardens Events Center, Accra, Ghana",
    location: "Aburi, Eastern Region, Ghana",
    acreage: "17.23 Acres",
    dealType: "Management Agreement",
    dealSize: "N20.4b",
    assetType: "Resort destination set in a beautiful hillside tropical rainforest",
    rooms: "30 keys comprising well appointed three and four-bedroom villas and a five-bedroom mansion ",
    foodAndBeverage: "2 Restaurants, 1 pool bar overlooking an infinity pool and outdoor barbeque garden",
    pools: "2 (1 adult infinity pool, 1 children’s pool) – Outdoor",
    banqueting: "2 conference rooms, 1 events center (Wanshi Gardens, Accra)",
    otherFacilities:
      "s Gym, Kitchen, Laundry, business centre, sauna, spa, pool table, outdoor jacuzzi, tennis court",
    desktopImage: "/assets/zephyr-desktop.png",
    mobileImage: "/assets/zephyr-mobile.png",
  },
];

export default function page() {
  const [openProjectIndex, setOpenProjectIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

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
      <section className="border-t-1 border-gray-500 mt-5">
        <h1 className="py-10 text-2xl text-left font-medium text-[#12574A] text-[42px]">
          Project Pipeline
        </h1>
        <div>
          {pipelineProjects.map((project, index) => (
            <div 
              key={index} 
              className="mb-10 pb-10 border-b border-gray-200 last:border-b-0"
            >
              <div
                onClick={() => toggleProject(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h4 className="text-2xl font-medium">{project.name}</h4>
                <p className="p-1 text-[#12574A] border text-center rounded-full rotate-90">
                  ←
                </p>
              </div>

              {openProjectIndex === index && (
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openProjectIndex === index ? "2000px" : "0",
                    opacity: openProjectIndex === index ? 1 : 0,
                  }}
                >
                  <div className="flex flex-col md:flex-row-reverse justify-between md:gap-x-[120px] mt-5">
                    <section className="w-full h-full md:w-1/2">
                      <img
                        src={project.desktopImage}
                        alt={`${project.name} desktop`}
                        className="w-full h-[743px] object-cover hidden md:block rounded-lg"
                      />
                      {/* mobile */}
                      <img
                        src={project.mobileImage}
                        alt={`${project.name} mobile`}
                        className="w-full h-full object-cover rounded-md md:hidden"
                      />
                    </section>
                    <section className="pb-[60px] w-full md:w-1/2">
                      <div className="space-y-5 mt-5">
                        {[
                          { label: "Location", value: project.location },
                          { label: "Acreage", value: project.acreage },
                          { label: "Deal Type", value: project.dealType },
                          { label: "Deal Size", value: project.dealSize },
                        ].map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <p className="text-sm">
                              <span className="font-medium mr-5">
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </p>
                            {itemIndex < 3 && <hr className="text-gray-500" />}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="space-y-5 mt-5 w-full">
                        {[
                          { label: "Asset Type", value: project.assetType },
                          { label: "Rooms", value: project.rooms },
                          { label: "F&B", value: project.foodAndBeverage },
                          { label: "Pools", value: project.pools },
                          { label: "Banqueting", value: project.banqueting },
                          {
                            label: "Other Facilities",
                            value: project.otherFacilities,
                          },
                        ].map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <p className="text-sm">
                              <span className="font-medium mr-5">
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </p>
                            {itemIndex < 5 && <hr className="text-gray-500" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              )}
            </div>
          ))}
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
