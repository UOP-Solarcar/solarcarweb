import team_photo from "@/assets/gallery/team_photo.jpg";


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
                
                <img className="w-3/5 h-auto rounded-3xl overflow-hidden" src={team_photo.src}/>

                <div className="h-5"></div>
            </div>
        </>
    );
}
