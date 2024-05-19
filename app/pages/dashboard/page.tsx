"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import GiveawayCard from "@/app/components/GiveawayCard";
import Dropdown from "@/app/components/forms/Dropdown";
import SearchBtn from "@/app/components/forms/SearchBtn";

import { giveawayList, dashboardDropdownList } from "@/app/utils/_data";

import Refresh from "@/public/avatar/refresh.svg"
import Add from "@/public/avatar/add.svg"

const Dashboard: React.FC<IDashboard> = () => {

    const [chainValue, setChainValue] = useState<string>("");

    useEffect(() => {
        console.log(chainValue);

    }, [
        chainValue
    ])

    return (
        <div className="flex flex-col gap-4 p-8 bg-cdark-100">
            <div className="flex flex-col">
                <p className="text-white text-2xl font-semibold">Dashboard</p>
                <div className="items-center w-full grid grid-cols-2 gap-4 pt-4 text-sm realtive">
                    <Dropdown
                        dropdownList={dashboardDropdownList}
                        placeholder="select"
                        className="hover:bg-cdark-100 bg-cdark-200"
                        callback={setChainValue}
                    />
                    <div className="flex w-full text-sm font-normal">
                        <div className="flex flex-grow">
                            <SearchBtn
                                placeholder="Search giveaway"
                                endContent="Refresh"
                                endContentImg={Refresh}
                            />
                        </div>
                        <Link href="/pages/dashboard/create-giveaway" className="ml-2 flex justify-between w-fit items-center rounded-lg outline-none bg-white border border-[#EEEEEE] px-[10px] py-3">
                            <Image
                                src={Add}
                                width="16"
                                height="16"
                                alt="add button"
                            />
                            <p className="text-cdark-100 md:block">Create Giveaway</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {giveawayList.map((item, index) => (
                    < GiveawayCard
                        key={index}
                        chain={item.chain}
                        entrants={item.entrants}
                        quantity={item.quantity}
                        enterDate={item.chain}
                        timeRemaining={item.timeRemaining}
                        status={item.status}
                        giveawayCardInfo={item.giveawayCardInfo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

interface IDashboard { };