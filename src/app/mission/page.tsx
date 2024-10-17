import Image from "next/image";

export default function Mission() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="h-5"></div>
                
                <h1 className="font-bold font-9xl">OUR MISSION</h1>
                <p className="w-[710px] text-center rounded-full overflow-hidden">
                {`\"Our mission is to inspire innovation and environmental stewardship through the design, construction, and racing of solar-powered vehicles.
                    We aim to educate2 and empower students in STEM fields, fostering teamwork and creativity while promoting sustainable transportation solutions.
                    By participating in solar car challenges, we strive to raise awareness about renewable energy, encourage responsible engineering practices, and ignite a passion for clean technology in our community and beyond.\"`}
                </p>
                
                <div className="h-5"></div>
                
                <Image width={1000} height={800} className="min-w-200 max-w-4/5 h-auto  rounded-3xl overflow-hidden" src="/gallery/team_photo.jpg" alt={"Team Photo"}/>

                <div className="h-5"></div>
            </div>
        </>
    );
}
