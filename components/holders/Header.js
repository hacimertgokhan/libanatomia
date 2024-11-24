"use client";

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button";
import {EarthIcon, MailIcon} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";

const Header = ({session}) => {

    if (!session) return null;

    const ListItem = ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }

    return (
        <nav className={"w-full grid grid-cols-3 items-center relative justify-center place-items-center m-auto py-4"}>
            <h1 className={"font-bold flex flex-row items-center gap-1 justify-center"}><EarthIcon size={17}/>Libanatomia</h1>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Welcome</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                What is Libanatomia?
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Libanatomia is global library that every academic person or student can use.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/about-us" title="About us">
                                    Get more information about Libanatomia.
                                </ListItem>
                                <ListItem href="/development" title="Development">
                                    Get more information about development and roadmap.
                                </ListItem>
                                <ListItem href="/privacy-and-policy" title="Privacy and Policy">
                                    Get more information about privacy and policy.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Library</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                                <ListItem href="/lib/anatomy" title="Anatomy">
                                    Get more information about Libanatomia.
                                </ListItem>
                                <ListItem href="/lib/physicology" title="Physicology">
                                    Get more information about development and roadmap.
                                </ListItem>
                                <ListItem href="/lib/history" title="History">
                                    Get more information about privacy and policy.
                                </ListItem>
                                <ListItem href="/lib/other" title="Other">
                                    Get more information about privacy and policy.
                                </ListItem>
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                What is Libanatomia?
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Libanatomia is global library that every academic person or student can
                                                use.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                What is Libanatomia?
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Libanatomia is global library that every academic person or student can
                                                use.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/community/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Community
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/latest/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Discover
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"flex items-center justify-center gap-2 flex-row"}>
                <Button size={"sm"}>
                    <MailIcon/> Signin
                </Button>
            </div>
            <Separator orientation={"horizontal"} className={"absolute bottom-0 right-0 left-0 w-full"}/>
        </nav>
    );
};

export default Header;