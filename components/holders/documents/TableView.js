"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useRouter} from "next/navigation";

const invoices = [
    {
        docs_id: "0",
        invoice: "Hacı Mert Gökhan",
        paymentStatus: "Temel Kavramlar",
        paymentMethod: "Anatomi - Temel kavramlar",
        totalAmount: new Date().toLocaleString("en-US"),
    },
]

export function DocumentTableView() {
    const router = useRouter();
    return (
        <Table className={"bg-[#09090B] w-full h-full text-[#E2E2E2]"}>
            <TableHeader className={"bg-[#09090B] w-full h-full text-[#E2E2E2] hover:bg-[#09090B]"}>
                <TableRow className={"bg-[#09090B] w-full h-full text-[#E2E2E2] hover:bg-[#09090B]"}>
                    <TableHead className={"bg-[#09090B] text-[#E2E2E2] hover:bg-[#09090B]"}>#</TableHead>
                    <TableHead className={"bg-[#09090B] text-[#E2E2E2] hover:bg-[#09090B]"}>Shared by</TableHead>
                    <TableHead className={"bg-[#09090B] text-[#E2E2E2] hover:bg-[#09090B]"}>Title</TableHead>
                    <TableHead className={"bg-[#09090B] text-[#E2E2E2] hover:bg-[#09090B]"}>Description</TableHead>
                    <TableHead className="text-right text-[#E2E2E2]">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className={"bg-[#09090B] cursor-pointer w-full h-full text-[#E2E2E2] hover:bg-[#09090B]"}>
                {invoices.map((invoice, index) => (
                    <TableRow key={invoice.invoice} onClick={() => { router.push(`/documents/${invoice.docs_id}`) }}>
                        <TableCell className="font-medium">{invoice.docs_id}</TableCell>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
