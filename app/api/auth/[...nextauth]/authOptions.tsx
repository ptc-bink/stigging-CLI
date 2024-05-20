import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const scopes = ['identify', 'email']

console.log("api/auth/nextauth");
export const authOptions = {

    // Configure one or more authentication providers
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
            authorization: { params: { scope: scopes.join('') } },
        }),
    ],

}

export default authOptions