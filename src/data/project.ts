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
import chevronGorgonLng42VoysImage from "@/assets/Projects/webp/ChevronGorgonLNG(42Voys).png";
import chevronWheatstoneLngImage from "@/assets/Projects/webp/ChevronWheatstoneLNG.png";
import empireWind1Image from "@/assets/Projects/webp/EmpireWind1.jpg";
import equinorGinaKrogImage from "@/assets/Projects/webp/EquinorGinaKrog_002.jpg";
import equinorJohanSverdrupImage from "@/assets/Projects/webp/EquinorJohanSverdrupproject.png";
import p78ProjectImage from "@/assets/Projects/webp/P78PROJECT.jpg";
import p83ProjectImage from "@/assets/Projects/webp/P83PROJECT.jpg";
import shipBlockTransportationCvcImage from "@/assets/Projects/webp/ShipBlockTransportation(CVC).png";

export const categoryDisplayNames: Record<ProjectCategory, string> = {
    MODULES: "Modules",
    OFFSHORE_STRUCTURES: "Offshore Structures",
    PORT_EQUIPMENT: "Port Equipment",
    SHIPBUILDING: "Shipbuilding",
};

export const HomeProject = [
    {
        id: "1",
        name: "Empire Wind 1 (Jacket, Piles / Topside)",
        description: "HMC (2025 - 2026)",
        image: empireWind1Image,
        client: "HMC",
        cargo: "Jacket, Piles / Topside Module",
        pol: "Batam, Indonesia (FZGJ) / Singapore (MEC2)",
        pod: "New York Offshore, USA",
        duration: "May 2025 - Sep 2025 (FZGJ), Oct 2025 - Jan 2026 (MEC2)",
        vessel: "Fu Zhou Guo Ji, Mega Caravan 2",
        projectDetails:
            "Following the success of the 36,000mt Wheatstone SGS project for HMC, HML is now executing the Empire Wind 1 transport campaign. This project involves the shipment of an OSS Jacket and Piles weighing 6,017.3mt from Batam, Indonesia, and a Topside module weighing 3,372.6mt from Singapore to New York Offshore, USA.\n\nFrom rigorous technical planning to final execution, this project reaffirms HML's integrated expertise in delivering complex, ultra-heavy transport solutions for major global energy developments.",
    },
    {
        id: "2",
        name: "Sinotrans P83 Project",
        description: "Sinotrans, China (2025)",
        image: p83ProjectImage,
        client: "Sinotrans, China",
        cargo: "Topside modules",
        pol: "Nantong, China",
        pod: "Singapore",
        duration: "Sep - Oct 2025",
        vessel: "Mega Caravan 2",
        projectDetails:
            "Building on our proven track record of precision and reliability, HML successfully executed the P83 Project for Sinotrans, China, between September and October 2025. Utilizing the Heavy Transport Vessel Mega Caravan 2, we transported a 12,406mt module from Nantong, China, to Singapore.\n\nThis project further solidifies HML's expertise in executing complex heavy-modules transport with precision.",
    },
    {
        id: "3",
        name: "Dominion Energy Coastal Virginia Offshore Wind (8 Voys)",
        description: "DEME (2024 - 2025)",
        image: "/images/webp/DEME_CVOW_Project.webp",
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
        id: "4",
        name: "Brazil Petrobras FPSO - P78",
        description: "Dongbang & DHL (2023 - 2024)",
        image: p78ProjectImage,
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
        id: "5",
        name: "NOC (North Oil Company) Gallaf 3",
        description: "HMC (2023)",
        image: "/images/webp/Gallaf_3_Project.webp",
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
        id: "6",
        name: "ARAMCO Marjan Increment",
        description: "HMC (2023)",
        image: "/images/webp/Marjan_Project_ACC.webp",
        client: "HMC",
        cargo: "Offshore Structure",
        pol: "Sohar, Oman",
        pod: "Marjan field, Offshore Saudi Arabia",
        duration: "Sep - Nov 2023",
        vessel: "Mega Caravan 2",
        projectDetails:
            "HML supported the ARAMCO Marjan Increment development by transporting offshore structures from Sohar, Oman to the Marjan Field using the Heavy Transport Vessel Mega Caravan 2.\n\nExecuted between September and November 2023, the project involved close collaboration between HML's chartering, operations, and engineering teams to ensure safe handling, offshore readiness, and timely delivery under demanding environmental and operational conditions.",
    },
    {
        id: "7",
        name: "Mitsui RTGC Transportation (2 Voys)",
        description: "KCTC (2022 - 2023)",
        image: "/images/webp/RTG_Transportation.webp",
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
        id: "8",
        name: "Linde New Pitch Gasification Plant (10 Voys)",
        description: "Linde Engineering (2021 - 2022)",
        image: "/images/webp/Linde_Project.webp",
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
        id: "9",
        name: "NOC (North Oil Company) Gallaf 1",
        description: "HMC (2019)",
        image: "/images/webp/Gallaf_1_Project.webp",
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
        id: "10",
        name: "East Anglia ONE East Anglia (2 Voys)",
        description: "Lamprell (2018)",
        image: "/images/webp/EastAngliaProject.webp",
        client: "Lamprell",
        cargo: "Horizontal Windfarm Jackets",
        pol: "Hamriyah, UAE",
        pod: "Belfast, UK",
        duration: "Q1 - Q3 2018",
        vessel: "Mega Caravan, Mega Caravan 2",
        projectDetails:
            "HML successfully completed two consecutive voyages for the East Anglia ONE Offshore Wind Farm project between Q1 and Q3 2018. Entrusted by Lamprell, we managed the delivery of 11,000mt of wind farm flat packs from Hamriyah, UAE to Belfast, UK.\n\nOperating both Mega Caravan and Mega Caravan 2, HML ensured the safe transport of these specialized structures across a demanding long-haul route, highlighting our operational versatility in the renewable energy sector.",
    },
    {
        id: "11",
        name: "Ship Block Transportation (CVC)",
        description: "Samsung Heavy Industries (2018 - Continuing)",
        image: shipBlockTransportationCvcImage,
        client: "Samsung Heavy Industries",
        cargo: "Shipblock",
        pol: "Rongcheng & Ningbo, China",
        pod: "Gohyeon, Korea",
        duration: "May 2018 - Continuing",
        vessel: "MegaCaravan, MegaTrust",
        projectDetails:
            "HML leads the full logistics and marine operations for the long-term transport of mega and giga ship blocks between HML and SHI. From vessel chartering and route planning to tidal window analysis, draft clearance and ballast calculations, every voyage is engineered for precision. Our team coordinates port access, mooring and loading operations on both ends, ensuring structural safety, operational continuity, and schedule reliability across all shipments.",
    },
    {
        id: "12",
        name: "Equinor Johan Sverdrup Project",
        description: "Lamprell (2017 - 2018)",
        image: equinorJohanSverdrupImage,
        client: "Lamprell",
        cargo: "Leg extensions & Suction Caissons",
        pol: "Hamriyah, UAE",
        pod: "Bergen, Norway",
        duration: "Dec 2017 - Mar 2018",
        vessel: "Mega Trust",
        projectDetails:
            "HML successfully executed the transport of Leg Extensions and Suction Caissons for the Equinor Johan Sverdrup project between December 2017 and March 2018. For Lamprell, we utilized the Heavy Transport Vessel Mega Trust to deliver 12,400mt of offshore structures from Hamriyah, UAE to Bergen, Norway.\n\nThis achievement further solidified HML's reputation as a reliable partner for complex, long-distance heavy transport requirements.",
    },
    {
        id: "13",
        name: "Brazil Petrobras Tupi FPSO (P75, P77) (2 Voys)",
        description: "QGI (2016 - 2017)",
        image: "/images/webp/FPSO_Modules_Project.webp",
        client: "QGI",
        cargo: "FPSO Modules",
        pol: "Map Ta Phut, Thailand",
        pod: "Dalian, China",
        duration: "Q4 2016, Q2 2017",
        vessel: "Mega Caravan",
        projectDetails:
            "HML successfully executed two consecutive voyages for the Brazil Petrobras Tupi FPSO project covering P75 and P77 between late 2016 and early 2017. Operated with Mega Caravan, we transported a series of FPSO modules from Map Ta Phut, Thailand to Dalian, China for QGI.\n\nEach shipment involved the transport of four modules weighing 5,000mt per voyage, underscoring HML's specialized capability in managing large-scale modular transport for major offshore FPSO developments.",
    },
    {
        id: "14",
        name: "Equinor Gina Krog (2 Voys)",
        description: "Hanwha Ocean (2016)",
        image: equinorGinaKrogImage,
        client: "Hanwha Ocean",
        cargo: "Topside modules",
        pol: "Okpo, Korea",
        pod: "Gina Krog field, Offshore Stavanger, North Sea",
        duration: "Jun - Sep 2016",
        vessel: "Mega Caravan, Mega Caravan 2",
        projectDetails:
            "HML successfully completed two consecutive voyages for the Equinor Gina Krog project between June and September 2016. At the appointment of Hanwha Ocean, we managed the transport of critical offshore structures, including the MSF, PM, UM, and Flare Boom, from Okpo, Korea to the Gina Krog field in the North Sea.\n\nOperating both Mega Caravan and Mega Caravan 2, HML delivered a total volume consisting of 16,001mt and 7,995mt across sequential shipments. This project's successful execution in the challenging offshore environment of Stavanger demonstrated HML's technical precision and ability to handle high-tonnage offshore modules with safety.",
    },
    {
        id: "15",
        name: "Chevron Wheatstone LNG",
        description: "HMC (2014)",
        image: chevronWheatstoneLngImage,
        client: "HMC",
        cargo: "Steel Gravity Structure",
        pol: "Okpo, Korea",
        pod: "Wheatstone field, Offshore Australia",
        duration: "Aug 2014",
        vessel: "Mega Passion",
        projectDetails:
            "HML's successful delivery of the Wheatstone Steel Gravity Structure campaign established a benchmark for complex offshore heavy transport. The project demonstrated HML's integrated capability across vessel selection, technical planning, engineering review, and execution for ultra-heavy structures destined for offshore Australia.\n\nThis legacy campaign remains a key reference point for later large-scale offshore energy transport projects.",
    },
    {
        id: "16",
        name: "Chevron Gorgon LNG (42 Voys)",
        description: "Kellogg Joint Venture (2012 - 2016)",
        image: chevronGorgonLng42VoysImage,
        client: "Kellogg Joint Venture",
        cargo: "Module",
        pol: "Korea / Indonesia / Thailand / China / Italy",
        pod: "Barrow Island, Australia",
        duration: "Mar 2012 - Jan 2016",
        vessel: "Mega Caravan, Mega Caravan 2",
        projectDetails:
            "HML successfully completed 42 consecutive voyages for the Chevron Gorgon LNG project between 2012 and 2016. Utilizing both Mega Caravan and Mega Caravan 2, we transported various modules, PAR, and PAU cargoes ranging from 2,500mt to 9,000mt from global origins including Korea, Indonesia, Thailand, China, and Italy to Barrow Island, Australia.\n\nThis large-scale operation demonstrated HML's global logistics management and capability to handle high-intensity project schedules.",
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
