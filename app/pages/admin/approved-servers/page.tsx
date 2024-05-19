"use client"

import React, { useContext, useState } from "react";
import Image from "next/image";

import { approvedDropdownList, approvedServerList } from "@/app/utils/_data";
import ServerCard from "@/app/components/ServerCard";

import Dropdown from "@/app/components/forms/Dropdown";
import SearchBtn from "@/app/components/forms/SearchBtn";
import AddServerModal from "@/app/components/forms/AddServerModal";

import Add from "@/public/avatar/add.svg"
import ArrowLeft from "@/public/avatar/arrow-left.svg"
import Driver from "@/public/avatar/driver.svg"
import AppContext from "@/app/contexts/AppContext";

const ApprovedServers: React.FC = () => {

    const { addServerModalOpen, setAddServerModalOpen } = useContext(AppContext);
    const [chain, setChain] = useState<string>("");

    const handleOpenModal = () => {
        setAddServerModalOpen(!addServerModalOpen);
    }

    return (
        <div className="flex flex-col gap-4 p-8 bg-cdark-100">
            <div className="flex flex-col">
                <div className="flex gap-6 items-center">
                    <div className="bg-cdark-200 border cursor-pointer hover:bg-cdark-100 border-cgrey-200 p-3 rounded-lg">
                        <Image
                            src={ArrowLeft}
                            width="24"
                            height="24"
                            alt="arrow left"
                        />
                    </div>
                    <p className="text-white text-2xl font-semibold">Approved Servers</p>
                </div>
                <div className="items-center w-full grid grid-cols-2 gap-4 pt-4 text-sm realtive">
                    <Dropdown
                        dropdownList={approvedDropdownList}
                        placeholder="select"
                        className="hover:bg-cdark-100 bg-cdark-200"
                        callback={setChain}
                    />
                    <div className="flex w-full text-sm font-normal">
                        <div className="flex flex-grow">
                            <SearchBtn
                                placeholder="Search giveaway"
                                endContent="Refresh"
                                endContentImg="Search servers..."
                            />
                        </div>
                        <button onClick={handleOpenModal} className="ml-2 flex justify-between w-fit items-center rounded-lg outline-none bg-white border border-[#EEEEEE] px-[10px] py-3">
                            <Image
                                src={Add}
                                width="16"
                                height="16"
                                alt="add button"
                            />
                            <p className="text-cdark-100">Create Giveaway</p>
                        </button>
                    </div>
                    {addServerModalOpen && (
                        <div className="flex fixed top-0 left-0 w-screen h-screen bg-[#141518]/30 backdrop-blur-sm justify-center items-center">
                            <AddServerModal />
                        </div>
                    )}
                </div>
            </div>
            {approvedServerList ? <div className="grid grid-cols-3 gap-4">
                {approvedServerList.map((item, index) => (
                    <ServerCard
                        key={index}
                        server={item.server}
                        createdBy={item.createdBy}
                        paymentExpires={item.paymentExpires}
                        marketChannel={item.marketChannel}
                        generalChannel={item.generalChannel}
                    />
                ))}
            </div> : <div className="flex flex-col gap-4 px-3 py-4 min-h-[calc(100vh-280px)] justify-center items-center">
                <Image
                    src={Driver}
                    width="32"
                    height="32"
                    alt="no server to show"
                />
                <div className="flex flex-col w-full text-center justify-center gap-2">
                    <p className="text-2xl font-medium text-white">No Server To Show</p>
                    <p className="text-base leading-[18px] font-normal text-[#939393]">Your trusted server will show here</p>
                </div>
            </div>
            }
            {addServerModalOpen && (
                <div className="flex fixed top-0 left-0 w-screen h-screen bg-[#141518]/30 backdrop-blur-sm justify-center items-center">
                    <AddServerModal />
                </div>
            )}

        </div>
    );
}

export default ApprovedServers;