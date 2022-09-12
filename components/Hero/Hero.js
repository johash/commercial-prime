import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-130px)]">
      <div className="2xl:w-[60%] h-full 2xl:pl-28 2xl:pt-20 3xl:w-[50%]">
        <h1 className="text-[64px] font-michroma">
          Connections are just <span className="text-[#dbb659]">one tap</span>{" "}
          away
        </h1>
        <p className="opacity-50 text-lg mt-8">
          Get shared your contact details instantly with a Prime tap. Commercial
          Prime brings you an iconic impression to create stronger connections.
        </p>
        <div className="flex items-center gap-5 mt-10">
          <Button secondary width={200}>
            Buy Prime
          </Button>
          <Button width={200}>Watch Video</Button>
        </div>
        <button className="text-[#C39A32] flex items-center gap-2 text-sm mt-12">
          <span className="underline underline-offset-4">
            Become Prime ambassador
          </span>
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-0 right-20">
        <div className="relative 2xl:w-[474px] 2xl:h-[585px] 3xl:w-[581px] 3xl:h-[717px]">
          <Image
            src="/assets/png/phone-in-hand.png"
            alt="Phone in hand"
            layout="fill"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
