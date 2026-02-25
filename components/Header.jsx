import Image from "next/image";

export const Header = ({ h3, p }) => {
  return (
    <div className="flex flex-col gap-2 mb-7">
      <Image
        src="/pinecone-logo.png"
        alt="pinecone logo"
        width={60}
        height={60}
      />
      <h3 className="font-semibold text-[26px]   ">Join Us! 😎</h3>
      <p className="text-[#8E8E8E] text-[18px]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
