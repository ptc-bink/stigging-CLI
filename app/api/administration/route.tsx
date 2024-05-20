import { NextRequest } from "next/server";
import qs from "qs";

// Fetch a inscriptions using wallet address
export async function GET(_request: NextRequest) {
    try {
        const axios = require("axios");

        let config = {
            method: "get",
            url: `${process.env.baseURL_back}/api/raffle/get-raffles`,
        };

        const response = await axios.request(config);
        console.log(response);

        return Response.json(response.data);
    } catch (e) {
        console.log(e);
        return Response.json({ message: "Error in request" }, { status: 400 });
    }
}

// Fetch a inscriptions using wallet address

export async function POST(request: NextRequest) {
    try {
        // const { inscriptionId, paymentAddress, ordinalPublicKey, walletType } = await request.json();
        const axios = require("axios");

        console.log("response ============================================================================================================>");


        let config = {
            method: "get",
            // url: `${process.env.baseURL_back}/test/user`,
            url: `${process.env.baseURL_back}/test/harvest`,
            // method: "put",
            // url: `${process.env.baseURL_back}/test/administration-trusted-servers`,
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // data: qs.stringify({
            //     "name": "Game Theory",
            //     "redisKey": "gameTheory",
            //     "paymentExpires": "32504682506",
            //     "Market_Channel_ID": "1194710643928989877",
            //     "General_Channel_ID": "1194488184134967296",
            //     "Submit_Wallet_ID": "1194332119091126355",
            //     "Database": "gametheory",
            //     "Vesting_Channel_ID": "1206541360228864040",
            //     "Reminder_Channel_ID": "1234457579334144040",
            //     "Winners_Channel_ID": "1234457626461474908",
            //     "Supported_Wallets": ["ETH, BTC"]
            // }),
        };

        // console.log(config);
        const response = await axios.request(config);
        console.log(response.data);

        return Response.json(response.data);
    } catch (error) {
        console.error("Error creating user: ", error);
        return Response.json({ message: "Failed to create user" }, { status: 409 });
    }
}
