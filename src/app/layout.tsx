import type { Metadata } from "next";
import { Jura, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const jura = Jura({
    weight: "300",
    style: "normal",
    variable: "--font-jura",
    subsets: ["latin"],
    display: "swap",
});

const zen = Zen_Maru_Gothic({
    weight: "300",
    style: "normal",
    variable: "--font-zen",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Pacific Solar Car",
    description: "Nothing Yet...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className={`${jura.variable} ${zen.variable} antialiased`}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}
