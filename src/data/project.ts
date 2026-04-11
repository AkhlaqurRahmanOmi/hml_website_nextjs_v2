import type { ProjectCategory } from "@/types/projects";

// SHIPBUILDING Projects Image Import
import DSMEMultiRingBlock14844 from "@/assets/Projects/webp/DSMEMultiRingBlock14844.webp";
import GIGAMEGAShipblocks18000 from "@/assets/Projects/webp/GIGAMEGAShipblocks18000.webp";
import GIGAMEGAShipblocks9000 from "@/assets/Projects/webp/GIGAMEGAShipblocks9000.webp";
import MultiRingBlock15000 from "@/assets/Projects/webp//MultiRingBlock15000.webp";
import HanjinTandemBlock15900 from "@/assets/Projects/webp/HanjinTandemBlock15900.webp";
import CargoShipLaunching17400 from "@/assets/Projects/webp/CargoShipLaunching17400.webp";
import DeckCarrierLaunching10000 from "@/assets/Projects/webp/DeckCarrierLaunching10000.webp";
import HanjinTandemBlock12300 from "@/assets/Projects/webp/HanjinTandemBlock12300.webp";

// MODULES Projects Image Import
import SingaporeNewPitchGasificationprojectconsolidated from "@/assets/Projects/webp/SingaporeNewPitchGasificationprojectconsolidated.webp";
import SingaporeNewPitchGasificationprojectonshore from "@/assets/Projects/webp/SingaporeNewPitchGasificationprojectonshore.webp";
import GorgonLNGProject from "@/assets/Projects/webp/GorgonLNGProject.webp";
import GinaKrogProjectMSF from "@/assets/Projects/webp/GinaKrogProjectMSF.webp";
import GinaKrogProject from "@/assets/Projects/webp/GinaKrogProject.webp";
import FPSOModulesP66P69 from "@/assets/Projects/webp/FPSOModulesP66P69.webp";
import BenePlantModules from "@/assets/Projects/webp/BenePlantModules.webp";
import FPSOModules from "@/assets/Projects/webp/FPSOModules.webp";
import FPSOModulesP70 from "@/assets/Projects/webp/FPSOModulesP70.webp";
import OffshoreModules from "@/assets/Projects/webp/OffshoreModules.webp";

// OFFSHORE Projects Image Import
import JanszIoCompression from "@/assets/Projects/webp/JanszIoCompression.webp";
import AnchorFPUstructure from "@/assets/Projects/webp/AnchorFPUstructure.webp";
import WheatstoneProject from "@/assets/Projects/webp/WheatstoneProject.webp";
import GinaKrogProjectOffshore from "@/assets/Projects/webp/GinaKrogProjectOffshore.webp";
import HorizontalWindfarmJackets from "@/assets/Projects/webp/HorizontalWindfarmJackets.webp";
import JackUpRig from "@/assets/Projects/webp/JackUpRig.webp";
import LegExtensionsCaisson from "@/assets/Projects/webp/LegExtensionsCaisson.webp";
import FloatingDock from "@/assets/Projects/webp/FloatingDock.webp";
import FlareBoom from "@/assets/Projects/webp/FlareBoom.webp";

// PORT EQUIPMENT Projects Image Import
import DismantledCrane from "@/assets/Projects/webp/DismantledCrane.webp";
import Unloaders from "@/assets/Projects/webp/Unloaders.webp";
import UnloaderDismantledCrane from "@/assets/Projects/webp/UnloaderDismantledCrane.webp";
import STSCraneRTGCrane from "@/assets/Projects/webp/STSCraneRTGCrane.webp";
import JibCranes from "@/assets/Projects/webp/JibCranes.webp";
import GantryCrane from "@/assets/Projects/webp/GantryCrane.webp";
import FullyErectedGrabUnloader from "@/assets/Projects/webp/FullyErectedGrabUnloader.webp";
import RMQCRTGC from "@/assets/Projects/webp/RMQCRTGC.webp";

import shipBuilding from "../../public/images/webp/ShipBuilding2.webp";
import modules from "../../public/images/webp/Modules.webp";
import offshoreStructuring from "../../public/images/webp/OffshoreStructure.webp";
import portEquipement from "../../public/images/webp/PortEquipement2.webp";

