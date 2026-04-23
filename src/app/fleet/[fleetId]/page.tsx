import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { FleetData } from "@/data/fleet";

export const dynamicParams = false;

export async function generateStaticParams() {
  return FleetData.map((fleet) => ({ fleetId: fleet.id.toString() }));
}

export default async function Page({ params }: { params: Promise<{ fleetId: string }> }) {
  const { fleetId } = await params;

  const currentIndex = FleetData.findIndex((fleet) => fleet.id === fleetId);
  const prevFleet = FleetData[currentIndex - 1];
  const nextFleet = FleetData[currentIndex + 1];
  const fleetData = FleetData.find((fleet) => fleet.id === fleetId);

  if (!fleetData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold">Fleet Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col p-4 px-4 md:px-[5%] py-16">
      <style>{`
        .wave {
            animation: waveAnimation 2s infinite ease-in-out;
        }
        @keyframes waveAnimation {
            0%,100% { transform: translateX(0px); }
            50% { transform: translateX(5px); }
        }
      `}</style>

      <div className="flex justify-between px-[5%]">
        {prevFleet && (
          <Link href={`/fleet/${prevFleet.id}`} className="flex">
            <FaAngleLeft className="text-3xl lg:text-7xl text-[#094e82be] wave" />
            <FaAngleLeft className="-ml-12 text-3xl lg:text-7xl text-[#094e827e] wave" />
            <FaAngleLeft className="-ml-12 text-3xl lg:text-7xl text-[#094e824d] wave" />
          </Link>
        )}
        <div />
        {nextFleet && (
          <Link href={`/fleet/${nextFleet.id}`} className="flex">
            <FaAngleRight className="-mr-12 text-3xl lg:text-7xl text-[#094e824d] wave" />
            <FaAngleRight className="-mr-12 text-3xl lg:text-7xl text-[#094e827e] wave" />
            <FaAngleRight className="text-3xl lg:text-7xl text-[#094e82be] wave" />
          </Link>
        )}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-8 px-10 md:px-[10%] mt-[5%]">
        <aside className="w-3/5">
          <div className="flex justify-between"><p className="w-2/3">LOA</p><span className="w-1/3">{fleetData.loa}</span></div>
          <div className="flex justify-between"><p className="w-2/3">Breadth</p><span className="w-1/3">{fleetData.breadth}</span></div>

          <hr className="border-dashed my-1.5" />

          <div className="flex justify-between"><p className="w-2/3">Free deck</p><span className="w-1/3">{fleetData.freedeck}</span></div>
          <div className="flex justify-between"><p className="w-2/3">Depth</p><span className="w-1/3">{fleetData.depth}</span></div>

          <hr className="border-dashed my-1.5" />

          <div className="flex justify-between"><p className="w-2/3">Draft</p><span className="w-1/3">{fleetData.draft}</span></div>
          <div className="flex justify-between"><p className="w-2/3">Deadweight</p><span className="w-1/3">{fleetData.deadweight}</span></div>

          <hr className="border-dashed my-1.5" />

          <div className="flex justify-between"><p className="w-2/3">Speed</p><span className="w-1/3">{fleetData.speed}</span></div>
          <div className="flex justify-between"><p className="w-2/3">Propulsion</p><span className="w-1/3">{fleetData.propulsion}</span></div>

          <hr className="border-dashed my-1.5" />

          <div className="flex justify-between"><p className="w-2/3">Ballast capacity</p><span className="w-1/3">{fleetData.ballastcapacity}</span></div>
        </aside>
        <div className="flex flex-col">
          <h1 className="text-4xl text-start text-nowrap lg:text-6xl font-bold text-[#094d82] w-2/5 uppercase">{fleetData.name}</h1>
          {fleetData.GA && (
            <div className="flex justify-end mt-6">
              <button className="bg-[#0b4c84] text-white font-medium shadow-[0_8px_16px_-8px_rgba(0,0,0,0.6)] hover:bg-[#0a3f6d] transition">
                <a
                  download
                  className="bg-[#094d82]  text-white px-4 py-2 uppercase text-sm font-medium flex rounded-md items-center"
                  href={fleetData.GA}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download GA
                </a>
              </button>
            </div>
          )}

        </div>
      </div>

      <Image
        src={fleetData.image}
        alt={fleetData.name}
        width={1800}
        height={1000}
        className="m-0 md:-mt-20"
      />
    </section>
  );
}
