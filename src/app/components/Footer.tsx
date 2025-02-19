import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-gray-100 w-full">
            <footer className="bg-white shadow-md p-8 md:p-12">
                <div className="max-w-6xl mx-auto gap-8 flex justify-between">
                    {/* Left Section - Brand Info */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Image src="/upride.svg" alt="Upride Logo" className="w-[8rem]" width={1} height={1}/>
                        </div>
                        <p className="text-gray-600 mt-2 text-[0.75rem]">
                            Learn Driving and get a driving license.
                            <br /> Find top-rated driving schools near you.
                        </p>
                    </div>

                    {/* Middle Section - Navigation Links */}
                    <div className="flex gap-6">
                        <div>
                            <h3 className="font-semibold">Services</h3>
                        </div>
                        <div>
                            <h3 className="font-semibold">About Us</h3>
                            <ul className="text-gray-500 text-sm mt-2 flex flex-col gap-2">
                                <li>Our Story</li>
                                <li>Our Team</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Resources</h3>
                            <ul className="text-gray-500 text-sm mt-2 flex flex-col gap-2">
                                <li>Articles</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">FAQs</h3>
                        </div>
                        <div>
                            <h3 className="font-semibold">Contact Us</h3>
                        </div>
                    </div>

                    {/* Right Section - Newsletter */}
                    <div className="max-w-[20rem]">
                        <h3 className="font-semibold">Join the Upride Community Today!</h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Subscribe now and never miss an update on all things driving.
                        </p>
                        <div className="flex items-center bg-gray-100 rounded-full py-1 pl-4 pr-1 mt-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 bg-transparent outline-none text-gray-600 text-sm"
                            />
                            <button className="bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition p-2">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Policies */}
                <div className="text-center text-gray-400 text-sm mt-8">
                    Privacy Policy | Terms & Conditions
                </div>
            </footer>
        </div>
    );
}
