import type { Metadata } from "next";
import localFont from "next/font/local";
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
                <script
                    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
                    integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={`${jura.variable} ${zen.variable} antialiased`}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    );
}
