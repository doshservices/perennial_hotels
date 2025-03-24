import React from "react";
import { Button } from "../our-projects/page";

export default function BrandDesciption() {
  const details = {
    title: "Hospitality delivered with contemporary style.",
    boldText:
      "The Perennia Hotels & Resorts brand is an upper upscale hotel and resort brand, with an emphasis on living spaces that evoke a sense of contemporary African design and a service culture of excellence.",
    ligihtText:
      "Relax your mind, be at your best and make connections that will change your world. Perennia Hotels and Resorts are places where natural beauty meets creativity, artistry meets design, and unforgettable memories are made.",
  };

  return (
    <div>
      <DesciptionCard
        title={details.title}
        boldText={details.boldText}
        ligihtText={details.ligihtText}
      />
    </div>
  );
}

export function DesciptionCard({ title, boldText, ligihtText, buttonText }) {
  return (
    <div className="flex  px-6  md:px-[80px] flex-col md:flex-row md:gap-x-[147px] justify-between my-10 md:mt-[60px] md:mb-[108px]  ">
      <div className="md:max-w-[480 flex flex-col justify-between items-start">
        <h2 className="text-2xl md:text-4xl md:w-[474px] text-[#3D3316] tracking-[-1px] mb-5 md:mb-0">
          {title}
        </h2>

        <div className={buttonText ? "md:block hidden  " : "hidden"}>
          <Button text={buttonText} />
        </div>
      </div>
      <div className="md:max-w-[653 ">
        <p className="font-medium">{boldText}</p>
        <p className="pt-5 text-sm">{ligihtText}</p>
      </div>
      <div className={buttonText ? "block md:hidden my-10" : "hidden"}>
          <Button text={buttonText} />
        </div>
    </div>
  );
}
