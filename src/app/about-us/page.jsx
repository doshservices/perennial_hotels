import React from "react";
import Header from "../components/Header";
import { Button } from "../our-projects/page";
import { assets } from "../../../public/assets";
import Image from "next/image";
import { DesciptionCard } from "../components/BrandDesciption";

export default function page() {
  const headerText =
    "A history of pushing boundires and delivering  African hospitality with contemporary style.";
  const details = [
    {
      title: " African hospitality delivered with contemporary style.",
      boldText:
        "Perennia Hospitality is the Consulting division of Perennia Limited, a multi-disciplinary hospitality advisory, development and management Company based in Lagos, Nigeria. ",
      lightText:
        "It provides market and financial feasibility, capital raising, brokerage and other advisory services for hotel, retail, residential, leisure, conference and integrated resort developments. Perennia Hospitality is focused on the conceptualisation, economic viability, financing, performance optimization and portfolio management of African hospitality and mixed-use developments.",
      buttonText: "Explore our capabilities",
    },
    {
      title: "Perennia Hotels & Resorts",
      boldText:
        "Perennia Hotels & Resorts is the hospitality management subsidiary of Perennia Limited, a multi-disciplinary hospitality advisory, development and management Company based in Lagos, Nigeria.",
      lightText:
        "Perennia Hotels and Resorts focuses on design development, supervision, procurement, logistics and management of hotel, retail, residential, leisure, conference and integrated resort developments. Perennia is focused on the expression of true African hospitality delivered to exacting international standards of service quality and professionalism.",
    },
  ];
  return (
    <div className="  ">
      <div className="mx-6 md:mx-[80px] ">
        <Header title={headerText} />
      </div>
      <div className="mx-6 md:mx-[80px] ">
        <img
          src={
            "https://res.cloudinary.com/dkvi8w46c/image/upload/v1742816024/Abouts_Us_Banner_pebgu6.png"
          }
          alt="about"
          className="object-cover w-full hidden md:block"
        />
        {/* mobile */}
        <img
          src={
            "https://res.cloudinary.com/dkvi8w46c/image/upload/v1742815268/Mob_About_Us_Banner_rhovr5.png"
          }
          alt="about"
          className="object-cover w-full md:hidden"
        />
      </div>

      <div>
        <DesciptionCard
          title={details[0].title}
          boldText={details[0].boldText}
          lightText={details[0].lightText}
          buttonText={details[0].buttonText}
        />
      </div>

      <section className="border-y-1 border-gray-200 md:py-[60px] space-y-10">
        <div className="flex mx-6 md:mx-[80px] gap-2.5 md:gap-[30px] flex-col md:flex-row ">
          <div className="w-full  xl:w-full  md:h-[534px] h-[150px]  ">
            <img
              src="/assets/about-img3.png"
              alt="perenial"
              className="w-full  h-full"
            />
          </div>
          <div className="flex gap-2.5 md:gap-auto w-full md:w-[365px] md:h-[534px]  justify-between  flex-col  ">
            <div className=" md:h-[251px] h-[150px] ">
              <img
                src="/assets/golf.png"
                alt="perenial"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:h-[251px] h-[150px]">
              <img
                src="/assets/about-img2.png"
                alt="perenial"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div>
          <DesciptionCard
            title={details[1].title}
            boldText={details[1].boldText}
            lightText={details[1].lightText}
            buttonText={details[0].buttonText}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between mt-5 md:mt-15 mb-[120px] w-full px-6 md:px-[80px]">
        <div className="flex flex-col justify-between text-left items-start md:py-15 w-full md:w-[50%] ">
          <h4 className="font-medium md:text-xl text-[16px] text-[#374151]">Our Mission</h4>
          <h2
            className="font-medium  md:text-[32px] text-[20px] text-left md:w-[587px]   italic "
            style={{ letterSpacing: "-1px" }}
          >
            “To be the choice Purveyor of African hospitality, providing
            lifelong experiences to the world.”
          </h2>

          <div className="w-full ">
            <Image
              src={assets.mission}
              alt="mission"
              objectfit="cover"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:items-end md:flex-col-reverse gap-5 justify-between md:py-15 w-full md:w-[50%]  items-start ">
          <h4 className="font-medium text-[16px] md:text-xl text-[#374151]">Our Vision</h4>
          <h2 className="font-medium text-[20px] md:text-3xl italic md:text-right xl:w-[587px]">
            “We conceptualise and create best-in-class commercial real estate
            assets and operations to deliver consistently exceptional service
            outcomes.”
          </h2>

          <div className="w-full">
            <Image
              src={assets.vision}
              alt="vision"
              objectfit="cover"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
