import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const Card = ({ packageName, price, description, image }) => {
  return (
    <div className="w-[410px] rounded-md">
      <div className="bg-white flex items-center justify-center py-16 rounded-tr-md rounded-tl-md border-b">
        <div className="relative w-[296px] h-[177px]">
          <Image src={image} alt="package card" layout="fill" priority={true} />
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center text-center p-8">
        <h5 className="font-michroma text-lg">{packageName}</h5>
        <p className="opacity-50 text-[15px] mt-3">{description}</p>
        <span className="font-medium text-lg opacity-50 mt-5">$ {price}</span>
        <button className="w-[260px] flex items-center justify-center gap-3 text-[#2F2F2F] border border-[#E2E2E2] py-4 rounded-md mt-6">
          <p className="font-semibold text-base">Buy Now</p>
          <span>
            <MdArrowForwardIos />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
