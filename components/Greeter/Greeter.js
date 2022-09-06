import Image from "next/image";
import React from "react";

const Greeter = () => {
  return (
    <div className="w-full h-[46px] bg-[#252525] flex items-center justify-center gap-5">
      <div>
        <Image
          src="/assets/icons/gift-icon.png"
          alt="gift icon"
          layout="fixed"
          width={26}
          height={26}
        />
      </div>
      <p className="text-white text-sm">
        Free <span className="font-michroma text-[#d4ae53]">Prime</span> Tap
        with every purchase!
      </p>
    </div>
  );
};

export default Greeter;
