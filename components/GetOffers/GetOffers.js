import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const GetOffers = () => {
  return (
    <div className="bg-black 2xl:px-24 2xl:py-32">
      <h2 className="text-[28px] text-white font-michroma text-center">
        Commercial Prime for{" "}
        <span className="text-[38px] text-[#DBB659] font-ibm">
          Entrepreneurs
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-20">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Kate Moss"
            className="bg-[#141416] text-[#7B7B7B] rounded-lg px-5 py-[18px] border-[1px] border-[#2D2F32] outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contactNo" className="text-white text-sm mb-2">
            Contact No
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            placeholder="+947103147710"
            className="bg-[#141416] text-[#7B7B7B] rounded-lg px-5 py-[18px] border-[1px] border-[#2D2F32] outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white text-sm mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="katemoss@mail.com"
            className="bg-[#141416] text-[#7B7B7B] rounded-lg px-5 py-[18px] border-[1px] border-[#2D2F32] outline-none"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#DBB659] text-white flex items-center gap-2 px-14 py-5 rounded-md">
          <span>Get Offers</span>
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GetOffers;
