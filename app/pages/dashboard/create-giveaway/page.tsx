"use client"

import React, { useState } from "react";
import Image from "next/image";

import Select, { ActionMeta, OnChangeValue, StylesConfig } from 'react-select';

import Dropdown from "@/app/components/forms/Dropdown";
import PreviewCard from "@/app/components/PreviewCard";
import { chainList, giveawayTypeList, winningRoleList, restrictedRolesList, requiredRolesList } from "@/app/utils/_data";
import ArrowLeft from "@/public/avatar/arrow-left.svg"

const CreateGiveaway: React.FC = () => {

    const styles: StylesConfig<DataOption, true> = {
        multiValue: (styles) => ({ ...styles, backgroundColor: '#202125', borderRadius: "10px", fontSize: "15px", padding: "1px 5px 1px 2px", gap: "0px" }),
        multiValueLabel: (styles) => ({ ...styles, color: "#939393" }),
        multiValueRemove: (styles) => ({ ...styles, color: "#939393", ":hover": { color: "#141518" } }),
        control: (styles) => ({ ...styles, backgroundColor: "#141518", border: "1px", borderColor: "#292A2E", borderRadius: "8px", gap: "4px", padding: "10px 0px 10px 0px" }),
        container: (styles) => ({ ...styles, fontSize: "14px" }),
        group: (styles) => ({ ...styles, paddingLeft: "10px" }),
        clearIndicator: (styles) => ({ ...styles, padding: "0px 0px 0px 0px" }),
        indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "transparent" }),
        dropdownIndicator: (styles) => ({ ...styles, padding: "0px 15px 0px 0px" }),
        indicatorsContainer: (styles) => ({ ...styles, alignItems: "start", paddingTop: "5px" }),
        menu: (styles) => ({ ...styles, backgroundColor: "#141518" }),
        menuList: (styles) => ({ ...styles, color: "#FFFFFF", "::part": { ":hover": { color: "black", backgroundColor: "" } }, }),
    };

    const orderOptions = (values: DataOption[]): DataOption[] => { return [...values] };

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [expiresDate, setExpiresDate] = useState<string>("2024-01-01");
    const [expiresHour, setExpiresHour] = useState<string>("00:00");
    const [chain, setChain] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const [type, setType] = useState<string>("");
    const [winningRole, setWinningRole] = useState<string>("");
    const [restrictedRoles, setRestrictedRoles] = useState<DataOption[]>([]);
    const [requiredAllRoles, setReqiuredAllRoles] = useState<boolean>(false);
    const [requiredRoles, setReqiuredRoles] = useState<DataOption[]>([]);
    const [price, setPrice] = useState<number>(0.00001);
    const [links, setLinks] = useState<string>("");
    const [requirements, setRequirements] = useState<string>("");

    const handleRestrictedRoles = (
        newValue: OnChangeValue<DataOption, true>,
    ) => {
        setRestrictedRoles(orderOptions(newValue as DataOption[]));
    };

    const handleRequiredRoles = (
        newValue: OnChangeValue<DataOption, true>,
    ) => {
        setReqiuredRoles(orderOptions(newValue as DataOption[]));
    };

    const handleSubmit = () => {
        console.log("handle submit");

    }

    return (
        <div className="grid grid-cols-2 gap-8 p-8 bg-cdark-100">
            <div className="flex flex-col gap-4">

                <div className="flex gap-6 items-center">
                    <div className="bg-cdark-200 border cursor-pointer hover:bg-cdark-100 border-cgrey-200 p-3 rounded-lg">
                        <Image
                            src={ArrowLeft}
                            width="24"
                            height="24"
                            alt="arrow left"
                        />
                    </div>
                    <p className="text-white text-2xl font-semibold">Create Giveaway</p>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    {/* Title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-normal text-white">Title*</p>
                        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                    </div>
                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-normal text-white">Description*</p>
                        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} className="text-white text-start text-sm h-[65px] outline-none font-medium placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                    </div>
                    {/* Expires */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-normal text-white">Expires*</p>
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <input type="date" placeholder="31/05/2024" onChange={(e) => setExpiresDate(e.target.value)} value={expiresDate} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-white px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                            <input type="time" placeholder="" onChange={(e) => setExpiresHour(e.target.value)} value={expiresHour} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-white px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                    {/* Chain & Quantity */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Chain*</p>
                            <Dropdown
                                dropdownList={chainList}
                                placeholder="Ethereum"
                                className="hover:bg-cdark-200 bg-cdark-100"
                                callback={setChain}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Quantity*</p>
                            <input type="number" placeholder="0" onChange={(e) => setQuantity(e.target.valueAsNumber)} value={quantity} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                    {/* Type & Winning role */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Type*</p>
                            <Dropdown
                                dropdownList={giveawayTypeList}
                                placeholder="Raffle"
                                className="hover:bg-cdark-200 bg-cdark-100"
                                callback={setType}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Winning Role*</p>
                            <Dropdown
                                dropdownList={winningRoleList}
                                placeholder="Select winning role"
                                className="hover:bg-cdark-200 bg-cdark-100"
                                callback={setWinningRole}
                            />
                        </div>
                    </div>
                    {/* Restricted Roles & Required Roles */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Restricted Roles*</p>
                            <div>
                                <Select
                                    value={restrictedRoles}
                                    isMulti
                                    styles={styles}
                                    name="colors"
                                    className="bg-[#141518]"
                                    classNamePrefix=""
                                    onChange={handleRestrictedRoles}
                                    options={restrictedRolesList}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Required Roles*</p>
                            <div>
                                <Select
                                    value={requiredRoles}
                                    isMulti
                                    styles={styles}
                                    name="colors"
                                    className="bg-[#141518]"
                                    classNamePrefix=""
                                    onChange={handleRequiredRoles}
                                    options={requiredRolesList}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Required all roles */}
                    <div className="flex gap-2">
                        <input type="checkbox" checked={requiredAllRoles} onChange={(e) => setReqiuredAllRoles(!requiredAllRoles)} className="rounded-[4px]" />
                        <p className="text-sm font-normal">Required all roles</p>
                    </div>
                    {/* Price */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-normal text-white">Price*</p>
                        <input type="number" step="0.00001" placeholder="0.00001" min="0.00001" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                    </div>
                    {/* Links & Requirements */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Links</p>
                            <input type="url" placeholder="" value={links} onChange={(e) => setLinks(e.target.value)} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-white">Requirements</p>
                            <input type="text" placeholder="" value={requirements} onChange={(e) => setRequirements(e.target.value)} className="text-white text-sm font-medium outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#939393] px-3 py-[10px] border border-cgrey-200 bg-[#141518] rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <div onClick={handleSubmit} className="flex justify-center px-8 w-fit py-3 border border-[#EEEEEE]  rounded-lg bg-white text-sm leading-4 font-medium">submit</div>
                </div>
            </div>
            <PreviewCard />
        </div>
    );
}

export default CreateGiveaway;

interface DataOption {
    value: string;
    label: string;
}

interface serverRole {
    id: string
    color: string
    name: string
}