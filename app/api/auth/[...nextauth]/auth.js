import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import process from 'process';
import jwt from "jsonwebtoken";

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
                    const response = await fetch(`http://localhost:8000/auth/signin`, {
                        method: "POST",
                        cache: "no-store",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    });

                    const data = await response.json();
                    const jsonString = JSON.stringify(data);
                    await (await cookies()).set("loginresponse", jsonString);
                    if(data.status === 200) {
                        return data;
                    } else {
                        return null;
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
        async jwt({user,token}) {
            if(user) {
                return user;
            }else{
                return token
            }
        },
        async session({session, token}) {
            session.user.token = token.data;
            session.user.data = jwt.decode(token.data);
            return session;
        },
    }
});