import Link from "next/link";
import Divider from "./divider";

export default function Header(props: any) {
    function HeaderButton(props: any) {
        return (
            <Link
                href={props.href}
                className={`h-full hover:bg-secondary cursor-pointer flex items-center pl-4 pr-4`}
            >
                {props.page}
            </Link>
        );
    }

    function DonateNow() {
        return (
            <Link
                href={"#donate"}
                className="h-4/6 ml-6 pl-5 pr-5 flex items-center rounded-md text-black bg-primary hover:text-white hover:bg-secondary"
            >
                DONATE NOW
            </Link>
        );
    }

    return (
        <>
            <div className="h-14 bg-black flex flex-row pl-4 pr-4 items-center">
                <div className="flex flex-col grow items-start">
                    <div className="font-bold text-sm">PACIFIC</div>
                    <div className="font-bold text-md text-primary">
                        SOLAR CAR PROJECT
                    </div>
                </div>

                <HeaderButton href="/" page="Home" />
                <HeaderButton href="#mission" page="Mission" />
                <HeaderButton href="#teams" page="Teams" />
                <HeaderButton href="#sponsors" page="Sponsors" />

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
                        percent: 22,
                    },
                    {
                        color: "000000",
                        percent: 32,
                    },
                    {
                        color: "FF5C02",
                        percent: 78,
                    },
                    {
                        color: "C1E288",
                        percent: 100,
                    },
                ]}
            />
        </>
    );
}
