import { NextRequest } from "next/server";
import { Url } from "url";

export async function POST(request: NextRequest) {
    try {
        const { serverID } = await request.json();
        const axios = require("axios");

        let config = {
            method: "get",
            url: `${process.env.baseURL_back}/testget-users?serverID=${serverID}`,
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
    username: string;           // The name of the user
    id: string,                 // The ID fo the server
    avatar: string,             // The URL of the user's avatar
}