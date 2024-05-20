import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { userID, serverID } = await request.json();
        const axios = require("axios");

        let config = {
            method: "get",
            url: `${process.env.baseURL_back}/test/get-user-details?serverID=${serverID}&userID=${userID}`,
        }

        const response = await axios.request(config);
        console.log(response.data);

        return Response.json(response.data);
    } catch (error) {
        console.error("Error creating user: ", error);
        return Response.json({ message: "Failed to create user" }, { status: 409 });
    }
}