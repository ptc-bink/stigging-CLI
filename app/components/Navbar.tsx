"use client";
import Image from "next/image";

import Logo from "./Logo";
import Avatar from "@/public/img/Avatar.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-8 py-4 w-full bg-cgrey-100">
            <div className="flex">
                <Logo />
                <div className="flex items-center">
                    <p className="pl-4 text-2xl leading-8 font-semibold text-white text-center items-center">
                        Bot GIB
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Image
                    src={Avatar}
                    width={40}
                    height={40}
                    className="rounded-full border-[1.5px] border-cgrey-200"
                    alt="user avatar"
                />
                <p className="px-4 text-white text-base font-semibold">Lunatic_twister</p>
            </div>
        </div>
    );
};

export default Navbar;
