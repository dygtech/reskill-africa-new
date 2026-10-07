import { SectionLabel } from "@/components/ui/SharedUI";
import Image from "next/image";

const partners = [
    { name: "LASG", src: "/images/partners/lasg.png" },
    { name: "LSETF", src: "/images/partners/lsetf.png" },
    { name: "Mastercard Foundation", src: "/images/partners/mastercard.png" },
    { name: "BOI", src: "/images/partners/boi.png" },
    { name: "Google", src: "/images/partners/google.png" },
    { name: "British Council", src: "/images/partners/british-council.png" },
];

export function PartnersSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-10 lg:px-14 border-t border-gray-100 font-sans relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:pl-14">
                {/* 
                  The md:pl-14 here is to give space for the SectionLabel number and line
                  to align correctly as per the design system since the number is absolute positioned.
                */}
                <div className="relative">
                    <SectionLabel number="11" className="!text-gray-500">OUR PARTNERS</SectionLabel>
                    <h2 className="text-4xl md:text-[64px] font-black leading-[1] tracking-tight text-[#0B0B0B] mt-6">
                        Who we build <span className="text-rsa-red">with.</span>
                    </h2>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-0 mt-8">
                    {partners.map((partner, idx, arr) => (
                        <div key={idx} className={`flex-1 flex w-full md:w-auto items-center justify-center py-4 ${idx !== arr.length - 1 ? 'md:border-r border-gray-200' : ''}`}>
                            <div className="relative h-16 w-full max-w-[140px] flex items-center justify-center px-4">
                                <Image
                                    src={partner.src}
                                    alt={`${partner.name} Logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
