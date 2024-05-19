import React from "react";
import Image from "next/image";
import Link from "next/link";

import AdminSVG from "@/public/avatar/admin.tsx"
import AllowRight from "@/public/avatar/arrow-right.svg"

const Admin: React.FC = () => {
    return (
        <div className="flex flex-col h-full gap-8 p-8 bg-cdark-100 justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex rounded-lg bg-cdark-200 border border-cdark-100 p-3">
                    <AdminSVG />
                </div>
                <p className="text-[#FFFFFF] text-2xl font-medium">Invite Gib To your Server</p>
                <Link href="/pages/admin/approved-servers" className="flex items-center hover:cursor-pointer bg-white rounded-lg px-4 py-[10px] border border-white border-opacity-[0.08]">
                    <p className=" text-cdark-100 text-base font-semibold pr-2">
                        Go to Approved Servers
                    </p>
                    <Image
                        src={AllowRight}
                        width="16"
                        height="16"
                        alt="Discord"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Admin;