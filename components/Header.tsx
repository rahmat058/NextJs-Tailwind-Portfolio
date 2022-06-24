import Link from "next/link";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container mx-auto text-center h-full relative">
        <h5>Hello I'm</h5>
        <h1 className="text-[2.5rem]">John Smith</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="bg-gradient-to-b from-primary to-transparent w-22 h-30 absolute left-[calc(50%-11rem)] mt-16 rounded-t-12 rounded-b-0 overflow-hidden px-6 pt-20 pb-6">
          <img src="/assets/me.png" alt="me" className="me-img" />
        </div>

        <Link href="/#contact">
          <a className="absolute -right-[2.3rem] bottom-20 rotate-90 font-light text-[0.9rem]">
            Scroll Down
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
