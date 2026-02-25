import Image from "next/image";

export const StepFour = () => {
  return (
    <div className="w-120 flex flex-col gap-2 mb-7">
      <Image
        src="/pinecone-logo.png"
        alt="pinecone logo"
        width={60}
        height={60}
      />
      <h3 className="font-semibold text-[26px]   ">You're All Set! 🔥</h3>
      <p className="text-[#8E8E8E] text-[18px]">We've received your submission. Thank you!</p>
    </div>
  );
};
  