import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#282828] w-full xl:h-[350px] md:flex md:flex-col md:items-center md:pt-14">
      <div className="relative w-[165px] h-[44px]">
        <Image
          src="/assets/logo-footer.png"
          alt="footer logo"
          layout="fill"
          priority={true}
        />
      </div>
      <ul className="flex items-center gap-9 mt-9 text-white text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/compatibility-list">Compatibility List</Link>
        </li>
        <li>
          <Link href="/manage-my-card">Manage My Card</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
      <p className="w-[50%] text-center text-sm text-[#DDDDDD] opacity-50 font-normal mt-6">
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
      </p>
      <div className="w-full mt-auto flex items-center">
        <div className="w-[580px] h-[52px] bg-[#1E1E1E] flex-auto rounded-tr-full" />
        <div className="flex items-center gap-7 text-[#939393] px-16">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
        <div className="w-[580px] h-[52px] bg-[#1E1E1E] flex-auto rounded-tl-full" />
      </div>
    </div>
  );
};

export default Footer;
