import React from 'react';
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient.jsx";
import {FlipWords} from "@/components/ui/flip-words.jsx";
import {Button} from "@/components/ui/button.jsx";

const Page = () => {
    const words = ["Anatomy", "Physiology", "Terms", "Anatomical History"];
    return (
        <BackgroundGradientAnimation>
            <div className="h-[40rem] flex-col w-[40rem] flex justify-center items-start m-auto px-4">
                <div className={"text-left font-bold text-3xl w-full flex flex-row gap-2 items-end"}><h1
                    className={"text-8xl"}>Libanatomia</h1></div>
                <div className="text-4xl font-normal">
                    <h1>
                        <FlipWords words={words}/>
                    </h1>
                    <p className={"ml-2"}>is not that hard anymore.</p>
                </div>
            </div>
            <div className={"w-[40rem] m-auto items-center flex justify-center z-[20] h-fit"}>
                <p>Libanatomia, The platform that contains everything about Anatomy.</p>
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Page;