
export default function MissionVision(){
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto gap-12">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-[7rem] h-[20rem]">
          <div className="w-full md:w-1/2">
            <img src="/driving5.svg" alt="Driving Lesson" className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-red-500 text-sm font-bold uppercase">Mission</h2>
            <h1 className="text-xl font-bold mt-2">Empowering Confident and Responsible Drivers</h1>
            <p className="text-gray-600 mt-2">
              Empower learners through innovative training techniques, expert guidance, and a commitment to road safety, ensuring every journey begins with confidence.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-[7rem]">
          <div className="w-full md:w-1/2">
            <img src="/driving6.svg" alt="Driving" className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-red-500 text-sm font-bold uppercase">Vision</h2>
            <h1 className="text-xl font-bold mt-2">Driving Education, Reinvented for India</h1>
            <p className="text-gray-600 mt-2">
              Our dream is big: Revolutionizing driver education across India by blending technology, expertise, and a customer-first approach.
              Starting in Bangalore, we’re creating a movement where every learner becomes a responsible, skilled, and confident driver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
