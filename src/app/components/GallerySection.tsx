"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <div className="bg-gray-100">
      <section className="bg-[#F2EAEA] py-16 px-4 md:px-16 rounded-2xl max-w-6xl mx-auto text-center">
        <h3 className="text-red-400 font-semibold">OUR GALLERY</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Moments That Drive Us Forward</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Take a glimpse into our journey! From empowering first-time drivers to celebrating milestones, our gallery captures the essence of what we do.
        </p>
        <button className="px-4 py-2 border border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-white transition mb-10">
          Visit Our Instagram
        </button>
        
        <img src="gallery.svg" alt="" />
      
      </section>
    </div>
  );
}