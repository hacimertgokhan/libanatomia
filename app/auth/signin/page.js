"use client"

import React, {useActionState, useEffect, useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {GithubIcon, MailIcon} from "lucide-react";
import {toast} from "sonner";
import {signIn} from "next-auth/react";
import {getCookie} from "cookies-next";
const Page = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signInAction = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast("Hey, watch out !", {
                description: "Please specify a valid email address and password.",
            })
        }

        try {
            const result = await signIn("database", {
                email,
                password,
                redirect: false,
            });

            const login_Response = getCookie("loginresponse");
            const parse = JSON.parse(login_Response)
            if (parse?.status !== 200) {
                return toast("Oops, something went wrong!", {
                    description: "Hey, I am sorry but something went wrong.",
                })
            } else {
                window.location.href = '/'
            }

            return toast("Yuppyy ! You're now logged in!", {
                description: "Have a good time with Libanatomia !",
            })
        } catch (error) {
            return toast("Oops, something went wrong!", {
                description: "Hey, I am sorry but something went wrong.",
            })
        }
    };

    return (
        <div className={"h-screen w-screen flex flex-col gap-3 items-center justify-center"}>
            <Card className={"h-[300px] w-[400px]"}>
                <CardHeader className={"text-left relative"}>
                    <p className={"text-xs"}>Welcome to</p><h1 className={"font-bold"}>Libanatomia</h1>
                    <p className={"absolute right-5 top-5 text-xs"}>{new Date().toLocaleDateString()}</p>
                </CardHeader>
                <CardContent>
                    <form className={"flex flex-col w-full items-center justify-center gap-3"} onSubmit={signInAction}>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={(e) => {setEmail(e.currentTarget.value)}} type="email" id="email" placeholder="Your email address."/>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(e) => {setPassword(e.currentTarget.value)}} type="password" id="password" placeholder="Your password."/>
                        </div>
                        <Button type={"submit"} className={"w-full"}>Signin</Button>
                    </form>
                </CardContent>
            </Card>
            <Card className={"h-[80px] flex p-4 flex-col items-center justify-center w-[400px]"}>
                <div className={"flex h-fit flex-row w-full items-center justify-center gap-3"}>
                    <Button className={"w-full"}><GithubIcon size={17}/></Button>
                    <Button className={"w-full"}><MailIcon size={17}/></Button>
                </div>
            </Card>
        </div>
    );
};

export default Page;