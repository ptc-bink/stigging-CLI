"use client"

import React, { useState } from "react";
import Image from "next/image";

import CardLogo from "@/public/avatar/cardLogo.svg"
import ArrowDown from "@/public/avatar/arrow-down.svg"
import ArrowUp from "@/public/avatar/arrow-up.svg"
import Edit from "@/public/avatar/edit.svg"
import Cancel from "@/public/avatar/close-circle.svg"

const GiveawayCard: React.FC<GiveawayCardProps> = ({ chain, entrants, quantity, enterDate, timeRemaining, status, giveawayCardInfo }) => {

    const detailItem = (index: number, item: string) => {
        return (
            <div className="flex gap-1 hover:bg-cgrey-200">
                <Image
                    src={Cancel}
                    width="16"
                    height="16"
                    alt={index + "th cancel"}
                />
                <p className="text-xs leading-[18px] font-medium text-[#939393]">{index}. {item}</p>
            </div>
        )
    }

    const [detailOpen, setDetailOpen] = useState<boolean>(false);

    const handleDetailOpen = () => {
        setDetailOpen(!detailOpen);
    }

    return (
        <div className="flex flex-col p-6 gap-6 rounded-2xl border border-cgrey-200">
            <div className="flex items-center gap-4">
                <div className="bg-[#202125] border border-[#292A2E] rounded-lg p-3">
                    <Image
                        src={CardLogo}
                        width='24'
                        height='24'
                        alt="card logo"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-normal">Xborg: Prometheus Chest Plate from SAFFO!!</p>
                    <p className="text-[#939393] text-xs leading-[18px] font-normal">1219501813854896239542</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-row-2">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Chain:</p>
                        <p className="text-white text-sm font-semibold">{chain}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Entrants:</p>
                        <p className="text-white text-sm font-semibold">{entrants}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Quantity:</p>
                        <p className="text-white text-sm font-semibold">{quantity}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Enter date:</p>
                        <p className="text-white text-sm font-semibold">{enterDate}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Time remaining:</p>
                        <p className="text-white text-sm font-semibold">{timeRemaining}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-[#939393] text-xs leading-[18px] font-normal">Status:</p>
                        {status === "active" && (
                            <div className="px-1 w-fit rounded-sm bg-[#3F904E] bg-opacity-[0.16] text-xs leading-[18px] font-medium text-[#3F904E]">Active</div>
                        )}
                        {status === "postpone" && (
                            <div className="px-1 w-fit rounded-sm bg-[#FFD105] bg-opacity-[0.16] text-xs leading-[18px] font-medium text-[#FFD105]">Postpone</div>
                        )}
                    </div>
                </div>
            </div>
            {detailOpen &&
                <div className="flex flex-col rounded-lg">
                    <div className="grid grid-rows-10 grid-flow-col gap-y-[1.5px] border border-cgrey-200 rounded-t-lg px-1 py-[10px] bg-transparent">
                        {giveawayCardInfo.map((item, index) => (
                            detailItem(index + 1, item)
                        ))}
                    </div>
                    <div className="flex justify-center items-center bg-cgrey-200 gap-1 px-4 py-2 rounded-b-lg">
                        <Image
                            src={Cancel}
                            width="16"
                            height="16"
                            alt="cancel"
                        />
                        <p className="text-xs leading-[18px] font-medium text-[#939393]">Not Finished Yet</p>
                    </div>
                </div >
            }
            < div className="flex justify-between gap-2" >
                {
                    detailOpen ? (
                        <button onClick={handleDetailOpen} className="flex gap-2 hover:bg-cdark-200 transition-all justify-center items-center bg-transparent outline-none border border-cgrey-200 rounded-lg px-[10px] py-4 w-full" >
                            <p className="text-white text-sm font-normal">Hide</p>
                            <Image
                                src={ArrowUp}
                                width="16"
                                height="16"
                                alt="arrow down"
                            />
                        </button>
                    ) : (
                        <button onClick={handleDetailOpen} className="flex gap-2 hover:bg-cdark-200 transition-all justify-center items-center bg-transparent outline-none border border-cgrey-200 rounded-lg px-[10px] py-4 w-full">
                            <p className="text-white text-sm font-normal">Details</p>
                            <Image
                                src={ArrowDown}
                                width="16"
                                height="16"
                                alt="arrow down"
                            />
                        </button>
                    )}
                {
                    status === "active" && (
                        <button className="flex gap-2 justify-center items-center hover:bg-cdark-200 bg-transparent outline-none border border-cgrey-200 rounded-lg px-[10px] py-4 w-fit">
                            <p className="text-white text-sm font-normal">Edit</p>
                            <Image
                                src={Edit}
                                width="16"
                                height="16"
                                alt="edit"
                            />
                        </button>
                    )
                }
            </div >
        </div >
    )
}

export default GiveawayCard;

interface GiveawayCardProps {
    chain: string;
    entrants: number;
    quantity: number;
    enterDate: string;
    timeRemaining: string;
    status: string;
    giveawayCardInfo: string[]
}