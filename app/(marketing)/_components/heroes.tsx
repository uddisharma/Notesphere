import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex flex-col items-center md:flex-row">
        <Image
          src="/left.png"
          className="object-contain  h-[250px] w-[250px] hidden md:block"
          alt="Documents"
          height={350}
          width={350}
        />
        <Image
          src="/middle.png"
          className="w-[300px] hidden md:block ml-5"
          alt=""
          height={350}
          width={350}
        />
        <Image
          src="/right.png"
          className="object-contain "
          alt="Reading"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
};
