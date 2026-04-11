import { Fira_Code as FontMono, Inter as FontSans, Poppins as FontPoppins, Open_Sans as FontOpenSans, Roboto as FontRoboto, Work_Sans as FontWorkSans, DM_Sans as FontDMSans, Overpass as FontOverpass} from "next/font/google";
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400"
});

export const fontOpenSans = FontOpenSans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700", "800"], 
});

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable: "--font-roboto",
   weight: "400"
});

export const fontWorkSans = FontWorkSans({
  subsets: ["latin"],
  variable: "--font-worksans",
   weight: ["300", "400", "500", "600", "700", "800"], 
});

export const fontDMSans = FontDMSans({
  subsets: ["latin"],
  variable: "--font-dmsans",
   weight: "400"
});

export const fontOverpass = FontOverpass({
  subsets: ["latin"],
  variable: "--font-overpass",
   weight: "400"
});

export const fontNightWindSent = localFont({
  src: "../../public/fonts/NightWindSentSample.otf", 
  variable: "--font-nightWindSent", 
  weight: "300 400 500 600 700 800",
  display: "swap", 
});