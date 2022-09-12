import Card from "./Card/Card";

const GrabYourCard = () => {
  return (
    <div className="bg-[#EEEEEE] py-24">
      <div className="text-center">
        <h2 className="font-michroma text-2xl">Grab your genuine</h2>
        <p className="font-medium font-ibm text-4xl text-[#898989] mt-2">
          Prime Product
        </p>
      </div>
      <div className="flex items-center justify-center gap-6 mt-14">
        <Card
          packageName="Package Red"
          price="49.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mcidunt sit at."
          image="/assets/package-cards/package-red.png"
        />
        <Card
          packageName="Package White"
          price="99.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mcidunt sit at."
          image="/assets/package-cards/package-white.png"
        />
        <Card
          packageName="Package Black"
          price="150.00"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing mcidunt sit at."
          image="/assets/package-cards/package-black.png"
        />
      </div>
    </div>
  );
};

export default GrabYourCard;
