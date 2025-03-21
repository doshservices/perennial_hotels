import Header from "@/app/components/Header";
import { assets } from "../../../public/assets";
import Image from "next/image";

export default function page() {
  const headerTest = "Expertise that extends into every experience";
  return (
    <main >
      <div className="mx-6 md:mx-[80px]">
        <Header title={headerTest} />
      </div>
      <div className="mx-6 md:mx-[80px]">
        <Image
          src={assets.hero_image}
          alt={"our-capabilities"}
          width={100}
          height={100}
          className="w-full h-[450px]"
        />
      </div>
      <section className="mx-6 md:mx-[80px] flex flex-col md:flex-row md:my-[60px] md:gap-[88px] items-start justify-between ">
        {/* left section */}
        <div className="mb-[60px] mt-[10px] md:w-[50%]">
          <h1 className=" text-[42px] font-medium md:w-[319px] md:mb-[39px] tracking-[-1px] text-[#12574A]">
            We are masters of our craft
          </h1>
          <div>
            <p className="text-sm">
              The brand plays strongly in the Upper-Upscale, Midscale and the
              Economy segments of the hospitality sector.{" "}
            </p>
            <p className="text-sm my-2.5">
              Our approach to hospitality management delivers exceptional
              experiences at every step, to all stakeholders with the ultimate
              deliverable in mind: to consistently, sustainably exceed guest
              expectations.
            </p>
            <p className="text-sm">To us, hospitality is an art form.</p>
          </div>
        </div>
        {/* right section */}
        <div className="md:w-[45%] w-full mb-[60px]">
          <section className="flex flex-col  items-center w-full text-center md:text-start md:flex-row md:gap-x-[60px] md:m-10">
            <h1 className="text-7xl tracking-[-1px] text-[#12574A]">5+</h1>
            <p className="text-sm tracking-[-1px] w-[345px]">
              Years of development, experiential placemaking, hotel and
              restaurant management, and community enrichment experience
            </p>
          </section>
          <hr className="text-gray-500 my-6 md:my-0" />
          <section className="flex flex-col items-center text-center md:flex-row md:gap-x-[72px] md:m-10">
            <h1 className="text-7xl tracking-[-1px] text-[#12574A]">15</h1>
            <p className="text-sm tracking-[-1px] w-[345px]">
              African countries in specialist areas including - Market &
              Financial Feasibility Studies, Operator Selection and Management
              Contract Negotiation, Hotel Valuation and Brokerage, Capital
              Raising; and Public-Private-Partnership
            </p>
          </section>
        </div>
      </section>
      <div className="border-y py-[60px] px-6 md:px-[80px]  border-gray-500">
        <h1 className="text-[42px] text-[#12574A]">What We Do</h1>
        <section className="flex flex-col md:flex-row-reverse gap-16 pb-[11px] items-center">
          <div className="w-full md:w-[50%] h-[743px] ">
            <Image src={'/assets/capability.png'} width={100} height={100} alt="capability" className="object-cover w-full h-full rounded-2xl" />
          </div>
          <div className="space-y-6 w-full md:w-[50%]">
            <h1 className="text-2xl font-medium"> </h1>
            <div className="flex justify-between">
              <h4 className="text-[#12574A]  text-2xl font-medium">Concept & Feasibility</h4>
              <p className="p-1 text-[#12574A] border rounded-full rotate-90">
                ←
              </p>
            </div>
            <p className="border- border-gray-500 pb-6">
              Our Concept & Feasibility services provide a strategic foundation
              for successful projects. We analyze market potential, assess
              financial viability, and develop strong concepts to maximize
              project success. Our key offerings include:
              <div className="list-disc">
                <span>•Market & financial feasibility studies Project concept</span>
                •development Market & financial due diligence Highest and best
                •use feasibility studies Hotel branding and market development
                •Design brief development
              </div>
            </p>
            <ArrowCard text={"Development Advisory"}/>
            <ArrowCard text={"Transaction Advisory"}/>
            <ArrowCard text={"Portfolio Management"}/>
          </div>
        </section>
      </div>
      <section className="flex flex-col text-center items-center justify-center px-6 md:px-[80px]">
        <div className="my-[60px]">
          <h1 className=" text-2xl font-semibold text-[42px] text-[#12574A] tracking-[-1px]">Our African Footprint</h1>
          <p className="text-sm md:w-[453px] mt-[21px] text-center px-2">Pan-African experience across North, East, (PPP) Structuring West, Central and Southern Africa </p>
        </div>
        <div>
          <img src="/assets/map.png" alt="" />
        </div>

      </section>
    </main>
  );
}

export function ArrowCard({ text }) {
  return (
    <div className="w-full flex justify-between border-t border-gray-500 pt-6">
      <h1 className="text-2xl text-[#12574A]  font-medium"> {text}</h1>
      <div className="p-1.5 text-[#12574A] border rounded-full rotate-[-90deg]">
        ←
      </div>
    </div>
  );
}
