import { NextRequest } from "next/server";
import qs from "qs";

export async function POST(request: NextRequest) {
    try {
        const { serverID, userID, vestingReports } = await request.json();
        const axios = require("axios");

        let config = {
            method: "put",
            url: `${process.env.baseURL_back}/test/update-permitted-users`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify({
                serverID,
                userID,
                vestingReports,
            }),
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
    data: any                // JSON object containing a message field
}