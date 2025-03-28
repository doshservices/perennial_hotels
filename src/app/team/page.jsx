import React from "react";
import Header from "../components/Header";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Adetope Kayode",
      role: "CEO",
      image: "/assets/ade.png",
    },
    {
      name: "Denzil Kentebe Jr",
      role: "COO",
      image: "/assets/den.png",
    },
    {
      name: "Charles Muia",
      role: "Executive Director, Operations",
      image: "/assets/charles.png",
    },
    {
      name: "Tobias Byamugisha Kasaija",
      role: "Executive Director, Finance",
      image: "/assets/tobias.png",
    },
  ];
  return (
    <div>
      <section className="mx-6 md:mx-[80px] ">
        <Header
          title={"Our Team"}
          text={
            "Perennia is made up of entrepreneurs, driven creatives, and heart-led, visionary leaders. We embody and create a culture of learning, growth, and development."
          }
        />
      </section>
      <section className="flex flex-col space-y-10  mt-10 border-t-1 border-gray-200">
        <div className="flex p-6  md:px-[80px]  items-center  justify-between ">
          <p className="font-medium">Key Personnels (5)</p>
          <button className="flex items-center gap-x-2 rounded-full p-2 w-40 justify-center cursor-pointer border border-[#3D3316]">
            <Image src="/assets/filter.svg" alt="CEO" width={15} height={15} />
            Show Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5   md:gap-x-10 px-6 md:px-[80px]  items-center">
          {team.map((item, index) => (
            <div
              className="flex flex-col items-start  border-b border-gray-400 pb-5  md:border-none gap-2"
              key={index}
            >
              <div className=" w-full rounded-full ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={3000}
                />
              </div>
              <h1 className="text- font-medium">{item.name}</h1>
              <p className="">{item.role}</p>
              <p className="text-sm"> Perennia Hotels & Resorts</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
