import { StaticImageData } from "next/image";
import Image from "next/image"

interface WorkflowCardProps {
    title: string
    description: string
    image: StaticImageData
}

export function WorkflowCard({ title, description, image }: WorkflowCardProps) {
    return (
        <div className={`relative bg-gray-100 border-0 h-32 w-1/4 min-w-80 md:min-w-96`}>
            <div className="flex gap-3 pr-4 py-4">
                <div className="relative shrink-0">
                    <Image src={image} alt={title} className="object-cover w-24 h-16" />
                </div>
                <div className="space-y-1">
                    <h3 className="font-extrabold text-xs md:text-md text-gray-800 uppercase">{title}</h3>
                    <p className="text-sm md:text-sm text-gray-800">{description}</p>
                </div>
            </div>
        </div>
    )
}

