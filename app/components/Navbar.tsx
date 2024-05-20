"use client";
import Image from "next/image";

import Logo from "./Logo";
import Avatar from "@/public/img/Avatar.png"
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ProfileModal from "./forms/ProfileModal";
import AppContext from "../providers/AppContext";
import { getUserDetails } from "../hooks/test/user-detail";

const Navbar = () => {

    const path = usePathname();

    const [temp, setTemp] = useState("");
    const { profileModalOpen, serverID, userID, setProfileModalOpen } = useContext(AppContext);

    const title = () => {
        const words = temp.split(' ');
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        const result = capitalizedWords.join(' ');

        return result;
    }

    const handleProfileModalOpen = () => {
        setProfileModalOpen(true);
        getUserDetails(serverID, userID);
    }

    useEffect(() => {
        setTemp(path.split("/")[2]);
    }, [path])

    return (
        <div className="flex justify-between items-center px-8 py-4 w-full bg-cgrey-100">
            <div className="md:block hidden">
                <div className="flex">
                    <Logo />
                    <div className="flex items-center">
                        <p className="pl-4 text-2xl leading-8 font-semibold text-white text-center items-center">
                            Bot GIB
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:hidden block text-2xl leading-8 font-semibold text-white">
                {title()}
            </div>
            <div className="flex justify-center items-center relative" >
                <div className="flex justify-center items-center ">
                    <Image
                        src={Avatar}
                        width={40}
                        height={40}
                        className="rounded-full border-[1.5px] border-cgrey-200"
                        alt="user avatar"
                    />
                    <p className="px-4 text-white text-base font-semibold md:block hidden">Lunatic_twister</p>
                </div>
                <div className="flex flex-col absolute border border-[#292A2E] rounded-lg bg-[#1D1E22] top-[30px] w-[200px] items-end">
                    <div className="px-3 py-[6px] hover:cursor-pointer hover:bg-[#141518] text-white border border-[#292A2E] text-base leading-6 font-semibold">Log out</div>
                    <div className="px-3 py-[6px] hover:cursor-pointer hover:bg-[#141518] text-white border border-[#292A2E] text-base leading-6 font-semibold" onClick={handleProfileModalOpen}>User Details</div>
                </div>
            </div>
            {profileModalOpen && (
                <div className="flex fixed top-0 left-0 w-screen h-screen bg-[#141518]/30 backdrop-blur-sm justify-center items-center">
                    <ProfileModal />
                </div>
            )}
        </div>
    );
};

export default Navbar;
