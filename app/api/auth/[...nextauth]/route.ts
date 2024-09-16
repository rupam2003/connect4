
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const authOptions : NextAuthOptions = {providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
  ],
  
  callbacks: {
    

    async redirect({ url, baseUrl }) {
      return baseUrl
    },

  }
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}
