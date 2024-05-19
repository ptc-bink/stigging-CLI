"use client"

import React, { useState } from "react";
import Image from "next/image";

import ArrowLeft from "@/public/avatar/arrow-left.svg"

const HarvestWinners: React.FC<IHarvestWinners> = () => {

    const handleCsvBtn = () => { }
    const handleJsonBtn = () => { }
    const handleHumanReadableBtn = () => { }

    return (
        <div className="flex flex-col p-8 gap-4">
            <div className="flex justify-between">
                <div className="flex gap-6 items-center">
                    <div className="bg-cdark-200 border cursor-pointer hover:bg-cdark-100 border-cgrey-200 p-3 rounded-lg">
                        <Image
                            src={ArrowLeft}
                            width="24"
                            height="24"
                            alt="arrow left"
                        />
                    </div>
                    <p className="text-white text-2xl font-semibold">Harvest Winners</p>
                </div>
                <div className="flex gap-2">
                    <button className="outline-none bg-[#5865F2] border border-[#5865F2] px-4 py-3 w-fit rounded-md" onClick={handleCsvBtn}>CSV</button>
                    <button className="outline-none bg-[#5865F2] border border-[#5865F2] px-4 py-3 w-fit rounded-md" onClick={handleJsonBtn}>JSON</button>
                    <button className="outline-none bg-[#5865F2] border border-[#5865F2] px-4 py-3 w-fit rounded-md" onClick={handleHumanReadableBtn}>Human Readable</button>
                </div>
            </div>
            <div className="rounded-2xl border border-cgrey-200 bg-[#141518] text-white text-base font-normal h-[calc(100vh-220px)]">affsasfasd</div>
        </div>
    );
}

export default HarvestWinners;

interface IHarvestWinners { }