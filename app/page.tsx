"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import Logo from "./components/Logo";

import DiscordSVG from "@/public/avatar/discord.svg"

export default function Page() {

  return (
    <div className="bg-cdark-100 h-screen flex justify-center items-center">
      <div className="grid gap-8 bg-center sm:bg-cdark-200 bg-transparent h-[348px] w-[393px] rounded-2xl border p-[50px] border-transparent sm:border-cdark-200">
        <div className="grid gap-4 w-full">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="grid gap-2 w-full text-center">
            <p className="text-white text-2xl leading-8 font-medium">
              Welcome to
            </p>
            <p className="text-white text-2xl leading-8 font-medium">
              MarketPlace Admin Panel
            </p>
            <p className="text-cgrey-900 text-base leading-6 font-normal">
              Login to your discord
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => signIn('discord')} className="flex items-center hover:cursor-pointer bg-cblue-500 rounded-lg px-6 py-3 border border-cblue-500 border-opacity-[0.08]">
            <p className=" text-white text-base font-semibold pr-2">
              Login with Discord
            </p>
            <Image
              src={DiscordSVG}
              width={20}
              height={14}
              alt="Discord"
            />
          </button>
        </div>
      </div>
    </div>
  );
}