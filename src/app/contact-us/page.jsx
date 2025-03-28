"use client";

import React, { useState, useRef, useEffect } from 'react';
import Header from "../components/Header";
import Image from "next/image";

export default function Contact() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const dropdownRef = useRef(null);

  const services = [
    { value: '', label: 'Select Service Type' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking Inquiry' },
    { value: 'feedback', label: 'Feedback' }
  ];

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mx-6 md:mx-[80px] mb-24">
      <div className="max-w-72 mx-auto">
        <Header title={"Get In Touch With Us"} style={{ color: "#12574A" }} />
      </div>
      <div className="mb-15">
        <Image
          src="/assets/contact_us.png"
          alt="contact us"
          width={1200}
          height={450}
        />
      </div>
      <section className="flex flex-col md:flex-row gap-[106px] justify-between mt-[60px]">
        <div className="flex flex-col space-y-5 md:max-w-[50%] text-2xl md:text-[40px] text-[#3D3316] leading-[30px] md:leading-[52px]">
          <h1>
            Address: 90, Awolowo Road, Ikoyi, Lagos.
          </h1>
          <hr className="border-black" />
          <h1>Phone: +234 709 8765 432 </h1>
          <hr className="border-black" />
          <h1>Email: info@perenniahotels.com</h1>
        </div>
        <div className="space-y-5 md:max-w-[50%]">
          <p className="font-medium text-[20px] text-[#3D3316]">Inquiry Form</p>
          <p className="text-sx text-[#3D3316]">
            Fill out the form below with your inquiries and a member of our team
            would reach out to you as soon as possible
          </p>
          <form action="" className="space-y-5">
            <input
              type="text"
              className="p-4 rounded-2xl w-full outline-none border border-[#3D3316]"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="p-4 rounded-2xl w-full outline-none border border-[#3D3316]"
              placeholder="Email Address"
            />
            <div 
              ref={dropdownRef} 
              className="relative"
            >
              <div 
                onClick={toggleDropdown}
                className="flex justify-between items-center border text-gray-500 border-[#3D3316] rounded-2xl p-4 cursor-pointer"
              >
                <p>
                  {services.find(s => s.value === selectedService)?.label || 'Service Type'}
                </p>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul className="absolute z-10 w-full border border-[#3D3316] rounded-2xl mt-2 bg-white">
                  {services.map((service, index) => (
                    <li 
                      key={service.value} 
                      onClick={() => handleServiceSelect(service)}
                      className={`p-4 cursor-pointer hover:bg-[#12574A] hover:text-white 
                        ${index === 0 ? 'cursor-default hover:bg-transparent hover:text-gray-500' : ''}`}
                    >
                      {service.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="p-4 rounded-2xl w-full outline-none border border-[#3D3316]"
              placeholder="Write your message here"
            ></textarea>
            <button className="mt-2 block border border-[#3D3316] rounded-full px-6 py-3 text-sm w-full">
              <span className="pr-4">Submit Message</span> →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}