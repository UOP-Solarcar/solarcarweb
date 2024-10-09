import Link from "next/link";

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
                        <img
                            alt={`${props.name} pic`}
                            src={props.src}
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
                                src="/sponsor/pdm.png"
                                href={"https://pdmsteel.com/"}
                            />
                            <SponsorWidget
                                name="3 Shul Motors"
                                src="/sponsor/3_shul_motors.png"
                                href={"https://3shulmotors.com/"}
                            />
                            <SponsorWidget
                                name="PMT"
                                src="/sponsor/pmt.webp"
                                href={"https://www.patzmandt.com/"}
                            />
                            <SponsorWidget
                                name="Home Depot"
                                src="/sponsor/home_depot.png"
                                href={"https://www.homedepot.com/"}
                            />
                            <SponsorWidget
                                name="TAP Plastic"
                                src="/sponsor/tap.png"
                                href={"https://www.tapplastics.com/"}
                            />
                            <SponsorWidget
                                name="Weld Monkey"
                                src="/sponsor/weldmonkey.png"
                                href={"https://weldmonkey.com/"}
                            />
                            <SponsorWidget
                                name="Maxeon"
                                src="/sponsor/maxeon.png"
                                href={"https://maxeon.com/"}
                            />
                            <SponsorWidget
                                name="Solid Works"
                                src="/sponsor/solid_works.jpg"
                                href={"https://www.solidworks.com/"}
                            />
                            <SponsorWidget
                                name="ANSYS"
                                src="/sponsor/ansys.jpg"
                                href={"https://www.solidworks.com/"}
                            />
                            <SponsorWidget
                                name="West Coast Canvas"
                                src="/sponsor/west_coast_canvas.webp"
                                href={"https://westcoastcanvas.com/"}
                            />
                            <SponsorWidget
                                name="Regeneron"
                                src="/sponsor/regeneron.png"
                                href={"https://www.regeneron.com/"}
                            />
                            <SponsorWidget
                                name="AASC"
                                src="/sponsor/aasc.png"
                                href={"https://www.aascworld.com/"}
                            />
                            <SponsorWidget
                                name="MESA"
                                src="/sponsor/mesa.png"
                                href={"https://www.pacific-mesa.com/"}
                            />
                            <SponsorWidget
                                name="SOECS"
                                src="/sponsor/soecs.png"
                                href={"https://www.pacific.edu/engineering"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
