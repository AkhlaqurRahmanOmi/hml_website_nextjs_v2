import backgroundImage1 from "@/assets/FLEET/FLEETTopFivePriorityBackground.jpg";
import vessel from "@/assets/FLEET/Vessel.png";
import Image from "next/image";
import Link from "next/link";

export const shipData = [
    {
        id: "mega-caravan",
        name: "MEGA CARAVAN",
        tonnage: "16,200 mt",
        image: vessel,
    },
    {
        id: "mega-caravan-2",
        name: "MEGA CARAVAN 2",
        tonnage: "17,700 mt",
        image: vessel,
    },
    {
        id: "mega-trust",
        name: "MEGA TRUST",
        tonnage: "17,700 mt",
        image: vessel,
    },
    {
        id: "mega-passion",
        name: "MEGA PASSION",
        tonnage: "17,700 mt",
        image: vessel,
    },
]

export const FLEETCaravan = () => {
    return (
        <section className="relative bg-cover bg-center p-10 text-black px-4 md:px-10 lg:px-16 xl:px-24 min-h-[80vh]" style={{ backgroundImage: `url(${backgroundImage1.src})` }}>
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
            <div className="relative max-w-6xl mx-auto px-4 py-12 w-full">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Megaline Vessels</h2>
                    <div className="space-y-4 text-gray-800">
                        <p>
                            Provide flexibility and cost-effective execution plan for our clients by utilizing the large deck space,
                            enhancing total cargo capacity in an single ship. Large DWT vessels lead with high deck capacity and are
                            stable even in severe conditions, enhancing safe discharge of all cargos from both the stern and the bow.
                        </p>
                        <p>
                            Another important characteristic of our vessels is the low vessel depth, allowing our assets to reach
                            ports with restricted water depth, which allows the loading and discharging of all cargos without the need
                            for special barges or other floating equipment.
                        </p>
                        <p>
                            Our vessels integrate international ship and crew management standards such as the ISM, ISPS and CSO and
                            are asbestos-free. We also incorporate the highest operating & environmental standards for our vessels.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative space-y-12">
                {shipData.map((ship) => (
                    <Link key={ship.id} href={`/fleet/${ship.id}`} className="flex flex-col items-center w-full cursor-pointer">
                        {/* Ship Name and Tonnage */}
                        <div className="relative w-fit">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003366]">{ship.name}</h2>
                            <p className="absolute top-10 right-0 text-black font-bold text-lg sm:text-xl">{ship.tonnage}</p>
                        </div>

                        {/* Ship Image with Increased Width & Responsiveness */}
                        <div className="relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[700px] xl:max-w-[900px] h-auto">
                            <Image
                                src={ship.image}
                                alt={`${ship.name} vessel illustration`}
                                width={900}
                                height={250}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}