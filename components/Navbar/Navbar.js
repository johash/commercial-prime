import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../UI/Button/Button";

const Navbar = () => {
  return (
    <div className="w-full h-[84px] bg-white shadow-sm 2xl:flex 2xl:items-center 2xl:justify-between 2xl:px-20">
      <div>
        <Image
          src="/assets/logo.png"
          alt="Commercial Prime Logo"
          layout="fixed"
          height={44}
          width={165}
        />
      </div>
      <ul className="list-none text-sm 2xl:flex 2xl:items-center 2xl:gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/compatibility-list">Compatibility List</Link>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Button>Manage My Card</Button>
        <Button primary>Buy a Card</Button>
        <button className="p-3 border-[1px] border-[#CFCFCF] rounded-lg">
          <MdOutlineShoppingCart size={16} color="#DBB659" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
