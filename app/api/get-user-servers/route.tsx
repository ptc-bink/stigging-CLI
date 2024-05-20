import { NextRequest } from "next/server";
import { Url } from "url";

export async function POST(request: NextRequest) {
    try {
        const { userID, serverID } = await request.json();
        const axios = require("axios");

        let config = {
            method: "get",
            url: `${process.env.baseURL_back}/test/get-user-servers`,
        }

        const response = await axios.request(config);
        console.log(response.data);

        return Response.json(response.data);
    } catch (error) {
        console.error("Error creating user: ", error);
        return Response.json({ message: "Failed to create user" }, { status: 409 });
    }
}

interface responseProps {
    name: string;               // The name of the server
    id: string,                 // The ID fo the server
    icon: string,               // The URL of the server's icon
    giveaways: any              // An array of giveaways associated with the server
}