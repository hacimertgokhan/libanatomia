"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus, Search, Filter } from "lucide-react";

const DocumentActions = () => {
    return (
        <div className="flex text-white flex-wrap items-center gap-4 mb-2 justify-between">
            <div className="flex items-center gap-2 w-full md:w-auto">
                <Input
                    type="text"
                    placeholder="Arama yap..."
                    className="w-full md:w-64"
                />
                <Search className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center text-white gap-2">
                <Button className="flex items-center gap-2 text-white">
                    <Plus className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

export default DocumentActions;