export const categoryDisplayNames: Record<ProjectCategory, string> = {
    MODULES: "Modules",
    OFFSHORE_STRUCTURES: "Offshore Structures",
    PORT_EQUIPMENT: "Port Equipment",
    SHIPBUILDING: "Shipbuilding",
};

export const HomeProject = [
    {
        id: "1",
        name: "Block Transportation",
        description: "Samsung Heavy Industries (2018 - Continuing)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549477/BlockTransportation_liqidh.webp",
        client: "Samsung Heavy Industries",
        cargo: "Shipblock",
        pol: "Rongcheng & Ningbo, China",
        pod: "Gohyeon, Korea",
        duration: "May 2018 - Continuing",
        vessel: "Mega Caravan, Mega Trust",
        projectDetails:
            "HML leads the full logistics and marine operations for the long-term transport of mega and giga ship blocks between HML and SHI. From vessel chartering and route planning to tidal window analysis, draft clearance and ballast calculations, every voyage is engineered for precision. Our team coordinates port access, mooring and loading operations on both ends, ensuring structural safety, operational continuity, and schedule reliability across all shipments.",
    },
    {
        id: "2",
        name: "Coastal Virginia Offshore Wind",
        description: "DEME (2024)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549476/Coastal_Virginia_Offshore_Wind_lr4evh.webp",
        client: "DEME",
        cargo: "Offshore Structure",
        pol: "Rostock, Germany",
        pod: "Norfolk, USA",
        duration: "Apr 2024 - Aug 2025",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML managed the logistics, operations, and chartering for transporting 137 monopiles from Rostock to Norfolk aboard Mega Caravan 2. Coordinated voyage planning, port access, and cargo handling to ensure smooth loading and unloading across multiple shipments.\n\nOur operational planning included a specific stowage method that allowed monopiles to be safely inserted within one another, optimizing space and maintaining safety. Through close collaboration with port teams and proactive risk management, HML ensured on-time, secure deliveries for DEME.",
    },
    {
        id: "3",
        name: "P78 Project",
        description: "Dongbang & DHL (2023-2024)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549475/P78_Project_qgeugi.webp",
        client: "Dongbang & DHL",
        cargo: "Module",
        pol: "Angra dos Reis, Brazil",
        pod: "Singapore",
        duration: "Nov 2023 - Mar 2024",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML successfully managed the transportation project at BrasFELS yard in Brazil. Our operations and chartering teams coordinated vessel access at a port with limited draft by planning tide heights and developing effective ballast strategies. Supported by our in-house engineering team, we supervised grillage installation and oversaw the entire process, ensuring smooth communication and seamless project execution.",
    },
    {
        id: "4",
        name: "Gallaf III",
        description: "HMC / NOC (North Oil Company) (2023)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549476/Gallaf_lll_lo2o5q.webp",
        client: "HMC",
        cargo: "Topside & Module",
        pol: "Vung Tau, Vietnam",
        pod: "Al Shaheen Field, Offshore Qatar",
        duration: "Jan - Jun 2023",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML successfully transported offshore structures from Vietnam to Qatar for HMC and North Oil Company, supporting the Al Shaheen field development. The project was carried out using the HTV Mega Caravan 2 and involved close coordination across our chartering, operations, and in-house engineering teams.\n\nFrom vessel selection and technical planning to execution, the project demonstrated HML's integrated expertise in complex heavy transport logistics.",
    },
    {
        id: "5",
        name: "Marjan Project",
        description: "HMC/ ARAMCO (2023)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549475/Marjan_Project_rykeu8.webp",
        client: "HMC",
        cargo: "Offshore Structure",
        pol: "Sohar, Oman",
        pod: "Marjan Field, Offshore Saudi Arabia",
        duration: "Sep - Nov 2023",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML supported the ARAMCO Marjan Increment development by transporting offshore structures from Sohar, Oman to the Marjan Field using the Heavy Transport Vessel Mega Caravan 2.\n\nExecuted between September and November 2023, the project involved close collaboration between HML's chartering, operations, and engineering teams to ensure safe handling, offshore readiness, and timely delivery under demanding environmental and operational conditions.",
    },
    {
        id: "6",
        name: "KCTC/Mitsui RTGC Transportation (2022-2023)",
        description: "",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549474/RTGC_Transportation_lcz7t5.webp",
        client: "KCTC",
        cargo: "Port Equipment",
        pol: "Oita, Japan",
        pod: "Nam Dinh Vu & Long An, Vietnam",
        duration: "Dec 2022 - Jan 2023",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML completed two consecutive voyages transporting from Japan to Vietnam for KCTC and Mitsui. The shipments were carried out using the Heavy Transport Vessel Mega Caravan 2 between 2022 and 2023.\n\nOur chartering, operations, and in-house engineering teams worked in close coordination to ensure safe loading, secure stowage, and efficient delivery. This project highlighted HML's experience in handling oversized port equipment and executing repeat shipments with precision and reliability.",
    },
    {
        id: "7",
        name: "Linde New Pitch Gasification Plant",
        description: "Linde (2021-2022)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549474/Linde_New_Pitch_zzcspy.webp",
        client: "Linde Engineering",
        cargo: "Topside & Module",
        pol: "Kattupalli, India",
        pod: "Jurong Island, Singapore",
        duration: "Feb 2021 - Nov 2022",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML and Linde stepped into a complex project without prior access to existing resources, quickly integrating into the logistics chain. Leveraging our experienced operations and chartering teams, supported by in-house engineering, we ensured smooth, hassle-free transportation and seamless coordination among multiple stakeholders. This successful execution showcased HML's expertise in managing complex global logistics and reinforced our reputation for excellence in navigating complex operational challenges.",
    },
    {
        id: "8",
        name: "Gallaf 1",
        description: "HMC / NOC (2019)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549473/Gallaf_Project_ucb4rk.webp",
        client: "HMC",
        cargo: "Topside & Module",
        pol: "Vung Tau, Vietnam",
        pod: "Al Shaheen Field, Offshore Qatar",
        duration: "Mar - Jun 2019",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML successfully transported offshore structures from Vietnam to Qatar for HMC and North Oil Company, supporting the Al Shaheen field development. The project was carried out using the HTV Mega Caravan 2 and involved close coordination across our chartering, operations, and in-house engineering teams.\n\nFrom vessel selection and technical planning to execution, the project demonstrated HML's integrated expertise in complex heavy transport logistics.",
    },
    {
        id: "9",
        name: "East Anglia Project",
        description: "Lamprell (2018)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549472/East_Anglia_nklzxu.webp",
        client: "Lamprell",
        cargo: "Topside",
        pol: "Hamriyah, UAE",
        pod: "Belfast, UK",
        duration: "Q1 - Q3 2018",
        vessel: "Mega Caravan, Mega Caravan 2",
        projectDetails:
            "The East Anglia ONE Project for Lamprell (2018) involved transporting offshore wind farm structures from the UAE to the UK across two voyages using Mega Caravan and Mega Caravan 2. The project was supported by our Chartering team, who secured vessel availability and voyage planning. The Operations team coordinated the loading, transit and discharge, and our in-house engineering team provided transport design and sea fastening arrangements.",
    },
    {
        id: "10",
        name: "Gina Krong - MSF Topside Module",
        description: "Equinor (2016)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549473/Gina_Krong_cc9o87.webp",
        client: "Hanwha Ocean (former DSME)",
        cargo: "Topside & Module",
        pol: "Okpo, Korea",
        pod: "Gina Krog Field, Offshore Stavanger, North Sea",
        duration: "Jun - Sep 2016",
        vessel: "Mega Caravan",
        projectDetails:
            "As part of the Gina Krog offshore development, a massive MSF topside module weighing 12,200 metric tons was transported from Korea to the North Sea. The Mega Caravan was deployed for this operation, ensuring safe and efficient delivery to the offshore site under challenging North Sea conditions.",
    },
    {
        id: "11",
        name: "Gina Krog Project - Offshore Platform",
        description: "Equinor (2016)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549472/Gina_Krog_Project_kb4lgn.webp",
        client: "Hanwha Ocean (former DSME)",
        cargo: "Process Module, Utility Module, Flareboom",
        pol: "Okpo, Korea",
        pod: "Gina Krog Field, Offshore Stavanger, North Sea",
        duration: "Jun - Sep 2016",
        vessel: "Mega Caravan 2",
        projectDetails:
            "In support of the Gina Krog offshore platform, a set of critical structures, including the Process Module, Utility Module, and Flareboom were transported from Korea to the North Sea. The combined cargo weight totaled approximately 7,900 metric tons. The transport was successfully executed by the heavy transport vessel Mega Caravan 2, navigating long-distance and harsh offshore conditions to deliver the modules directly to the installation site.",
    },
    {
        id: "12",
        name: "Gorgon Crane Project",
        description: "Chevron (2012-2016)",
        image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549471/Gorgon_Crane_r6vpzs.webp",
        client: "Kellogg Joint Venture",
        cargo: "Module",
        pol: "Korea / Indonesia / Thailand / China / Italy",
        pod: "Barrow Island, Australia",
        duration: "Mar 2012 - 2016",
        vessel: "Mega Caravan, Mega Caravan 2",
        projectDetails:
            "Under the Kellogg Joint Venture, our team successfully executed multiple voyages transporting heavy crane components from Korea, Indonesia, Thailand, China and Italy to Australia in support of the Gorgon LNG development. This complex project was made possible through the seamless collaboration of our chartering team, which secured vessel allocation and optimized scheduling; the operations team, which managed logistics from loadout to final delivery; and our in-house engineering team, which provided critical transport design and cargo securing solutions. Together, these efforts ensured the safe, timely, and efficient completion of the project.",
    },
];

