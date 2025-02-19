
export default function FounderPerspective() {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6">
      {/* Title */}
      <h3 className="bg-gradient-to-r from-[#E42525] via-[#EE907E] to-[#E42525] bg-clip-text text-transparent font-bold text-sm">Founder Perspective</h3>
      <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mt-2">
        From the Founder's Wheel - The Vision Behind Upride
      </h2>

      {/* Image with overlay */}
      <div className="mt-6 max-w-6xl w-full">
        <img
          src="/FounderL.svg" // Replace with actual path
          alt="Founder Holding L Sign"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
}
