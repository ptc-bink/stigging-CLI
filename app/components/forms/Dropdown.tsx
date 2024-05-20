
import React, { useState } from "react";
import Image from "next/image";

import ArrowDown from "@/public/avatar/arrow-down.svg"
import ArrowUp from "@/public/avatar/arrow-up.svg"

const Dropdown: React.FC<DropdownProps> = ({ dropdownList, placeholder, className, callback }) => {

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    // const [value, setValue] = useState<string>(placeholder);

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleSetValue = (item: string) => {
        callback(item);
        setDropdownOpen(false);
    }

    return (
        <div className="w-full relative">
            <div className={`flex items-center w-full cursor-pointer border border-cgrey-200 px-4 py-[10px] rounded-lg justify-between ${className}`} onClick={handleDropdown}>
                <p className="text-sm font-normal text-white">{placeholder}</p>
                {dropdownOpen ? <Image
                    src={ArrowUp}
                    width="16"
                    height="16"
                    alt="Arrow down"
                /> : <Image
                    src={ArrowDown}
                    width="16"
                    height="16"
                    alt="Arrow down"
                />}
            </div>
            {dropdownOpen && <div className="absolute w-full cursor-pointer text-white flex flex-col mt-2 rounded-lg border border-cgrey-200">
                {dropdownList.map((item, index) => (
                    <div key={index} className={`items-center w-full px-4 py-[10px]  justify-between text-sm font-normal text-white ${className}`} onClick={() => handleSetValue(item)}>{item}</div>
                ))}
            </div>
            }
            {dropdownOpen && (<div className="fixed top-0 left-0 w-screen h-screen bg-[transparent]" onClick={() => setDropdownOpen(false)}></div>)}
        </div>
    )
}

export default Dropdown;

interface DropdownProps {
    dropdownList: string[];
    placeholder: string;
    className: string;
    callback: any;
}