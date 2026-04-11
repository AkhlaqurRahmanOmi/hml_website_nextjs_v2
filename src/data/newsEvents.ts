import type { StaticImageData } from "next/image";
import kobc1 from "@/assets/event_news/kobc/1.jpg";
import kobc2 from "@/assets/event_news/kobc/2.jpg";
import kobc3 from "@/assets/event_news/kobc/3.jpg";
import kobc4 from "@/assets/event_news/kobc/4.jpg";
import kobc5 from "@/assets/event_news/kobc/5.jpg";
import kobc6 from "@/assets/event_news/kobc/6.jpg";

export type NewsEvent = {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  image?: string | StaticImageData;
  images?: Array<string | StaticImageData>;
  date: {
    month: string;
    day: string;
  };
};

export const newsEvents: NewsEvent[] = [
  {
    id: "kdbc-cess",
    title: "KOBC Award",
    subtitle: "Hi-Megaline Achieves Excellent Shipping Company and Shipper (CESS) Certification",
    image: kobc1,
    images: [
      kobc1,
      kobc2,
      kobc3,
      kobc4,
      kobc5,
      kobc6,
    ],
    date: { month: "APR", day: "10" },
    body:
      "Hi-Megaline is proud to announce that it has officially earned the Certified Excellent Shipping Company and Shipper (CESS) designation from the Korea Ocean Business Corporation (KOBC). This certification recognizes companies that demonstrate operational excellence and commitment to fair, transparent, and collaborative shipping practices. Hi-Megaline was highly commended for its contribution to the maritime industry and its reliable logistics network.\n\nThis achievement reflects our dedication to operational integrity and the trust of our clients, said Hi-Megaline. We are grateful to KOBC and our hardworking team for making this possible. We will continue to drive competitiveness and sustainable growth in the global maritime sector.\n\nHi-Megaline remains committed to delivering advanced logistics solutions as a trusted global partner.",
  },
  {
    id: "cydf-chartering",
    title: "CYDF Chartering",
    subtitle: "Hi-Megaline Introduces New Long-Term Vessel, Chang Yang Dong Fang",
    image: "/placeholder.svg",
    date: { month: "APR", day: "04" },
    body:
      "Hi-Megaline has officially added the Chang Yang Dong Fang to its fleet as a new long-term charter vessel.\n\nChang Yang Dong Fang is specifically designed to support reliable and efficient maritime operations. With a strong emphasis on safety, performance, and operational excellence, the vessel is well equipped to meet complex transportation requirements across global routes.\n\n\"The introduction of this new vessel will allow us to provide even more precise and stable logistics services on a global scale,\" Hi-Megaline stated. The company also reaffirmed its commitment to maintaining the highest standards of transportation quality moving forward.",
  },
  {
    id: "hug-megaline",
    title: "Contract Signing of the New Building: The Launch of HUG Megaline",
    subtitle: "Hi-Megaline Expands Global Maritime Competitiveness",
    image: "/placeholder.svg",
    date: { month: "MAR", day: "15" },
    body:
      "Hi-Megaline is proud to announce the establishment of its fourth subsidiary, HUG Megaline, and the upcoming contract signing for a new building vessel to further strengthen our global maritime competitiveness. Representing our core values, the name HUG stands for \"Happy through Unique Grit,\" embodying our commitment to achieving collective happiness through the distinctive perseverance that defines Hi-Megaline.\n\nCurrently in the final stages of incorporation, HUG-Megaline will serve as a strategic cornerstone for our fleet expansion, ensuring that we continue to deliver excellence and navigate the future of heavy-lift shipping with unmatched grit and innovation.",
  },
  {
    id: "17th-anniversary",
    title: "17th Anniversary of Hi-Megaline",
    subtitle: "Hi-Megaline Celebrates 17th Anniversary",
    image: "/placeholder.svg",
    date: { month: "MAR", day: "01" },
    body:
      "Hi-Megaline marked its 17th anniversary on the 10th with a special company-wide teatime and dinner. This event was a meaningful opportunity for all the members to step back from their schedules to pause, reflect, and celebrate our collective achievements. Following a relaxed teatime, the evening dinner served as a platform to strengthen our bonds and honor the dedication that has driven our growth over the past 17 years.\n\nBuilding on the incredible energy of the first half of the year, we are ready to take on the rest of 2026. As we look ahead, we move forward with gratitude, ambition, and confidence. Congratulations to everyone on 17 successful years. Let's keep the momentum going through the second half of the year!",
  },
];
