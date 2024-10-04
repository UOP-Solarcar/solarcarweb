"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Divider from "./divider";

export default function Header() {
    const path = usePathname();

    function HeaderButton(props: any) {
        const active: boolean = (path == props.href);
    
        return (
            <>
                {active ? (
                    <Link
                        href={props.href}
                        className={`h-5/6 rounded-md bg-primary text-black hover:bg-secondary cursor-pointer flex items-center pl-4 pr-4 mr-2`}
                    >
                        {props.page}
                    </Link>
                ) : (
                    <Link
                        href={props.href}
                        className={`h-5/6 rounded-md bg-transparent text-white hover:bg-secondary cursor-pointer flex items-center pl-4 pr-4 mr-2`}
                    >
                        {props.page}
                    </Link>
                )}
            </>
        );
    }
    
    function DonateNow() {
        return (
            <Link
                // * Project Donation Site
                href={" https://pacific.scalefunder.com/cfund/project/35830"}
                target="_blank"
                className="h-4/6 ml-6 pl-5 pr-5 flex items-center rounded-md text-black bg-tertiary hover:text-white hover:bg-slate-600"
            >
                DONATE
            </Link>
        );
    }

    return (
        <>
            <div className="h-14 bg-black flex flex-row pl-4 pr-4 items-center">
                <div className="flex flex-col grow items-start">
                    <div className="font-bold text-sm">PACIFIC</div>
                    <div className="font-bold text-md text-primary">
                        <Link href="/"> SOLAR CAR PROJECT</Link>
                    </div>
                </div>

                <HeaderButton href="/" page="Home" />
                <HeaderButton href="/gallery" page="Gallery" />
                <HeaderButton href="/mission" page="Mission" />
                <HeaderButton href="/sponsors" page="Sponsors" />
                <HeaderButton href="/teams" page="Teams" />

                <DonateNow />
            </div>
            <Divider
                stops={[
                    {
                        color: "FF5C02",
                        percent: 0,
                    },
                    {
                        color: "000000",
                        percent: 20,
                    },
                    {
                        color: "000000",
                        percent: 45,
                    },
                    {
                        color: "FF5C02",
                        percent: 100,
                    },
                ]}
            />
        </>
    );
}