export const AllProjectData = [
    {
        id: 1,
        category: "SHIPBLOCK",
        categoryImage: shipBuilding,
        projects: [
            {
                image: DSMEMultiRingBlock14844,
                info: "DSME Multi-Ring Block 14,844mt from Yantai, China to Okpo, Korea Mega Passion",
            },
            {
                image: GIGAMEGAShipblocks18000,
                info: "GIGA/MEGA Shipblocks 18,000 mt from China to Korea, Long term charter Mega Passion",
            },
            {
                image: GIGAMEGAShipblocks9000,
                info: "GIGA/MEGA Shipblocks 9,000 mt from China to Korea, Long term charter Mega Innovation",
            },
            {
                image: MultiRingBlock15000,
                info: "Multi Ring Block 15,000mt from China to Korea Mega Passion",
            },
            {
                image: HanjinTandemBlock15900,
                info: "Hanjin Tandem Block 15,900 mt from China to Philippines Mega Passion",
            },
            {
                image: CargoShipLaunching17400,
                info: "Cargo Ship Launching 17,400 mt, Offshore China Mega Passion",
            },
            {
                image: DeckCarrierLaunching10000,
                info: "Deck Carrier Launching 10,000 mt, Offshore Korea Mega Passion",
            },
            {
                image: HanjinTandemBlock12300,
                info: "Hanjin Tandem Block 12,300 mt from China to Philippines",
            },
        ],
    },
    {
        id: 2,
        category: "MODULES",
        categoryImage: modules,
        projects: [
            {
                image: SingaporeNewPitchGasificationprojectconsolidated,
                info: "Singapore New Pitch Gasification project consolidated shipment, water stipper & wash column from Qingdao, China to Jurong Island, Singapore LINDE, AQUALISBRAEMAR Mega Caravan2",
            },
            {
                image: SingaporeNewPitchGasificationprojectonshore,
                info: "Singapore New Pitch Gasification project onshore module transportation 10 shipment from Kattupalli, India to Jurong Island, Singapore LINDE, TWD, LTHE Mega Caravan2",
            },
            {
                image: GorgonLNGProject,
                info: "Gorgon LNG Project Modules, PAU/PARs, GTGs 2,500 ~ 10,700 mt from Asia/Europe to Australia 4 years charter for 3 vessels Mega Caravan / Mega Caravan 2 / Mega Trust",
            },
            {
                image: GinaKrogProjectMSF,
                info: "Gina Krog Project MSF (Topside Module) 12,200 mt from Korea to Offshore Northsea Mega Caravan",
            },
            {
                image: GinaKrogProject,
                info: "Gina Krog ProjectProcess Module, Utility Module, Flareboom7,900 mtfrom Korea to Offshore Northsea Mega Caravan 2",
            },
            {
                image: FPSOModulesP66P69,
                info: "FPSO Modules P-66/P-69 5,000 mt from China to Brazil Mega Trust",
            },
            {
                image: BenePlantModules,
                info: "Bene Plant Modules 5,133 mt Australia domestic shipment Mega Caravan 2",
            },
            {
                image: FPSOModules,
                info: "FPSO Modules 5,000 mt from Thailand to China Mega Caravan",
            },
            {
                image: FPSOModulesP70,
                info: "FPSO Modules P-70 5,000 mt from Brazil to China Mega Trust",
            },
            {
                image: OffshoreModules,
                info: "Offshore Modules 3,166 mt from Thailand to China Mega Innovation",
            },
        ],
    },
    {
        id: 3,
        category: "OFFSHORE STRUCTURES",
        categoryImage: offshoreStructuring,
        projects: [
            {
                image: JanszIoCompression,
                info: "Jansz-Io Compression 24,982mt FCS Load-out and Float-off Chevron and Hanwha Ocean Mega Passion",
            },
            {
                image: AnchorFPUstructure,
                info: "Anchor FPU structure 22,700mt Side load-out 20,777mt Float-off CVX and DSME Mega Passion",
            },
            {
                image: WheatstoneProject,
                info: "Wheatstone Project Steel Gravity Structure 36,000 mt from Korea to Australia Mega Passion",
            },
            {
                image: GinaKrogProjectOffshore,
                info: "Gina Krog Project Process Module, Utility Module, Flareboom 7,900 mt from Korea to Offshore Northsea Mega Caravan 2",
            },
            {
                image: HorizontalWindfarmJackets,
                info: "Horizontal Windfarm Jackets 8,500 mt from UAE to UK Mega Caravan",
            },
            {
                image: JackUpRig,
                info: "Jack Up Rig29,000 mt Offshore Okpo, Korea Mega Passion",
            },
            {
                image: LegExtensionsCaisson,
                info: "Leg Extensions, Caisson 13,100 mt from UAE to Norway Mega Trust",
            },
            {
                image: FloatingDock,
                info: "Floating Dock 7,000 mt offshore Kwangyang, Korea Mega Passion",
            },
            {
                image: FlareBoom,
                info: "Flare Boom 300mt from China to Korea Mega Innovation",
            },
        ],
    },
    {
        id: 4,
        category: "PORT EQUIPMENT",
        categoryImage: portEquipement,
        projects: [
            {
                image: DismantledCrane,
                info: "Dismantled Crane3,360 mt from China to Korea Mega Innovation",
            },
            {
                image: Unloaders,
                info: "Unloaders 8,500 mt from China to Malaysia Mega Innovation",
            },
            {
                image: UnloaderDismantledCrane,
                info: "Unloader, Dismantled Crane 3,000 mt from China to Croatia Mega Trust",
            },
            {
                image: STSCraneRTGCrane,
                info: "STS Crane, RTG Crane 3,400 mt from China to Lebanon Mega Caravan 2",
            },
            {
                image: JibCranes,
                info: "Jib Cranes 6,000 mt from Korea to Qatar Mega Innovation",
            },
            {
                image: GantryCrane,
                info: "Gantry Crane 5,000 mt from China to Qatar Mega Innovation",
            },
            {
                image: FullyErectedGrabUnloader,
                info: "Fully Erected Grab Unloader 2,500 mt from Dalian to Japan Mega Innovation",
            },
            {
                image: RMQCRTGC,
                info: "RMQC & RTGC 6,000 mt from Korea to Oman Mega Innovation",
            },
        ],
    },
];




export const HeroProjectsStats = [
    {
        icon: "/icons/shipping.png",
        label: "Shipblock",
    },
    {
        icon: "/icons/transportation.png",
        label: "Modules",
    },
    {
        icon: "/icons/shield.png",
        label: "Offshore Structures",
    },
    {
        icon: "/icons/engineering.png",
        label: "Port Equipment",
    },
]

