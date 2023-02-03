"use client";

import React, { useState } from "react";

// Next components
import Image from "next/image";
import Link from "next/link";

// Logo image
import Logo from "../assets/images/logo.webp";

// Menu icon
import {
  Bars3Icon,
  ChevronDoubleDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  // Menu state
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto h-16 flex justify-between items-center px-4 lg:max-w-6xl">
        <Link className="cursor-pointer" href={"#"}>
          <Image className="w-[70%]" src={Logo} alt="Header logo" />
        </Link>

        {/* Togglers container */}
        <div className="duration-300">
          {open ? (
            <div className="inline-block">
              <XMarkIcon
                className="w-10 h-10 cursor-pointer text-[#185286]"
                onClick={() => setOpen(false)}
              />
            </div>
          ) : (
            <div className="inline-block">
              <Bars3Icon
                className="w-10 h-10 cursor-pointer text-[#185286]"
                onClick={() => setOpen(true)}
              />
            </div>
          )}
        </div>

        {/* <div className="fixed top-16 left-0 z-50 max-w-md mx-auto">
          <ul className="">
            <li>
              <Link href={""}>
                Services <ChevronDoubleDownIcon className="" />
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
