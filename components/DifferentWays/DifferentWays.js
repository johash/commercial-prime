import Image from "next/image";

const DifferentWays = () => {
  return (
    <div className="pt-28">
      <div className="text-center">
        <h2 className="font-michroma text-2xl">Prime card works in</h2>
        <p className="text-[#898989] font-ibm font-medium text-4xl mt-2">
          2 different ways
        </p>
      </div>
      <div className="flex items-center gap-[125px] justify-center py-16">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <Image src="/assets/icons/nfc.png" alt="nfc icon" layout="fill" />
          </div>
          <p className="font-medium text-xl mt-6">NFC</p>
          <span className="text-xl opacity-50 mt-[2px]">Tap to connect</span>
        </div>
        <div>
          <div className="relative w-[606px] h-[499px]">
            <Image
              src="/assets/png/prime-card.png"
              alt="prime card"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <Image src="/assets/icons/qr.png" alt="nfc icon" layout="fill" />
          </div>
          <p className="font-medium text-xl mt-6">QR</p>
          <span className="text-xl opacity-50 mt-[2px]">Scan to connect</span>
        </div>
      </div>
    </div>
  );
};

export default DifferentWays;
