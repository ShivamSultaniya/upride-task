"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image"

const faqs = [
  {
    question: "GPS-Enabled Vehicles",
    answer:
      "Stay safe and track your progress with our cutting-edge technology that ensures every journey is monitored and secure.",
  },
  { question: "Expert Instructors", answer: "Learn from top-tier instructors with years of experience." },
  { question: "Personalized Classes", answer: "Flexible schedules tailored to your needs." },
  { question: "Why Wait", answer: "Start your driving journey today!" },
];

export default function SpecialitySection() {
  const [openIndex, setOpenIndex] = useState<any>(0);

  return (
    <div className="bg-gray-100 flex flex-col items-center w-full">
      <h3 className="text-red-400 font-semibold">OUR SPECIALITY</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-center">
        Why Choose Upride for your Driving Journey?
      </h2>

      {/* Fixed Height Section */}
      <section className="flex flex-col md:flex-row max-w-6xl mx-auto py-16 px-4 gap-10">
        
        {/* Left Section - FAQ */}
        <div className="w-full md:w-1/2 flex-grow min-h-[350px]">
          {faqs.map((faq, index) => (
            <div key={index} className=" py-4 w-full">
              <button
                className="flex gap-4 items-center w-full text-left font-semibold text-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                {faq.question}
              </button>
              <div className={`flex overflow-hidden transition-all duration-300 ${openIndex === index ? "mt-2" : "h-0"}`}>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Image (Fixed Size) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            height = {1} 
            width = {1000}
            src="/drivingWomen.svg"
            alt="Woman driving with GPS"
            className="rounded-lg shadow-md object-cover h-[18rem]"
          />
        </div>

      </section>
    </div>
  );
}
