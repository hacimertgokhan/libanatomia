import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import process from 'process';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    trustHost: true,
    trustHostedDomain: true,

    providers: [
        CredentialsProvider({
            id: "database",
            name: "database",
            credentials: {
                email: {
                    label: "Email: ",
                    type: "text",
                    placeholder: "Enter your email address.",
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "Enter your password.",
                }
            },
            async authorize(credentials) {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/auth/signin`, {
                        method: "POST",
                        cache: "no-store",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials?.email,
                            password: credentials?.password,
                        }),
                    });

                    const data = await response.json();
                    const jsonString = JSON.stringify(data);
                    console.log(jsonString)
                    await (await cookies()).set("loginresponse", jsonString);
                    if (data?.message ==null) {
                        return Promise.resolve(data)
                    } else {
                        return data;
                    }
                } catch (error) {
                    console.log("Authentication error:", error);
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async redirect({url, baseUrl}) {
            return process.env.BASEURL;
        },
        async jwt({token, user, trigger, session}) {
            if (user) {
                token.user = {...user};
            }
            if (trigger === "update" && session) {
                token = {...token, user: session};
                return token;
            }
            return token;
        },
        async session({session, token}) {
            session = token.user;
            return session;
        },
    }
});