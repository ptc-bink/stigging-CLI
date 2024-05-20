"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"

import Dashboard from "@/public/avatar/dashboard.tsx"
import Projects from "@/public/avatar/projects.tsx"
import Allocation from "@/public/avatar/allocation.tsx"
import Admin from "@/public/avatar/admin.tsx"
import Bot from "@/public/avatar/bot.tsx";
import { usePathname } from "next/navigation";

interface SideDataProps {
    label: string,
    link: string,
    image: any,
    isActive: boolean
}

const BigSidebar = () => {

    const pathname = usePathname();

    const [fill, setFill] = useState<string>("");
    const [sideData, setSideData] = useState<SideDataProps[]>([
        {
            label: "Dashboard",
            link: "/pages/dashboard",
            image: <Dashboard
                fill={fill}
            />,
            isActive: false,
        },
        {
            label: "Projects",
            link: "/pages/projects",
            image: <Projects
                fill={fill}
            />,
            isActive: false
        },
        {
            label: "Allocations",
            link: "/pages/allocations",
            image: <Allocation
                fill={fill}
            />,
            isActive: false
        },
        {
            label: "Admin",
            link: "/pages/admin",
            image: <Admin
                fill={fill}
            />,
            isActive: false
        },
        {
            label: "Bot",
            link: "/pages/bot",
            image: <Bot
                fill={fill}
            />,
            isActive: false
        },
    ])

    useEffect(() => {
        if (pathname !== "/") {
            const updatedSideData = sideData.map(item => {
                const isActive = pathname.includes(item.link);
                return {
                    ...item,
                    isActive,
                };
            });
            setSideData(updatedSideData);

            if (updatedSideData.some(item => item.isActive)) {
                setFill("white");
            }
        }
    }, [pathname]);

    return (
        <div className="flex flex-col">
            {sideData.map((side: any, index: number) => (
                <Link key={index} href={side.link}>
                    <div className={`flex flex-col p-6 items-center justify-center cursor-pointer  hover:bg-cdark-100 ${side.isActive ? "border-r border-r-white bg-cdark-100" : ""}`}>
                        {side.image}
                        <p className={`pt-2 text-base font-semibold ${side.isActive ? "text-white" : "text-[#939393]"}`}>{side.label}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BigSidebar;
