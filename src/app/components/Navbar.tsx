import { IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import Image from "next/image"

export default function Navbar() {
    return (
        <>
            <div className="flex justify-around h-[3.25rem] bg-white items-center">
                <div>
                    <Image width={100} height={100} src="upride.svg" alt="" className="h-8"/>
                </div>

                <div className="flex gap-x-[4rem] text-sm h-full items-center">
                    <NavLink text="Services" isActive={false} />
                    <NavLink text="About Us" isActive={true} />
                    <NavLink text="Resources" isActive={false} />
                    <NavLink text="FAQs" isActive={false} />
                    <NavLink text="Contact Us" isActive={false} />
                </div>

                <div className="flex gap-x-4">
                    <IoMdSearch className="scale-125 rounded-full text-[#FF5757]" />
                    <IoPerson className="scale-125 rounded-full text-[#FF5757]" />
                </div>
            </div>
        </>
    );
}

function NavLink({ text, isActive }: { text: string; isActive: boolean }) {
    return (
        <a href="#" className={`h-full flex items-center ${isActive ? "border-b-2 border-red-500" : ""}`}>
            {text}
        </a>
    );
}
