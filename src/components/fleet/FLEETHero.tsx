import background from "@/assets/FLEET/FleetHeroBackground.jpg";
import shipShape from "@/assets/FLEET/FleetHeroType.png";
import Image from "next/image";

export const FLEETHero = () => {
    return (
        <section className="relative bg-cover bg-center p-10 text-black px-4 md:px-10 lg:px-16 xl:px-24 min-h-[70vh]" style={{ backgroundImage: `url(${background.src})` }}>
            <div className="mt-[40vh]">
                <h1 className="uppercase text-white text-2xl sm:text-4xl lg:text-6xl font-bold pl-4 sm:pl-14"><span className="tracking-widest">Fleet</span> Information</h1>
                <Image width={3000} height={2000} src={shipShape} alt="Ship Image" className="md:-mt-10" />
            </div>
        </section>
    )
}