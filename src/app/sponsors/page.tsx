import Image from "next/image";
import Link from "next/link";

import pdmLogo from "@/assets/sponsor/PDMLogoColor.png";
import shulMotorsLogo from "@/assets/sponsor/3ShulMotors.png";
import pmtLogo from "@/assets/sponsor/PMT.webp";
import homeDepotLogo from "@/assets/sponsor/HomeDepot.png";
import tapLogo from "@/assets/sponsor/TAP-Logo.png";
import weldMonkeyLogo from "@/assets/sponsor/weldmonkey.png";
import maxeonLogo from "@/assets/sponsor/maxeon.png";
import solidworksLogo from "@/assets/sponsor/SolidWorks.jpg";
import ansysLogo from "@/assets/sponsor/ansys.jpg";
import westCoastCanvasLogo from "@/assets/sponsor/westcoastcanvas.webp";
import regeneronLogo from "@/assets/sponsor/regeneron.png";
import aascLogo from "@/assets/sponsor/aasc.png";
import mesaLogo from "@/assets/sponsor/mesa.png";
import soecsLogo from "@/assets/sponsor/soecs.png";


function SponsorWidget(props: any) {
    return (
        <div className="space-y-4">
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold items-center text-center">
                    {props.name}
                </h3>
                <div className="h-[10px]"></div>
                <div className="">
                    <Link href={props.href} target="_blank">
                        <Image
                            width={props.pic.width}
                            height={props.pic.height}
                            alt={`${props.name} pic`}
                            src={props.pic.src}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Sponsors() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div
                    id="leads"
                    className="flex flex-col p-[20px] w-[900px] self-center left-auto right-auto"
                >
                    <div className="text-center text-6xl">Our Sponsors</div>
                    <div className="h-20" />
                    <div className="w-[900px] left-0 right-0 pb-10">
                        <div className="grid grid-cols-3 gap-6">
                            <SponsorWidget
                                name="PDM Steel"
                                pic={pdmLogo}
                                href={"https://pdmsteel.com/"}
                            />
                            <SponsorWidget
                                name="3 Shul Motors"
                                pic={shulMotorsLogo}
                                href={"https://3shulmotors.com/"}
                            />
                            <SponsorWidget
                                name="PMT"
                                pic={pmtLogo}
                                href={"https://www.patzmandt.com/"}
                            />
                            <SponsorWidget
                                name="Home Depot"
                                pic={homeDepotLogo}
                                href={"https://www.homedepot.com/"}
                            />
                            <SponsorWidget
                                name="TAP Plastic"
                                pic={tapLogo}
                                href={"https://www.tapplastics.com/"}
                            />
                            <SponsorWidget
                                name="Weld Monkey"
                                pic={weldMonkeyLogo}
                                href={"https://weldmonkey.com/"}
                            />
                            <SponsorWidget
                                name="Maxeon"
                                pic={maxeonLogo}
                                href={"https://maxeon.com/"}
                            />
                            <SponsorWidget
                                name="Solid Works"
                                pic={solidworksLogo}
                                href={"https://www.solidworks.com/"}
                            />
                            <SponsorWidget
                                name="ANSYS"
                                pic={ansysLogo}
                                href={"https://www.solidworks.com/"}
                            />
                            <SponsorWidget
                                name="West Coast Canvas"
                                pic={westCoastCanvasLogo}
                                href={"https://westcoastcanvas.com/"}
                            />
                            <SponsorWidget
                                name="Regeneron"
                                pic={regeneronLogo}
                                href={"https://www.regeneron.com/"}
                            />
                            <SponsorWidget
                                name="AASC"
                                pic={aascLogo}
                                href={"https://www.aascworld.com/"}
                            />
                            <SponsorWidget
                                name="MESA"
                                pic={mesaLogo}
                                href={"https://www.pacific-mesa.com/"}
                            />
                            <SponsorWidget
                                name="SOECS"
                                pic={soecsLogo}
                                href={"https://www.pacific.edu/engineering"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
