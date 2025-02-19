"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Hero(){

  const [activeTrafficSign, setActiveTrafficSign] = useState(1);
  
  return (
        <section className="bg-[#F3ECE3] py-16 ">
          <div className="max-w-[90rem] mx-auto text-center">
          <h2 className="text-lg font-extrabold uppercase bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent w-fit mx-auto">
            About Us
            </h2>


            <div className="relative">
              <img 
                src="clouds.svg" 
                alt="Clouds" 
                className="absolute top-[-1rem] right-[0.5rem] scale-75 "
              />
              <h1 className="text-4xl font-bold mt-2 relative z-10">Transforming Driving Education</h1>
              <h1 className="text-4xl font-bold mt-2 relative z-10">Across India</h1>
            </div>

            <div className='relative'>
              <img 
                  src="clouds.svg" 
                  alt="Clouds" 
                  className="absolute top-[1.3rem] left-[-1rem] scale-75 "
                />
              <p className="text-[#191818] mt-4 max-w-3xl mx-auto z-10 relative">
                Upride began with a simple yet powerful idea: to redefine how India learns to drive. Born from the belief that
                every individual deserves access to safe, reliable, and empowering driver education, Upride has grown into a
                movement that's transforming lives across the country.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
            <Image src="/driving1.svg" width={300} height={200} alt="Driving Lesson" className="rounded-lg" />
            <Image src="/driving2.svg" width={300} height={200} alt="Driving Instructor" className="rounded-lg" />
            <Image src="/driving3.svg" width={300} height={200} alt="Bike Training" className="rounded-lg" />
            <Image src="/driving4.svg" width={300} height={200} alt="Driving Lesson" className="rounded-lg" />
          </div>
          <div className="mt-12 max-w-6xl mx-auto flex justify-between gap-x-[10rem]">
            <div className='flex flex-col items-start justify-start'>
                <h2 className="text-red-500 text-sm font-bold uppercase">Our Story</h2>
                <h1 className="text-3xl font-bold mt-2">Milestones that Define our Success</h1>
            </div>
            <div>
                <p className="text-gray-600 mt-4">
                At Upride, we realized driving education in India was stuck in reverse. From unprofessional instructors to outdated methods
                and a lack of focus on safety, traditional driving schools were failing learners. In 2023, our founders set out to rewrite the
                rules of driver education. That's how Upride was born—with a mission to make learning to drive smarter, safer, and accessible to all.
                </p>
            </div>
          </div>
          <div className="">
            <div className='mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12'>
              <TrafficLightSection heading='The Idea Takes Shape' desc='Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.' isActive = {activeTrafficSign === 1}></TrafficLightSection>
              <TrafficLightSection heading='Upride is Born' desc='Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.' isActive = {activeTrafficSign === 2}></TrafficLightSection>
              <TrafficLightSection heading='Upride is Born' desc='Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.' isActive = {activeTrafficSign === 3}></TrafficLightSection>
            </div>
            <div className='flex'>
              <img src="arrow.svg" alt="" className='ml-auto rotate-180' onClick={() => setActiveTrafficSign((prev) => Math.max(prev - 1, 1))}/>
              <img src="arrow.svg" alt="" className='mr-[8rem]' onClick={() => setActiveTrafficSign((prev) => Math.min(prev + 1, 3))}/>
            </div>
          </div>
          
        </section>
      );
}

function TrafficLightSection({ heading,desc, isActive }: { heading: string; desc: string, isActive: boolean }) {
  return (
    <div className="text-center md:text-left">
    <div className="flex flex-col justify-start gap-2">
      <img src={isActive ? "/traffic_light.svg" : "/traffic_light_dim.svg"} alt="Traffic Light" className='w-[20rem]'/>
      <h3 className={`text-xl font-bold bg-gradient-to-r ${isActive ? "from-[#E42525] via-[#FFBFB2] to-[#E42525]": "from-[#FF5757] via-[#FFBFB2] to-[#FF5757]"} bg-clip-text text-transparent`}>2023</h3>
    </div>
    <h4 className={`font-semibold text-lg mt-2} ${isActive?"text-[#1E1E1E]" : "text-[#696565]"}`}>{heading}</h4>
    <p className={`text-gray-600 mt-2 max-w-sm ${isActive?"text-[#1E1E1E]" : "text-[#696565]"}`}>
      {desc}
    </p>
  </div>
  );
}