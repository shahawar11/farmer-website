import Image from "next/image";
import React from "react";
import SectionTitle from "../global/SectionTitle";

function HomeFeatures() {
  const features = [
    { src: "/tools.jpg", alt: "tools", label: "Tools" },
    { src: "/fertilizer.jpg", alt: "fertilizer", label: "Fertilizer" },
    { src: "/pesticide.jpg", alt: "pesticide", label: "Pesticide" },
    { src: "/seeds.jpg", alt: "seeds", label: "Seeds" },
    { src: "/herbicide1.jpg", alt: "herbicide", label: "Herbicide" },
    { src: "/manure.jpg", alt: "manure", label: "Manure" },
  ];

  return (
    <div className="padding">
      <SectionTitle text="Our Expertise" />
      <div className="flex  flex-col md:flex-row gap-x-12 gap-y-4 justify-center lg:justify-start items-center">
        <div className="flex flex-wrap gap-12 ">
          {features.slice(0, 3).map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className="w-16 h-16 border rounded-full ring-2 ring-primary overflow-hidden relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-12">
          {features.slice(3).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 border ring-2 ring-primary rounded-full overflow-hidden relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
