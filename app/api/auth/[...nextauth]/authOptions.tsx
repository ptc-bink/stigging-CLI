import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { Account } from "next-auth";
import { TokenSet } from "next-auth";

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
    // callbacks: {
    //     async jwt(token: any, account: any) {
    //         // Persist the OAuth access_token to the token right after signin
    //         if (account) {
    //             token.accessToken = account.access_token
    //         }
    //         return token
    //     },
    //     async session(session: any, token: any, user: any) {
    //         // Send properties to the client, like an access_token from a provider.
    //         session.accessToken = token.accessToken
    //         return session
    //     }
    // }

}

export default authOptions