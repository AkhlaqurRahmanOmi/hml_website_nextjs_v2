import Image from "next/image";
import HML_LOGO from "@/assets/HML_logo_white-04.png";
import Link from "next/link";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="bg-[#094d82]">
            <div className="max-w-full flex flex-col-reverse gap-y-3 lg:flex-row justify-between items-center px-4 md:px-10 lg:px-16 xl:px-24 py-6">
                {/* Social Icon */}
                <div className="">
                    <ul className="flex space-x-4">
                        <Link href={"https://www.linkedin.com/company/hml-korea/"}>
                            <FaLinkedinIn className="size-8 fill-white bg-[#0077B5] p-2 rounded-md" />
                        </Link>
                        <Link href={"https://www.youtube.com/@HML-Korea"}>
                            <FaYoutube className="size-8 fill-white bg-red-600 px-1 rounded-md" />
                        </Link>
                    </ul>
                </div>
                {/* Description */}
                <div className=" text-center text-white font-thin">
                    <p>11th Floor, Kwanghwamoon Building, 149 Sejong-daero, Jongno-gu, Seoul, Republic of Korea 03186
                    </p>
                    <p>TEL: +82-2-752-3400, FAX: +82-2-6280-3402, EMAIL: marketing@hi-megaline.com</p>
                    <p>© 2025 HML All rights reserved</p>
                </div>
                {/* Company Logo */}
                <div className="flex space-x-4">
                    <div>
                        <Link href="#" className="flex items-center py-3 px-2 text-gray-700 hover:text-gray-900">
                            <Image src={HML_LOGO} alt="HML LOGO" width={200} height={100} className="w-full h-16" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}