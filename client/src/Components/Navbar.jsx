import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();

    return (
        <div className="shadow py-4">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img src={assets.logo} alt="Logo" className="h-8 md:h-10" />
                
                {user ? (
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Mobile-only Applications link */}
                        <Link to="/applications" className="sm:hidden text-sm">
                            Applications
                        </Link>
                        
                        {/* Desktop elements */}
                        <div className="hidden sm:flex items-center gap-3">
                            <Link to="/applications" className="hover:text-blue-600">
                                Applied Jobs
                            </Link>
                            <p className="text-gray-400">|</p>
                            <p className="text-gray-700 truncate max-w-[120px] lg:max-w-none">
                                Hi, {user.firstName} {user.lastName}
                            </p>
                        </div>

                        {/* Mobile name and user button */}
                        <div className="sm:hidden flex items-center gap-2">
                            <p className="text-gray-700 text-sm truncate max-w-[100px]">
                                {user.firstName}
                            </p>
                            <UserButton />
                        </div>

                        {/* Desktop user button */}
                        <div className="hidden sm:block">
                            <UserButton />
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <button className="hidden md:block text-gray-600 hover:text-blue-600">
                            Recruiter Login
                        </button>
                        <button 
                            onClick={() => openSignIn()} 
                            className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;