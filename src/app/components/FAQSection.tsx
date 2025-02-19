"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to learn driving?",
    answer:
      "The time it takes to learn depends on your experience and the course you choose. On average, it takes around 10 to 20 lessons to become a confident driver. Our flexible courses cater to all levels, so you can learn at your own pace.",
  },
  { question: "How does Upride work?", answer: "Upride offers professional driving lessons tailored to your needs." },
  { question: "How do I book a class?", answer: "You can book a class through our website or mobile app." },
  { question: "How can I pay for lessons?", answer: "Payments can be made via credit card, debit card, or online banking." },
  { question: "Can I reschedule my lesson?", answer: "Yes, rescheduling is allowed up to 24 hours before the lesson." },
  { question: "Can I learn with my own car?", answer: "Yes, you can use your own vehicle if it meets safety standards." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="bg-gray-100">
      <div className="bg-[#F2EAEA] py-16 px-4 rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Frequently Asked Questions?
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#EBCDC79E] py-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={20} className="text-[#FF5757]" />
                ) : (
                  <Plus size={20} className="text-[#BFA5A5]" />
                )}
              </button>
              <div
                className={`transition-all overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-2 text-gray-600" : "max-h-0"
                }`}
              >
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
