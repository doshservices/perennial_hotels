import Image from "next/image";

export default function BrandPartnerships() {
  const brand = [
    { image: "hyatt", title: "Hyatt" },
    { image: "holiday", title: "HolidayInn" },
    { image: "fp", title: "FourPoints" },
    { image: "bw", title: "BestWestern" },
    { image: "marriot", title: "Marriot" },
    { image: "aloft", title: "Aloft" },
    { image: "radisson", title: "RadissonRed" },
    { image: "novotel", title: "Novotel" },
    { image: "radissonblue", title: "RadissonBlue" },
    { image: "courtyard", title: "Courtyard" },
    { image: "dt", title: "DoubleTree" },
    { image: "parkinn", title: "parkinn" },
    { image: "kemp", title: "Kempinski" },
    { image: "moven", title: "Moven" },
    { image: "inter", title: "Intercontinental" },
  ];
  return (
    <div className=" flex flex-col items-center justify-center py-10 px-5">
      <h1 className="text-2xl mb-15">Our Strong Brand Relationships</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {brand.map((item, index) => (
          <div
            key={index}
            className="w-28"
          >
            <Image
              src={`/assets/${item.image}.png`}
              alt={item.title}
              width={100}
                height={100}
              className="w-full h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
