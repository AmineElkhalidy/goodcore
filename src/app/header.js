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
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  // Menu state
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white">
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto lg:max-w-6xl">
        <Link className="cursor-pointer" href={"#"}>
          <Image className="w-[70%]" src={Logo} alt="Header logo" />
        </Link>

        {/* Togglers container */}
        <div className="lg:hidden">
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

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            <li className="relative h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center gap-1 text-sm uppercase"
                href={""}
              >
                services <ChevronDownIcon className="w-4 h-4" />
              </Link>
            </li>

            <li className="relative h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center gap-1 text-sm uppercase"
                href={""}
              >
                Technologies <ChevronDownIcon className="w-4 h-4" />
              </Link>
            </li>

            <li className="relative h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center gap-1 text-sm uppercase"
                href={""}
              >
                Company <ChevronDownIcon className="w-4 h-4" />
              </Link>
            </li>

            <li className="relative h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center gap-1 text-sm uppercase"
                href={""}
              >
                Industries <ChevronDownIcon className="w-4 h-4" />
              </Link>
            </li>

            <li className="h-16 pt-[1.2rem]">
              <Link className="text-sm uppercase w-[160px] " href={""}>
                Case Studies
              </Link>
            </li>

            <li className="h-16 pt-[1.2rem] mx-2">
              <Link className="text-sm uppercase" href={""}>
                Blog
              </Link>
            </li>

            <li className="h-16 pt-[1.2rem]">
              <Link
                className="px-6 py-3 text-xs text-white uppercase duration-300 bg-blue-400 border border-blue-400 rounded-full hover:text-blue-400 hover:bg-white "
                href={""}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
