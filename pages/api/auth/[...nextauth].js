import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // profile(profile) {
      //   return {
      //     id: profile.id.toString(),
      //     name: profile.name || profile.login,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //   };
      // },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    jwt: true,

    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    // verificationOptions: {
    //   algorithms: ["HS256"],
    // },
    encrypt: true,
  },
  pages: {
    signIn: "/sign-up",
  },
});
