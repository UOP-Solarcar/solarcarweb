import insta from "@/assets/insta.png";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-black flex items-center justify-center">
                <div className="h-[450px] bg-black w-[800px] flex flex-row p-[50px] self-center">
                    <div className="w-[400px] flex-col">
                        <div className="font-bold">Team email: </div>
                        <div className="font-normal whitespace-pre-line underline">
                            <Link
                                href={"mailto:uopsolarcar@gmail.com"}
                            >{`uopsolarcar@gmail.com`}</Link>
                        </div>
                        <div className="h-[20px]"></div>
                        <div className="font-bold">Located at: </div>
                        <div className="font-normal whitespace-pre-line">
                            {`
                                School of Engineering and Computer Science
                                ATTN: Pacific Solar Car Club
                                3601 Pacific Ave
                                Stockton, CA 95211
                            `}
                        </div>
                        <div className="h-[20px]"></div>
                        <div className="font-bold">Telephone:</div>
                        <div className="font-normal whitespace-pre-line underline"><Link href={"tel:+12095610140"} target="_blank">{`Founder: +1 209-561-0140`}</Link></div>
                        <div className="h-[20px]"></div>
                        <div className="font-bold">Faculty Advisor:</div>
                        <div className="font-normal whitespace-pre-line">{`Dongbin Lee`}</div>
                        <div className="font-normal underline whitespace-pre-line">
                            <Link href="mailto:dlee4@pacific.edu">{`dlee4@pacific.edu`}</Link>
                        </div>
                        <div className="h-[20px]"></div>
                    </div>
                    <div className="w-[20px]"></div>
                    <div className="grow flex-col h-full flex justify-center">
                        <div className="text-normal">
                            FOLLOW US ON SOCIAL MEDIA
                        </div>
                        <div className="h-[20px]"></div>
                        <div className="flex flex-row items-center">
                            <div className="h-[40px] w-[40px] rounded-md flex items-center justify-center bg-[#450696]">
                                <img
                                    className="h-[30px] w-[30px]"
                                    src={insta.src}
                                />
                            </div>
                            <div className="w-[10px]"></div>
                            <div className="h-[30px] pl-[20px] pr-[20px] rounded-md flex items-center bg-[#450696]">
                                <Link
                                    href={
                                        "https://www.instagram.com/pacific.solarcar/"
                                    }
                                    target="_blank"
                                >
                                    @pacific.solarcar
                                </Link>
                            </div>
                        </div>
                        <div className="h-[200px] w-[200px]">
                            <img src={logo.src}></img>
                        </div>
                    </div>
                    <div className="w-[20px]"></div>
                </div>
            </div>
        </>
    );
}
