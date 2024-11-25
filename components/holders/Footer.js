import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import {EarthIcon, GithubIcon, MailIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.jsx";

const Footer = () => {
    return (
        <div className={"m-auto flex flex-row gap-2 relative justify-between px-4 w-[75%] items-center text-[#E2E2E2] h-[60px] z-[30] py-3"}>
            <p>&copy; Libanatomia, All rights reserved.</p>
            <div className={"flex flex-row items-center justify-items-center gap-3"}>
                <Button><GithubIcon/></Button>
                <Button><EarthIcon/></Button>
                <Button><MailIcon/></Button>
            </div>
            <Separator className={"left-0 w-[1px] bg-[#202020] h-full top-0 absolute"}/>
            <Separator className={"right-0 w-[1px] bg-[#202020] h-full top-0 absolute"}/>
        </div>
    );
};

export default Footer;