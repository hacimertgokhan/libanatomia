"use client"

import React from 'react';
import {DocumentTableView} from "@/components/holders/documents/TableView.js";
import DocumentActions from "@/components/holders/documents/DocumentActions.js";

const Page = () => {
    return (
        <div className={"w-full p-4 h-full"}>
            <DocumentActions/>
            <DocumentTableView/>
        </div>
    );
};

export default Page;