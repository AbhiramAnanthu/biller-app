import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET!,
        })
    ]
}

export const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }