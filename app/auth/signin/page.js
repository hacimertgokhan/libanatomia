"use client"

import React from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {GithubIcon, MailIcon} from "lucide-react";
import {toast} from "sonner";

const Page = () => {
    return (
        <div className={"h-screen w-screen flex flex-col gap-3 items-center justify-center"}>
            <Card className={"h-[300px] w-[400px]"}>
                <CardHeader className={"text-left relative"}>
                    <p className={"text-xs"}>Welcome to</p><h1 className={"font-bold"}>Libanatomia</h1>
                    <p className={"absolute right-5 top-5 text-xs"}>{new Date().toLocaleDateString()}</p>
                </CardHeader>
                <CardContent className={"flex flex-col w-full items-center justify-center gap-3"}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Your email address."/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Your password." />
                    </div>
                    <Button onClick={() => {
                        toast("Logged in successfully.", {
                            description: `Last login ${new Date().toLocaleDateString()}`,
                            action: {
                                label: "Checked",
                                onClick: () => console.log("Checked"),
                            },
                        })
                    }} className={"w-full"}>Signin</Button>
                    <br/>
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