"use client";

import cornerCircle from "@/assets/corner circle.png";
import circle from "@/assets/circle.png";
import car from "@/assets/car.png";

import img_1 from "@/assets/gallery/1.jpg";
import img_2 from "@/assets/gallery/2.jpg";
import img_3 from "@/assets/gallery/3.jpg";

import Divider from "@/components/divider";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarItem(props: any) {
    return (
        <div>
            <img className="object-cover h-[300px] w-[400px]" src={props.src} />
            {/* <p className="legend">{props.legend}</p> */}
        </div>
    );
}

function ExecWidget(props: any) {
    return (
        <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-300 to-purple-600 w-24 h-24 rounded-full mx-auto"></div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold items-center text-center">
                    {props.name}
                </h3>
                <div className="h-[10px]"></div>
                <p className="text-center ">{props.position}</p>
            </div>
        </div>
    );
}

function MemberWidget(props: any) {
    return (
        <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-24 h-24 rounded-full mx-auto"></div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold items-center text-center">
                    {props.name}
                </h3>
                <div className="h-[10px]"></div>
                <p className="text-center ">{props.position}</p>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="h-[510px] w-full relative">
                    <img
                        src={cornerCircle.src}
                        className="w-[40%] absolute top-0 left-0 object-cover"
                    ></img>

                    <div className="w-full flex items-top justify-center  absolute top-[0px] left-0 right-0">
                        <img
                            src={circle.src}
                            className="w-[900px] ml-[40px] object-cover"
                        ></img>
                    </div>

                    <div className="w-full flex items-top justify-center h-[300px] absolute top-[125px]">
                        <img
                            src={car.src}
                            className="w-[600px] h-[260px] object-cover"
                        ></img>
                    </div>

                    <div className="flex flex-col items-center justify-center absolute top-[40px] left-0 right-0">
                        <h1 className="text-2xl">They said we couldn't.</h1>
                        <h1 className="text-2xl">So we did.</h1>
                    </div>

                    <div className="flex flex-col  bottom-0 w-full absolute">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col items-center w-[100px]">
                                <div className="text-3xl text-center text-[#FF5C02]">
                                    47
                                </div>
                                <div className="text-md text-center">
                                    ACTIVE MEMBERS
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-[150px] mr-[40px] ml-[40px]">
                                <div className="text-3xl text-center text-[#FF5C02]">
                                    17
                                </div>
                                <div className="text-md text-center">
                                    SPONSORSHIPS ACQUIRED
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-[100px]">
                                <div className="text-3xl text-center text-[#FF5C02]">
                                    3
                                </div>
                                <div className="text-md text-center">
                                    COMPETITIONS ATTENDED
                                </div>
                            </div>
                        </div>
                        <div className="h-[20px]"></div>
                        <div className="self-center text-sm">
                            University of the Pacific's first student-led solar
                            car team.
                        </div>
                    </div>
                </div>

                <div className="h-20"></div>
                <Divider
                    stops={[
                        {
                            color: "FF5C02",
                            percent: 0,
                        },
                        {
                            color: "000000",
                            percent: 37,
                            opacity: "00",
                        },
                        {
                            color: "000000",
                            percent: 63,
                            opacity: "00",
                        },
                        {
                            color: "FF5C02",
                            percent: 100,
                        },
                    ]}
                />
                <div className="h-20"></div>

                <div className="flex flex-row p-[20px] justify-center">
                    <div className="flex flex-col">
                        <div className="text-xl">Latest Progress</div>
                        <div className="text-sm whitespace-pre-line mt-[20px] ml-[40px]">{`Our team is constantly pushing for\n improvements.\nCheck out our latest advances and even\n our timeline on the right.`}</div>
                    </div>
                    <div className="w-[40px]"></div>
                    <div className="h-[300px] w-[400px] relative  bg-[#515151] rounded-md">
                        <div className="rounded-xl overflow-hidden">
                            <Carousel
                                className="w-full h-96"
                                autoPlay
                                infiniteLoop
                                showThumbs={false} // Hide thumbnails if not needed
                                showStatus={false} // Hide status if not needed
                                showArrows={true} // Show navigation arrows if needed
                                interval={3000} // Set the interval for autoPlay in milliseconds
                            >
                                <CarItem src={img_1.src} legend={""} />
                                <CarItem src={img_2.src} legend={""} />
                                <CarItem src={img_3.src} legend={""} />
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="h-20"></div>
                <Divider
                    stops={[
                        {
                            color: "FF5C02",
                            percent: 0,
                        },
                        {
                            color: "000000",
                            percent: 37,
                            opacity: "00",
                        },
                        {
                            color: "000000",
                            percent: 63,
                            opacity: "00",
                        },
                        {
                            color: "FF5C02",
                            percent: 100,
                        },
                    ]}
                />
                <div className="h-20"></div>

                <div
                    id="leads"
                    className="flex flex-col p-[20px] w-[900px] self-center left-auto right-auto"
                >
                    <div className="text-xl">Meet our Leads</div>
                    <div className="w-[900px] left-0 right-0 pb-10">
                        <h2 className="text-xl font-semibold mb-6">
                            EXECUTIVES
                        </h2>
                        <div className="grid grid-cols-3 gap-6">
                            <ExecWidget
                                name="Aleksei Macatuno"
                                position="Founder & President"
                            />
                            <ExecWidget
                                name="Ariana Desai"
                                position="Co-Founder & VP/Treasurer"
                            />
                            <ExecWidget
                                name="Simran Pravin"
                                position="Secretary"
                            />
                        </div>
                    </div>

                    <div className="w-[900px] left-0 right-0">
                        <h2 className="text-xl font-semibold mb-6">
                            TECHNICAL LEADS
                        </h2>
                        <div className="grid grid-cols-3 gap-3">
                            <MemberWidget
                                name="Aleksei Macatuno"
                                position="Chassis Lead"
                            />
                            <MemberWidget
                                name="Ariana Desai"
                                position="Aerodynamics Lead"
                            />
                            <MemberWidget
                                name="Simran Pravin"
                                position="Driver Ops Lead"
                            />
                        </div>
                        <br />
                        <br />
                        <div className="grid grid-cols-3 gap-3">
                            <MemberWidget
                                name="Ashton Beattie"
                                position="Electrical Systems Lead"
                            />
                            <MemberWidget
                                name="Pranav Jayakumar"
                                position="Sys. and Controls Lead"
                            />
                            <MemberWidget
                                name="Zhangir Siranov"
                                position="Sys. and Controls Lead"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
