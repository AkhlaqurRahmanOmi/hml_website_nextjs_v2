// MEGA CARAVAN
import shi from "../../public/images/webp/SHI.webp";
import ginaKrog from "../../public/images/webp/GinaKrog.webp";
import eastAnglia from '../../public/images/webp/EastAngliaProject.webp';
import GordonLNGProject from "../../public/images/webp/GordonLNGProjec.webp";

// MEGA CARAVAN 2
import lindeProject from "../../public/images/webp/Linde_Project.webp";
import demecvowProject from "../../public/images/webp/DEME_CVOW_Project.webp";
import galaf1Project from "../../public/images/webp/Gallaf_1_Project.webp";
import galaf3Project from "../../public/images/webp/Gallaf_3_Project.webp";
import marjanProjectGCP from "../../public/images/webp/Marjan_Project_GCP.webp";
import marjanProjectACC from "../../public/images/webp/Marjan_Project_ACC.webp";
import RTGTransportaion from "../../public/images/webp/RTG_Transportation.webp";
import P78Project from "../../public/images/webp/P78_Project.webp";
import IndonesiaGCraneProject from "../../public/images/webp/Indonesia_G-Crane_Project.webp";

// MEGA TRUST
import caissonLegExtensions from "../../public/images/webp/Caisson_Leg_Extensions_Project.webp";
import fpsoModulesProject from "../../public/images/webp/FPSO_Modules_Project.webp";
import dismentalCraneProject from "../../public/images/webp/DismentalCraneProject.webp";
import shiMegaTrust from "../../public/images/webp/SHI_Project.webp";

// MEGA PASSION
import floatingDockProject from "../../public/images/webp/Floating_Dock_Project.webp";
import multiRingblockProject from "../../public/images/webp/Multi_Ringblock_Project.webp";
import steelGravityProject from "../../public/images/webp/SteelGravityProject.webp";
import HanjinTandemBlock from "../../public/images/webp/Hanjin_Tandem_Block.png";
import GIGAMEGAShipblocksProject from "../../public/images/webp/GIGA_MEGA_Shipblocks_Project.png";

// CYDF
import fengmiao1 from "../../public/images/webp/Feng_Miao_1.webp";

