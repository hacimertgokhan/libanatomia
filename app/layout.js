import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/holders/Header";
import Session from "@/components/holders/providers/Session";
import {auth} from "@/app/api/auth/[...nextauth]/auth";
import {Toaster} from "@/components/ui/sonner.jsx";

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
                className={`${notoSans.className} antialiased`}
            >
                <Session session={session}>
                    <Header session={session}/>
                    {children}
                    <Toaster />
                </Session>
            </body>
        </html>
    );
}
