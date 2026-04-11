import { StaticImageData } from "next/image";

export interface IFleet {
    name: string;
    tonnage: string;
    image: StaticImageData;
}