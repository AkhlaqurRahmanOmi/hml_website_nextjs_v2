import DNV from "@/assets/Rules/DNV.png";
import GL from "@/assets/Rules/GL.png";
import ISO from "@/assets/Rules/ISO.png";
import KR from "@/assets/Rules/KR.png"
import ABS from "@/assets/Rules/ABS.png";
import AISC from "@/assets/Rules/AISC.png";
import OCIMF from "@/assets/Rules/OCIMF.png";
import IMO from "@/assets/Rules/IMO.png";
import Image from "next/image"
import { Footer } from "../Global/footer";

const standards = [
    { name: "DNV-OS / DNV-RP", src: DNV, alt: "DNV Logo" },
    { name: "GL-Noble Denton", src: GL, alt: "GL Logo" },
    { name: "ISO 19901-6", src: ISO, alt: "ISO Logo" },
    { name: "KR", src: KR, alt: "KR Logo" },
    { name: "ABS", src: ABS, alt: "ABS Logo" },
    { name: "AISC", src: AISC, alt: "AISC Logo" },
    { name: "OCIMF", src: OCIMF, alt: "OCIMF Logo" },
    { name: "IMO", src: IMO, alt: "IMO Logo" },
];

export const EngineeringStandards = () => {
    return (
        <section className="flex flex-col min-h-screen justify-center mt-24 md:mt-24">
            <div className="flex-grow flex flex-col items-center justify-center px-8 md:px-16">
                <h1 className="uppercase text-4xl text-center font-bold text-[#094d82] font-roboto">Standards</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 2xl:mt-12 w-full max-w-5xl 2xl:max-w-6xl">
                    {standards.map((standard, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Image
                                src={standard.src}
                                alt={standard.alt}
                                width={500}
                                height={250}
                                loading="lazy" className="object-cover" />
                            <p className="text-[#094d82] mt-2">{standard.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </section>
    )
}