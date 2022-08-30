import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-24 bg-white flex items-center justify-center shadow-sm">
        <div className="w-[165px] h-[44px] relative">
          <Image
            src="/assets/logo.png"
            alt="Commercial Prime Logo"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center px-5 mt-[35%] sm:px-10 lg:mt-[15%] lg:px-24 2xl:mt-[8%] ">
        <h1 className="text-[25px] font-michroma lg:text-[40px] 2xl:text-[64px] 2xl:px-[20%]">
          Connections are just <span className="text-[#DBB659]">one tap</span>{" "}
          away
        </h1>
        <p className="mt-6 text-sm lg:text-lg xl:px-[200px]">
          Get shared your contact details instantly with a Prime tap. Commercial
          Prime brings you an iconic impression to create stronger connections.{" "}
        </p>
      </div>
      <div className="text-center text-white mt-9 lg:mt-16">
        <span className="py-2 px-5 bg-black rounded-md">
          We&apos;re launching soon
        </span>
      </div>
      <div className="absolute bottom-0 text-[150px] opacity-5 lg:text-[200px] 2xl:text-[300px]">
        <p>CP</p>
      </div>
    </div>
  );
}
