"use client";

import Image from "next/image";

import Logo from "./components/Logo";

import DiscordSVG from "@/public/avatar/discord.svg"
import { useState } from "react";

// import { useDiscordLogin, UseDiscordLoginParams } from 'react-discord-login';

export default function Page() {

  // const discordLoginParams: UseDiscordLoginParams = {
  //   clientId: '1241478036428161024',
  //   redirectUri: "localhost:3000",
  //   responseType: 'token', // or 'code'
  //   scopes: ['identify', 'email'],
  //   onSuccess: (response: any) => {
  //     // Handle successful login
  //     console.log('Login successful:', response);
  //   },
  //   onFailure: (error: any) => {
  //     // Handle login failure
  //     console.error('Login failed:', error);
  //   },
  // };

  // const { buildUrl, isLoading } = useDiscordLogin(UseDiscordLoginParams);

  const [userData, setUserData] = useState(null);

  const handleLogin = async () => {
    try {
      window.location.href = "https://discord.com/oauth2/authorize?client_id=1241478036428161024&permissions=633318697598967&response_type=code&redirect_uri=localhost%3A3000&scope=applications.commands.permissions.update+presences.write+dm_channels.read+relationships.read+applications.entitlements+applications.builds.read+webhook.incoming+rpc.screenshare.write+rpc.video.read+identify+connections+guilds.members.read+rpc.notifications.read+openid+guilds+gdm.join+rpc.voice.read+rpc.video.write+rpc.activities.write+messages.read+applications.commands+activities.read+relationships.write+role_connections.write+dm_channels.messages.read+dm_channels.messages.write+presences.read+voice+activities.write+applications.store.update+applications.builds.upload+bot+rpc.screenshare.read+rpc.voice.write+guilds.join+rpc+email";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-cdark-100 h-screen flex justify-center items-center">
      <div className="grid gap-8 bg-center bg-cdark-200 h-[348px] w-[393px] rounded-2xl border p-[50px] border-cdark-200">
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
          <button onClick={handleLogin} className="flex items-center hover:cursor-pointer bg-cblue-500 rounded-lg px-6 py-3 border border-cblue-500 border-opacity-[0.08]">
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
