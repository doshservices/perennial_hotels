import Image from "next/image";
import Hero from "./components/Hero";
import { Header } from "./components/Header";
import BrandDesciption from "./components/BrandDesciption";
import BrandFamily from "./components/BrandFamily";
import BrandPartnerships from "./components/BrandPartnerships";

export default function Home() {
  return (
    <div className="text-[#3D3316]">
    <Hero />
    <BrandDesciption/>
    <BrandFamily/>
    <BrandPartnerships/>
    </div>
  );
}