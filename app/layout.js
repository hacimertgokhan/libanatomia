import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/holders/Header";
import Session from "@/components/holders/providers/Session";
import {auth} from "@/app/api/auth/[...nextauth]/auth";
import {Toaster} from "@/components/ui/sonner.jsx";
import Footer from "@/components/holders/Footer.js";
import {Separator} from "@/components/ui/separator.jsx";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Libanatomia",
  description: "Libanatomia, Anatomi dalındaki bütün güncel kaynakları rahatlıkla paylaşıp okuyabileceğiniz akademik düzey bir etkileşim platformudur.",
};

export default async function RootLayout({children}) {
    const session = await auth();
    return (
        <html lang="en">
            <body
                className={`${notoSans.className} bg-[#09090B] flex flex-col items-center justify-center antialiased`}
            >
                <Session session={session}>
                    <Header session={session}/>
                    <main className={"w-[75%] h-screen p-4 flex items-center justify-center m-auto relative"}>
                        {children}
                        <Separator className={"bottom-0 w-full  bg-[#202020] h-[1px] absolute"}/>
                    </main>
                    <Toaster />
                    <Footer/>
                </Session>
            </body>
        </html>
    );
}
