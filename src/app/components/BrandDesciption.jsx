import React from "react";
import { Button } from "../our-projects/page";

export default function BrandDesciption() {
  const details = {
    title: "Perennia Hotels & Resort",
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
    <div className="flex px-[80px] flex-col md:flex-row gap-2 justify-between  mt-[60px] md:mb-[108px]  ">
      <div className="md:w-1/2 flex flex-col justify-between items-start">
        <h2 className="text-4xl md:w-[474px] text-[#3D3316] tracking-[-1px]">
          {title}
        </h2>

        <div className={buttonText ? "block" : "hidden"}>
          <Button text={buttonText} />
        </div>
      </div>
      <div className="md:w-[653px] ">
        <p className="font-medium">{boldText}</p>
        <p className="pt-5 text-sm">{ligihtText}</p>
      </div>
    </div>
  );
}
