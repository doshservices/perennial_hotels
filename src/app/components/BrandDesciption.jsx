import React from "react";
import { Button } from "../our-projects/page";

export default function BrandDesciption() {
  const details = {
    title: "Hospitality delivered with contemporary style.",
    boldText:
      "The Perennia Hotels & Resorts brand is an upper upscale hotel and resort brand, with an emphasis on living spaces that evoke a sense of contemporary African design and a service culture of excellence.",
    lightText:
      "Relax your mind, be at your best and make connections that will change your world. Perennia Hotels and Resorts are places where natural beauty meets creativity, artistry meets design, and unforgettable memories are made.",
  };

  return (
    <div>
      <DesciptionCard
        title={details.title}
        boldText={details.boldText}
        lightText={details.lightText}
      />
    </div>
  );
}

export function DesciptionCard({ title, boldText, lightText, buttonText }) {
  return (
    <div className="flex px-6 md:px-[80px] flex-col md:flex-row justify-between my-10 md:mt-[60px] border-b border-[#3D3316]  md:mb-[88px] border-opacity-20 pb-10">

      <div className="w-full md:max-w-[48%] flex flex-col justify-between items-start">
        <h2 className="text-2xl md:text-4xl lg:w-[474px] text-[#3D3316] tracking-[-1px] mb-5 md:mb-0 text-left font-semibold md:font-normal leading-[30px] md:leading-[46px]" style={{letterSpacing:'-1px'}}>
          {title}
        </h2>

        <div className={buttonText ? "md:block hidden" : "hidden"}>
          <Button text={buttonText} />
        </div>
      </div>
      <div className="w-full md:max-w-[52%]">
        <p className="font-medium text-lg text-justify md:w-[653px leading-relaxed" style={{letterSpacing:'-1px'}}>{boldText}</p>
        <p className="pt-2 text-sm text-justify font-medium md:font-normal leading-[20px] md:leading-relaxed" style={{letterSpacing:'0%'}}>{lightText}</p>
      </div>
      
      <div className={buttonText ? "block md:hidden border-[#3D3316] my-10" : "hidden"}>
          <Button text={buttonText} className="border-[#3D3316]" />
        </div>
    </div>
  );
}
