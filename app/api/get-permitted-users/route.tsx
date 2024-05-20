import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { serverID } = await request.json();
        const axios = require("axios");

        let config = {
            method: "get",
            url: `${process.env.baseURL_back}/test/get-permitted-users?serverID=${serverID}`,
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
    fields: any             // An array of field information objects from the SQL query
    data: any               // An array of permitted users in the server
}