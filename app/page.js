import React from 'react';
import {FlipWords} from "@/components/ui/flip-words.jsx";
import {Spotlight} from "@/components/ui/spotlight.jsx";

const Page = () => {
    const words = ["Anatomy", "Physiology", "Terms", "Anatomical History"];
    return (
        <div className={"w-full m-auto p-12 h-full text-left"}>
            <Spotlight />
            <div className={"h-[15rem] flex items-start justify-center flex-col"}>
                <div className={"text-left font-bold text-3xl w-full flex flex-row gap-2 items-end"}><h1
                    className={"text-8xl text-[#e2e2e2]"}>Libanatomia</h1></div>
                <div className="text-4xl font-normal">
                    <FlipWords words={words}/>
                    <p className={"ml-2 text-[#e2e2e2]"}>is not that hard anymore.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;