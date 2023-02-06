import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobine-menu-button";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "components/common/logo";
import MyDropdown from "components/common/dropdown";

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className="absolute header">
      <div className="!max-w-full">
        <nav className="nav">
          <Logo />
        </nav>
        <div className="flex-action">
          <div className="flex">
            <MyDropdown clickOutside />
            <Link
              className="mr-8 text-[14px] cursor-pointer text-white "
              href="/projects"
              passHref
            >
              <p className="link-underline">Төслүүд</p>
            </Link>

            <Link
              className=" mr-8 text-[14px] cursor-pointer text-white "
              href="/news"
              passHref
            >
              <p className="link-underline"> Судалгаа, Мэдээлэл</p>
            </Link>
          </div>
        </div>
        {/* <!-- mobile menu button --> */}
        <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
        {/* <!-- mobile menu --> */}
        {menuState ? <MobileMenu /> : null}
      </div>
    </header>
  );
}
