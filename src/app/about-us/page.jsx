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
      ligihtText:
        "It provides market and financial feasibility, capital raising, brokerage and other advisory services for hotel, retail, residential, leisure, conference and integrated resort developments. Perennia Hospitality is focused on the conceptualisation, economic viability, financing, performance optimization and portfolio management of African hospitality and mixed-use developments.",
      buttonText: "Explore our capabilities",
    },
    { title: "Perennia Hotels & Resorts", 
    boldText:
      "Perennia Hotels & Resorts is the hospitality management subsidiary of Perennia Limited, a multi-disciplinary hospitality advisory, development and management Company based in Lagos, Nigeria.",
    ligihtText:"Perennia Hotels and Resorts focuses on design development, supervision, procurement, logistics and management of hotel, retail, residential, leisure, conference and integrated resort developments. Perennia is focused on the expression of true African hospitality delivered to exacting international standards of service quality and professionalism."
     },
  ];
  return (
    <div className="  ">
      <div className="mx-6 md:mx-[80px] ">
        <Header title={headerText} />
      </div>
      <div className="mx-6 md:mx-[80px] ">
        <img
          src={'https://res.cloudinary.com/dkvi8w46c/image/upload/v1742816024/Abouts_Us_Banner_pebgu6.png'}
          alt="about"
          
          className="object-cover w-full hidden md:block"
        />
        {/* mobile */}
          <img
          src={'https://res.cloudinary.com/dkvi8w46c/image/upload/v1742815268/Mob_About_Us_Banner_rhovr5.png'}
          alt="about"
          
          className="object-cover w-full md:hidden"
        />
      </div>

      <div>
        <DesciptionCard
          title={details[0].title}
          boldText={details[0].boldText}
          ligihtText={details[0].ligihtText}
          buttonText={details[0].buttonText}
        />
      </div>

      <section className="border-y-1 border-gray-200 md:py-[60px] space-y-10">
        <div className="flex mx-6 md:mx-[80px] gap-2.5 md:gap-[30px] flex-col md:flex-row   ">
          <div className="w-full md:w-[785px] md:h-[534px] h-[150px] ">
            <img
              src="/assets/about-img1.png"
              alt="perenial"
              className="w-full h-full"
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
          ligihtText={details[1].ligihtText}
          buttonText={details[0].buttonText}
        />
      </div>
      </section>
      <section className="flex flex-col md:flex-row gap-10 md:gap-[106px] justify-between mt-5 md:mt-15 mb-[120px] w-full px-6 md:px-[80px]">
        <div className="flex flex-col gap-5 justify-between items-start md:py-15 w-full ">
          <h4 className="font-medium text-xl">Our Mission</h4>
          <h2 className="font-bold text-3xl italic">
            “To be the choice Purveyor of African hospitality, providing
            lifelong experiences to the world.”
          </h2>

          <div className="w-full ">
            <Image
              src={assets.mission}
              alt="mission"
              objectFit="cover"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:items-end md:flex-col-reverse gap-5 justify-between md:py-15 w-full items-start ">
          <h4 className="font-medium text-xl">Our Vision</h4>
          <h2 className="font-medium text-3xl italic">
            “To be the choice Purveyor of African hospitality, providing
            lifelong experiences to the world.”
          </h2>
          
          <div className="w-full">
            <Image
              src={assets.vision}
              alt="vision"
              objectFit="cover"
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
