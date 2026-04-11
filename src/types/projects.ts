import { StaticImageData } from "next/image";

export type ProjectCategory = "MODULES" | "OFFSHORE_STRUCTURES" | "PORT_EQUIPMENT" | "SHIPBUILDING";

export type ImgSrc = string | StaticImageData;

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    image: StaticImageData;
    description: string;
    year: number;
}

export type ProjectItem = {
    image: string | StaticImageData;
    info: string;
    href?: string;
};

export type CategoryBlock = {
    id: number;
    category: string;
    categoryImage: string | StaticImageData;
    projects: ProjectItem[];
};