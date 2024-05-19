"use client"

import React, { use, useContext, useState } from "react";
import Image from "next/image";

import Preview from "@/public/avatar/eye.svg"
import User from "@/public/avatar/user.svg"
import Avartar from "@/public/img/Avatar.png"

const PreviewCard: React.FC<PreviewCardProps> = ({ }) => {

    const handlePreviewEnter = () => { }

    return (
        <div className="w-full flex flex-col h-fit rounded-md gap-4 p-4 bg-[#1D1E22] border border-[#292A2E]">
            <div className="flex gap-2">
                <Image
                    src={Preview}
                    width="24"
                    height="24"
                    alt="preview"
                />
                <p className="text-white text-base font-semibold">Preview</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-sm bg-cgrey-200 border-l-[3px] border-[#15F115]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1 text-white">
                        <p className="text-base font-semibold">Title</p>
                        <p className="text-xs leading-[18px] font-normal">Description</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#202125] border border-[#292A2E]">
                        <Image
                            src={User}
                            width="24"
                            height="24"
                            alt="user image"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-xs leading-[18px] font-semibold">Expiry</label>
                        <p className="bg-[#393F4B] w-fit rounded-sm px-1 text-xs font-medium text-[#ECDEDB]">in a day</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-xs leading-[18px] font-semibold">Winning Role</label>
                        <p className="text-xs font-medium text-white">-</p>
                    </div>
                    <div className="gird gird-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-white text-xs leading-[18px] font-semibold">Chain</label>
                            <p className="text-white text-xs leading-[18px] font-medium">Ethereum</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white text-xs leading-[18px] font-semibold">Quantity</label>
                            <p className="text-white text-xs leading-[18px] font-medium">-</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-xs leading-[18px] font-semibold">Requirements</label>
                        <p className="text-white text-xs leading-[18px] font-medium">-</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-xs leading-[18px] font-semibold">Entrants</label>
                        <p className="text-white text-xs leading-[18px] font-medium">-</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-xs leading-[18px] font-semibold">Price:</label>
                        <p className="text-white text-xs leading-[18px] font-medium">Free</p>
                    </div>
                </div>
                <div className="border border-[#393A3D]"></div>
                <div className="flex gap-2 items-center justify-start">
                    <Image
                        src={Avartar}
                        width="24"
                        height="24"
                        alt="avatar icon"
                    />
                    <p className=" text-xs leading-[18px] font-normal text-white">Created By - ual0102<span className="border mx-1 rounded-full border-[#white]" />Today at 12:30:42</p>
                </div>
            </div>
            <button className="rounded outline-none px-6 py-3 bg-[#248047] w-fit text-white" onClick={handlePreviewEnter}>Enter</button>
        </div>
    )
}

export default PreviewCard;

interface PreviewCardProps {
}