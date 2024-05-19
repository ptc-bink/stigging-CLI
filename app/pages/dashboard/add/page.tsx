"use client"

import React, { useState } from "react";
import Image from "next/image";

import ArrowLeft from "@/public/avatar/arrow-left.svg"

const HarvestWinners: React.FC<IHarvestWinners> = () => {

    const [allocation, setAllocation] = useState<number>(22);
    const [mintHoldDays, setMintHoldDays] = useState<number>(21);
    const [secondaryBuyHoldDays, setSecondaryBuyHoldDays] = useState<number>(28);
    const [secondaryBuyHours, setSecondaryBuyHours] = useState<number>(72);
    const [secondaryBuyAmount, setSecondaryBuyAmount] = useState<number>(1);
    const [priceVoid, setPriceVoid] = useState<number>(0.00);
    const [isVoid, setIsVoid] = useState<number>(2);


    const handleSubmit = () => { }


    return (
        <div className="flex flex-col p-8 gap-4">
            <div className="w-3/5 flex flex-col gap-4">
                <div className="flex gap-6 items-center">
                    <div className="bg-cdark-200 border cursor-pointer hover:bg-cdark-100 border-cgrey-200 p-3 rounded-lg">
                        <Image
                            src={ArrowLeft}
                            width="24"
                            height="24"
                            alt="arrow left"
                        />
                    </div>
                    <p className="text-white text-2xl font-semibold">Add</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Allocation</p>
                            <input type="number" placeholder="Choose Allocation" value={allocation} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Mint hold days</p>
                            <input type="number" placeholder="Choose Mint hold days" value={mintHoldDays} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Secondary buy hold days</p>
                            <input type="number" placeholder="Choose Secondary buy hold days" value={secondaryBuyHoldDays} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Secondary buy hours</p>
                            <input type="number" placeholder="Choose Secondary buy hours" value={secondaryBuyHours} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Secondary buy amount</p>
                            <input type="number" placeholder="Choose Secondary buy amount" value={secondaryBuyAmount} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Price void</p>
                            <input type="number" placeholder="Choose Price void" value={priceVoid} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Is void</p>
                            <input type="number" value={isVoid} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                </div>
                <button className="flex self-end outline-none bg-white border border-[#EEEEEE] px-4 py-3 w-fit rounded-md text-[#16171B]" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default HarvestWinners;

interface IHarvestWinners { }