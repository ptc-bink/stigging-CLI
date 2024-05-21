import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import DiscordProvider from 'next-auth/providers/discord';
const scopes = ['identify'];

export const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID || "",
            clientSecret: process.env.CLIENT_SECRET || "",
            authorization: { params: { scope: scopes.join(' ') } },
        }),
    ],
    callbacks: {
        async signIn(user: any) {
            try {
                console.log(true);
            } catch (error) {
                console.error('Error during sign in:', error);
                return false
            }
            return true;
        }
    }

}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

    return await NextAuth(req, res, authOptions)
}