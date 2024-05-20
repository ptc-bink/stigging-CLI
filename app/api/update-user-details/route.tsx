import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { } = await request.json();
        const axios = require("axios");

        let config = {
            method: "put",
            url: `${process.env.baseURL_back}/test/update-user-details`,
        }

        const response = await axios.request(config);
        console.log(response.data);

        return Response.json(response.data);
    } catch (error) {
        console.error("Error creating user: ", error);
        return Response.json({ message: "Failed to create user" }, { status: 409 });
    }
}