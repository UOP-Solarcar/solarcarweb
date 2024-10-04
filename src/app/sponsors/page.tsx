import pdmLogo from "@/assets/sponsor/PDMLogoColor.png"

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

export default function Sponsors() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
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
                </div>
            </div>
        </>
    );
}
