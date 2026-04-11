import BackgroundImage from "@/assets/Contact/ContactPageMapBackground.jpg"
import Image from "next/image"
import { PiLineVertical } from "react-icons/pi"
import { Footer } from "../Global/footer"

export const ContactMap = () => {
    return (
        // <section className="relative h-[calc(100vh-200px)] overflow-hidden">
        <section className="flex flex-col min-h-screen">
            {/* Background Image */}
            <div className="relative flex-grow flex flex-col items-center justify-center">
                <Image
                    src={BackgroundImage}
                    alt="Ship Blueprint"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-500/50 to-transparent z-10" />

                {/* Overlay content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between h-full w-full px-4 md:px-10 lg:px-16 xl:px-24 py-24">
                    {/* Left content */}
                    <div className="w-full lg:w-1/2 flex 2xl:justify-center md:items-center my-5 md:my-auto">
                        <h1 className="font-roboto flex lg:flex-col gap-2 ">
                            <span className="text-5xl font-bold text-white uppercase">
                                CONTACT
                            </span>
                            <span className="text-5xl lg:text-6xl font-bold text-white uppercase">
                                US
                            </span>
                        </h1>
                    </div>

                    <div className="w-full h-[400px]  rounded-lg overflow-hidden shadow-lg flex flex-col ">
                        <div className="flex mb-4 items-center justify-between md:justify-start">
                            <div>
                                <h2 className="text-2xl md:text-3xl text-white font-semibold">INQUIRIES</h2>
                                <p className="text-white text-sm md:text-base font-medium">marketing@hi-megaline.com</p>
                            </div>
                            <PiLineVertical className="size-12 text-white" />
                            <div>
                                <h2 className="text-2xl md:text-3xl text-white font-semibold">GENERAL</h2>
                                <p className="text-white text-sm md:text-base font-medium">am@hi-megaline.com</p>
                            </div>
                        </div>
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.379539986823!2d126.97372037629692!3d37.56967952394705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ecd7b19257%3A0x22375d9684014ab!2s11%20f%2C%20149%20Sejong-daero%2C%20Jongno%20District%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sbd!4v1747040612735!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0 w-full h-full rounded-none" />
                        <p className="mt-4 text-white text-sm md:text-base max-w-xl">11th Floor, Kwanghwamoon Building, 149 Sejong-daero, Jongno-gu, Seoul, Republic of Korea 03186</p>
                    </div>

                </div>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </section>
    )
}