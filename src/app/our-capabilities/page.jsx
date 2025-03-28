import Header from "@/app/components/Header";
import Image from "next/image";
import { HiArrowLongDown } from "react-icons/hi2";

export default function page() {
  return (
    <main>
      <div className="flex justify-center mx-6 md:mx-[80px]">
        <h2 className="text-2xl md:text-[46px] leading-[30px] md:leading-[60px] font-medium text-center max-w-[763px] tracking-[-1px] mt-[60px] mb-[50px]">
          <span className="text-[#12574A]">Expertise</span> that extends into every{" "}
          <span className="text-[#12574A]">experience</span>
        </h2>
      </div>
      <div className="mx-6  md:mx-[80px] ">
        <img
          src={
            "https://res.cloudinary.com/dkvi8w46c/image/upload/v1742816056/Cpababilities_Banner_i9qkgc.png"
          }
          alt={"our-capabilities"}
          width={100}
          height={100}
          className="w-full md:h-[450px] h-[400px] hidden md:block"
        />
        {/* mobile */}
        <img
          src={
            "https://res.cloudinary.com/dkvi8w46c/image/upload/v1742815268/Mob_Cpababilities_Banner_m8ppsj.png"
          }
          alt={"our-capabilities"}
          width={100}
          height={100}
          className="w-full full object-cover md:hidden"
        />
      </div>
      <section className="mx-6 md:mx-[80px] flex flex-col md:flex-row md:my-[60px] md:gap-[88px] items-start justify-between ">
        {/* left section */}
        <div className="mb-[60px] md:w-[50%]">
          <h1 className="text-2xl md:text-[42px] font-medium md:w-[319px] my-10 md:mb-[39px] tracking-[-1px] text-[#12574A] leading-[30px] md:leading-[52px]">
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
          <section className="flex flex-col  items-center w-full text-center md:text-left  md:flex-row md:gap-x-[60px] md:m-10">
            <h1 className=" text-3xl md:text-7xl tracking-[-1px] text-[#12574A]">
              5+
            </h1>
            <p className="text-sm tracking-[-1px] w-[345px] text-[#3D3316]">
              Years of development, experiential placemaking, hotel and
              restaurant management, and community enrichment experience
            </p>
          </section>
          <hr className="text-gray-500 my-6 md:my-0" />
          <section className="flex flex-col items-center text-center md:text-left   md:flex-row md:gap-x-[72px] md:m-10">
            <h1 className="text-3xl md:text-7xl tracking-[-1px] text-[#12574A]">
              15
            </h1>
            <p className="text-sm tracking-[-1px] w-[345px] text-[#3D3316]">
              African countries in specialist areas including - Market &
              Financial Feasibility Studies, Operator Selection and Management
              Contract Negotiation, Hotel Valuation and Brokerage, Capital
              Raising; and Public-Private-Partnership
            </p>
          </section>
        </div>
      </section>
      <div className="border-y py-[60px] px-6 md:px-[80px]  border-gray-500">
        <h1 className="text-2xl md:text-[42px] text-[#12574A]">What We Do</h1>
        <section className="flex flex-col md:flex-row-reverse gap-16 pb-[40px] mb:pb-[11px] items-center">
          <div className="w-full md:w-[50%] md:h-[743px] pt-10 h-[262px] rounded-2xl">
            <Image
              src={"/assets/girl-study.png"}
              width={100}
              height={100}
              alt="capability"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="space-y-6 w-full md:w-[50%]">
            <h1 className="text-2xl font-medium"> </h1>
            <div className="flex items-center justify-between">
              <h4 className="text-[#252420] text-2xl font-medium">
                Concept & Feasibility
              </h4>
              <div className="border border-gray-400 rounded-2xl p-1 px-2">
                <HiArrowLongDown
                  size={15}
                  className="text-[#12574A] rotate-180 font-light "
                />
              </div>
            </div>
            <p className="border- text-sm border-gray-500 pb-6 md:leading-[26px]">
              Our Concept & Feasibility services provide a strategic foundation
              for successful projects. We analyze market potential, assess
              financial viability, and develop strong concepts to maximize
              project success. <br />
              Our key offerings include:
              <div className="list-disc list-inside text-sm pl-5 md:leading-[26px]">
                <p>• Market & financial feasibility studies Project concept</p>
                <p>
                  • Development Market & financial due diligence Highest and
                  best
                </p>
                <p>
                  • Use feasibility studies Hotel branding and market
                  development
                </p>
                <p>• Design brief development</p>
              </div>
            </p>
            <ArrowCard text={"Development Advisory"} />
            <ArrowCard text={"Transaction Advisory"} />
            <ArrowCard text={"Portfolio Management"} />
          </div>
        </section>
      </div>
      <section className="flex flex-col text-center items-center justify-center px-6 md:px-[80px]">
        <div className="my-[60px]">
          <h1 className=" text-2xl font-semibold md:text-[42px] text-[#12574A] tracking-[-1px]">
            Our African Footprint
          </h1>
          <p className="text-sm md:w-[453px] mt-[21px] text-center px-2">
            Pan-African experience across North, East, (PPP) Structuring West,
            Central and Southern Africa{" "}
          </p>
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
    <div className="w-full flex justify-between items-center gap-10 border-t border-gray-500 pt-6">
      <h1 className="text-lg md:text-2xl  text-[#12574A] max-w-[70%]  font-medium">
        {" "}
        {text}
      </h1>
      <div className="border border-gray-400 rounded-2xl p-1 px-2">
        <HiArrowLongDown size={15} className="text-[#12574A] font-light " />
      </div>
    </div>
  );
}
