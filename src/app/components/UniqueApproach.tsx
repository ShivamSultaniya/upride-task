import { FaChalkboardTeacher, FaCar, FaLayerGroup } from "react-icons/fa";

const UniqueApproach = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 w-full flex flex-col items-center">
        <div className="bg-[#F2EAEA] rounded-3xl py-10 max-w-6xl px-[4rem]">
            <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
                <h3 className="bg-gradient-to-r from-[#E42525] via-[#EE907E] to-[#E42525] bg-clip-text text-transparent font-bold text-lg">OUR UNIQUE APPROACH</h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Driving Smarter, Learning Better</h2>
                <p className="text-gray-600 mt-3 max-w-2xl">
                At Upride, we don't just teach driving—we redefine it. Here's how we make your learning journey exceptional.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Cards heading = 'Instructor On Demand' text="At Upride, we don't just teach driving—we redefine it. Here's how we make your learning journey exceptional." image="person.svg"></Cards>
                <Cards heading="Learn on Your Own Vehicle" text="Get personalized training on your car or bike to build confidence with the vehicle you'll use daily." image="car.svg"></Cards>
                <Cards heading="Comprehensive Training" text = "From beginner-friendly courses to refresher sessions, we cater to all skill levels with two-wheeler and four-wheeler training." image="carRoad.svg"></Cards>
            </div>
        </div>
    </section>
  );
};

function Cards({heading,text,image} : {heading:string, text:string, image:string}) {
    return (
        <div className="bg-[#F0E1E1] p-6 rounded-2xl">
            <img src={image} alt="" className="w-8 h-8"/>
            <h4 className="font-bold text-sm mt-4">{heading}</h4>
            <p className="text-gray-600 mt-2 text-sm">
                {text}
            </p>
        </div>
    )
}

export default UniqueApproach;