export const FleetData = [
    {
        id: "megacaravan",
        name: "Mega Caravan",
        weight: "16,200mt",
        image: 'https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-01_zeu8rn.png',
        loa: "163.8m",
        breadth: "54.0m",
        freedeck: "140.0m × 54.0m",
        depth: "10.5m (wide deck)",
        draft: "6.0m",
        deadweight: "16,200mt",
        speed: "12.0 knot",
        propulsion: "3,900 kw × 2 set",
        ballastcapacity: "Pump 4 ea × 2,500 m3/hr",
        GA: "/MC_GA.pdf",
        description:
            "Mega Caravan is a highly efficient vessel with expansive deck space and shallow draft for challenging ports.",
        fleetProjects: [
            {
                projectName: "SHI",
                image: shi,
            },
            {
                projectName: "Gina Krog",
                image: ginaKrog,
            },
            {
                projectName: "East Anglia",
                image: eastAnglia,
            },
            {
                projectName: "Gordon LNG Project",
                image: GordonLNGProject,
            },
            // {
            //     projectName: "Gordon LNG Project",
            //     image: GordonLNGProject,
            // },
        ],
    },
    {
        id: "megacaravan2",
        name: "Mega Caravan 2",
        weight: "17,700mt",
        image: 'https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-02_gpugbp.png',
        loa: "163.8m",
        breadth: "42.0m (mld)/47.0m (max)",
        freedeck: "140.0m × 47.0m",
        depth: "9.5m",
        draft: "6.0m",
        deadweight: "17,700mt",
        speed: "12.0 knot",
        propulsion: "3,900 kw × 2 set",
        ballastcapacity: "Pump 4 ea × 2,500 m3/hr",
        GA: "/MC2_GA.pdf",
        description:
            "Mega Caravan 2 offers enhanced deck load strength and side-loading capabilities.",
        fleetProjects: [
            {
                projectName: "Linde Project",
                image: lindeProject,
            },
            {
                projectName: "DEME CVOW Project",
                image: demecvowProject,
            },
            {
                projectName: "Gallaf 1 Project",
                image: galaf1Project,
            },
            {
                projectName: "Gallaf 3",
                image: galaf3Project,
            },
            {
                projectName: "Marjan Project GCP",
                image: marjanProjectGCP,
            },
            {
                projectName: "Marjan Project ACC",
                image: marjanProjectACC,
            },
            {
                projectName: "RTG Transportation",
                image: RTGTransportaion,
            },
            {
                projectName: "P78 Project",
                image: P78Project,
            },
            {
                projectName: "Indonesia G-Crane project",
                image: IndonesiaGCraneProject,
            },
            {
                projectName: "Caisson Leg Extensions Project",
                image: caissonLegExtensions,
            },
            {
                projectName: "FPSO Modules P-66/P-49",
                image: fpsoModulesProject,
            },
        ],
    },
    {
        id: "megatrust",
        name: "Mega Trust",
        weight: "19,200mt",
        image: 'https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-04_sagdrk.png',
        loa: "148.0m",
        breadth: "50.0m",
        freedeck: "124.0m × 50.0m",
        depth: "9.5m",
        draft: "5.8m",
        deadweight: "19,200mt",
        speed: "12.0 knot",
        propulsion: "3,900 kw × 2 set",
        ballastcapacity: "Pump 6 ea × 2,500 m3/hr",
        GA: "/MT_GA.pdf",
        description:
            "Mega Trust is designed for flexible and cost-efficient marine transportation.",
        fleetProjects: [
            {
                projectName: "Dismantled Crane Project",
                image: dismentalCraneProject,
            },
            {
                projectName: "SHI Project",
                image: shiMegaTrust,
            },
            {
                projectName: "Caisson Leg Extensions Project",
                image: caissonLegExtensions,
            },
            {
                projectName: "FPSO Modules P-66/P-49",
                image: fpsoModulesProject,
            }
        ],
    },
    {
        id: "megapassion",
        name: "Mega Passion",
        weight: "17,700mt",
        image: 'https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558776/VESSELS-03_mta5gv.png',
        loa: "203.0m",
        breadth: "63.0m",
        freedeck: "170.7m × 63.0m",
        depth: "11.0m",
        draft: "8.2m(23.7m)",
        deadweight: "52,300mt",
        speed: "12.0 knot",
        propulsion: "4,000 kw × 2 set",
        ballastcapacity: "Pump 8 ea × 3,000 m3/hr",
        GA: "/MEPA_GA.pdf",
        description:
            "Mega Passion delivers safe, sustainable, and reliable services across diverse ports.",
        fleetProjects: [
            {
                projectName: "DEME Multi-Ring Block Project",
                image: multiRingblockProject,
            },
            {
                projectName: "Wheatstone Steel Gravity Project",
                image: steelGravityProject,
            },
            {
                projectName: "Floating Dock Project",
                image: floatingDockProject,
            },
            {
                projectName: "Hanjin Tandem Block",
                image: HanjinTandemBlock,
            },
            {
                projectName: "GIGA/MEGA Shipblocks Project",
                image: GIGAMEGAShipblocksProject,
            },
        ],
    },
    {
        id: "cydf",
        name: "CYDF",
        weight: "17,700mt",
        image: 'https://res.cloudinary.com/dl28pqkb2/image/upload/v1760067462/25.04_HML_website_design_draft_9-21_lhmumd.png',
        loa: "156m",
        breadth: "41.98m",
        freedeck: "135m × 42m",
        depth: "10.1m",
        draft: "6.8m",
        deadweight: "25,163mt",
        speed: "13.3 knot",
        propulsion: "3906kw * 2 sets",
        ballastcapacity: "Pump 4 ea × 1,900 m3/hr",
        GA: "/CYDF_GA.pdf",
        description:
            "Mega Passion delivers safe, sustainable, and reliable services across diverse ports.",
        fleetProjects: [
            {
                projectName: "Feng Miao 1",
                image: fengmiao1,
            },
        ],
    },
];