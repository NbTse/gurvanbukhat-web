import Link from "next/link";
import React, { useRef, useState } from "react";
import { OnClickOutside } from "../../lib/utils/on-click-outside";
export default function MyDropdown({ clickOutside }: any) {
  const [open, setOpen] = useState(false);

  const modalRef = React.useRef<HTMLInputElement>(null);

  OnClickOutside(modalRef, () => setOpen(false), true);
  return (
    <>
      <div ref={modalRef}>
        <p
          onClick={() => setOpen(!open)}
          className="text-[14px] text-white cursor-pointer link-underline mr-8"
        >
          Бидний тухай
        </p>

        {open ? (
          <ul className="header-menu">
            <li className="menu-item">
              <Link
                className="block px-4 py-3 text-sm text-[#ffffffa3] whitespace-no-wrap bg-[#00043C] rounded-t-lg hover:text-white cursor-pointer"
                href="/about"
                passHref
              >
                Ерөнхий захирлын мэндчилгээ
              </Link>
            </li>
            <li className="menu-item">
              <Link
                passHref
                className="block px-4 py-3 text-sm text-[#ffffffa3] whitespace-no-wrap bg-[#00043C] rounded-b-lg hover:text-white cursor-pointer"
                href="/company-introduction"
              >
                Компанийн танилцуулга
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}
