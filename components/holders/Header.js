"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {EarthIcon, LogOutIcon, MailIcon, XIcon} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

const Header = ({session}) => {
    const router = useRouter();
    if (!session) return (
        <nav
            className={"m-auto flex flex-row gap-2 relative justify-between px-4 w-[75%] items-center text-[#E2E2E2] h-[60px] z-[30] py-3"}>
            <div className={"flex flex-row items-center justify-center gap-2"}>

                <h1 className={"font-bold text-xl flex flex-row items-center gap-1 justify-center"}>
                    <EarthIcon size={17}/>Libanatomia
                </h1>
                <Separator orientation="vertical" className={"w-[1px] relative bg-[#E2E2E2] h-[25px]"}/>
                <span className={"text-xs flex flex-row items-center gap-3 justify-center text-[14px]"}>
                    <Link href="/">Home</Link>
                    <Link href="/">Communitys</Link>
                    <Link href="/">Documents</Link>
                    <Link href="/">Notes</Link>
                </span>
            </div>

            <div className={"flex items-center justify-center gap-2 flex-row"}>
                <Button size={"sm"} className={" bg-[#E2E2E2] text-[#09090B] hover:text-[#09090B] hover:bg-[#E2E2E2]"} onClick={() => {
                    window.location.href = '/auth/signin'
                }}>
                    Signin
                </Button>
                or
                <Button size={"sm"} className={" bg-[#E2E2E2] text-[#09090B] hover:text-[#09090B] hover:bg-[#E2E2E2]"} onClick={() => {
                    window.location.href = '/auth/signin'
                }}>
                    Signup
                </Button>
            </div>
            <Separator orientation="horizontal" className={"w-full absolute left-0 right-0 bottom-0 bg-[#202020] h-[1px]"}/>
            <Separator className={"left-0 w-[1px] h-full top-0 absolute bg-[#202020]"}/>
            <Separator className={"right-0 w-[1px] h-full top-0 absolute bg-[#202020]"}/>
        </nav>
    );

    return (
        <nav
            className={"m-auto flex flex-row gap-2 relative justify-between px-4 w-[75%] items-center text-[#E2E2E2] h-[60px] z-[30] py-3"}>
            <div className={"flex flex-row items-center justify-center gap-2"}>

                <h1 className={"font-bold text-xl flex flex-row items-center gap-1 justify-center"}>
                    <EarthIcon size={17}/>Libanatomia
                </h1>
                <Separator orientation="vertical" className={"w-[1px] relative bg-[#E2E2E2] h-[25px]"}/>
                <span className={"text-xs flex flex-row items-center gap-3 justify-center text-[14px]"}>
                    <Link href="/">Home</Link>
                    <Link href="/">Communitys</Link>
                    <Link href="/documents">Documents</Link>
                    <Link href="/">Notes</Link>
                </span>
            </div>

            <div className={"flex items-center justify-center gap-2 flex-row"}>
                <Button size={"sm"} onClick={async () => {
                    router.push('/profile')
                }}>
                    {(session.user.data.fullname)}
                </Button>
                <Button className={"hover:text-red-400 hover:bg-red-200/10"} size={"sm"} onClick={async () => {
                    await signOut()
                }}>
                    <XIcon/>
                </Button>
            </div>
            <Separator orientation="horizontal"
                       className={"w-full absolute left-0 right-0 bottom-0 bg-[#202020] h-[1px]"}/>
            <Separator className={"left-0 w-[1px] h-full top-0 absolute bg-[#202020]"}/>
            <Separator className={"right-0 w-[1px] h-full top-0 absolute bg-[#202020]"}/>
        </nav>
)
    ;
};

export default Header;