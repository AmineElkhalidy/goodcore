"use client";

import React, { useState } from "react";

// Next components
import Image from "next/image";
import Link from "next/link";

// Logo image
import Logo from "../assets/images/logo.webp";
import NavProcess from "../assets/images/Nav-Process.webp";

// Icons
import {
  Bars3Icon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  XMarkIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";

const Header = () => {
  // Menu state
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white">
      {/* Top links */}
      <div className="hidden w-full md:block bg-[#0b5492] py-2">
        <div className="mr-28">
          <div className="flex justify-end gap-6 text-white">
            <Link
              className="inline-flex items-center gap-1 text-xs uppercase group"
              href={"mailto:contact@goodcore.co.uk"}
            >
              <EnvelopeIcon className="w-4 h-4" />{" "}
              <span className="group-hover:underline">
                contact@goodcore.co.uk
              </span>
            </Link>

            <Link
              className="inline-flex items-center gap-1 text-xs uppercase group"
              href={"tel:02087816903"}
            >
              <DevicePhoneMobileIcon className="w-4 h-4" />{" "}
              <span className="group-hover:underline">020 8781 6903</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto lg:max-w-6xl lg:px-0">
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
            <li className="h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center text-sm uppercase"
                href={""}
              >
                services <ArrowDownSFillIcon className="w-4 h-4" />
              </Link>

              <div className="absolute left-0 top-[-5000%] group-hover:top-[6.1rem] ">
                <div className="z-50 w-screen bg-white shadow-2xl">
                  {/* Grid container for 3 divs */}
                  <div className="flex w-full gap-6">
                    {/* First div */}
                    <div className="flex flex-col py-6 px-4 items-center justify-between bg-orange-500 w-[250px]">
                      {/* Images container */}
                      <div className="flex">
                        <div className="w-12 h-12 overflow-hidden border-white rounded-full">
                          <Image
                            className="w-full h-full bg-blue-300"
                            src={""}
                            alt=""
                          />
                        </div>
                        <div className="w-12 h-12 -ml-3 overflow-hidden border-white rounded-full">
                          <Image
                            className="w-full h-full bg-blue-300"
                            src={""}
                            alt=""
                          />
                        </div>
                        <div className="w-12 h-12 -ml-3 overflow-hidden border-white rounded-full">
                          <Image
                            className="w-full h-full bg-blue-300"
                            src={""}
                            alt=""
                          />
                        </div>
                        <div className="w-12 h-12 -ml-3 overflow-hidden border-white rounded-full">
                          <Image
                            className="w-full h-full bg-blue-300"
                            src={""}
                            alt=""
                          />
                        </div>
                      </div>

                      {/* Content container */}
                      <div className="space-y-3 text-white">
                        <h3 className="text-xl font-bold ">Hire Team</h3>
                        <p className="mb-3">
                          Create your own agile squad with experienced members
                          like your local team
                        </p>

                        <Link
                          className="inline-block px-4 py-2 font-semibold text-orange-500 duration-500 bg-white border border-orange-500 rounded-full hover:bg-transparent hover:border-white hover:text-white"
                          href={""}
                        >
                          Know more
                        </Link>
                      </div>
                    </div>

                    {/* Second div */}
                    <div className="grid max-w-2xl grid-cols-2 gap-2 py-2">
                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <p className="text-sm text-gray-500">
                          Cost-efficient business apps and web portals
                          custom-built for a variety of industries
                        </p>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <p className="text-sm text-gray-500">
                          Cost-efficient business apps and web portals
                          custom-built for a variety of industries
                        </p>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <ul className="space-y-1 text-sm text-gray-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <ul className="space-y-1 text-sm text-gray-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <p className="text-sm text-gray-500">
                          Cost-efficient business apps and web portals
                          custom-built for a variety of industries
                        </p>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <ul className="space-y-1 text-sm text-gray-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <ul className="space-y-1 text-sm text-gray-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                        <h3 className="mb-2 font-semibold uppercase">
                          Web App Development
                        </h3>

                        <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                        <ul className="space-y-1 text-sm text-gray-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Third div */}
                    <div className="flex flex-col gap-40 py-8">
                      <div>
                        <h3 className="mb-5 font-semibold uppercase">
                          Professional services
                        </h3>

                        <ul className="space-y-4 uppercase text-slate-500">
                          <li>
                            <Link
                              className="inline-flex items-center gap-2 text-sm duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 text-sm duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 text-sm duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 text-sm duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="inline-flex items-center gap-2 text-sm duration-300 hover:text-blue-500 hover:font-bold"
                              href={""}
                            >
                              <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                              Development
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <Image src={NavProcess} alt="Development process kit" />
                    </div>
                  </div>

                  {/* Custom solution part */}
                  <div className="flex items-center justify-between w-full p-6 bg-orange-500 rounded-b-xl ">
                    <div className="text-white">
                      <h3 className="mb-2 text-xl font-bold">
                        Need a custom solution ?
                      </h3>
                      <p className="max-w-xl">
                        We understand one size doesn't fit all, we can work with
                        you to define and a custom solution that meets your
                        need.
                      </p>
                    </div>

                    <Link
                      className="inline-block px-4 py-2 font-semibold text-orange-500 duration-500 bg-white border border-orange-500 rounded-full hover:bg-transparent hover:border-white hover:text-white"
                      href={""}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center text-sm uppercase"
                href={""}
              >
                Technologies <ArrowDownSFillIcon className="w-4 h-4" />
              </Link>

              <div className="absolute left-0 top-[-5000%] group-hover:top-[6.1rem]">
                <div className="z-50 w-screen bg-white shadow-2xl">
                  <div className="grid max-w-6xl grid-cols-4 gap-2 py-4 mx-auto">
                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="inline-flex items-center gap-2 duration-300 hover:text-blue-500 hover:font-bold"
                            href={""}
                          >
                            <ArrowRightIcon className="w-4 h-4" /> B2B Portal
                            Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center text-sm uppercase"
                href={""}
              >
                Company <ArrowDownSFillIcon className="w-4 h-4" />
              </Link>

              <div className="absolute left-0 top-[-5000%] group-hover:top-[6.1rem]">
                <div className="z-50 w-screen bg-white shadow-2xl">
                  <div className="grid max-w-6xl grid-cols-3 gap-2 py-4 mx-auto">
                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="h-16 pt-[1.2rem] px-2 group duration-300 hover:bg-blue-50 hover:border-b-2 hover:border-blue-500">
              <Link
                className="inline-flex items-center text-sm uppercase"
                href={""}
              >
                Industries <ArrowDownSFillIcon className="w-4 h-4" />
              </Link>

              <div className="absolute left-0 top-[-5000%] group-hover:top-[6.1rem]">
                <div className="z-50 w-screen bg-white shadow-2xl">
                  <div className="grid max-w-6xl grid-cols-3 gap-2 py-4 mx-auto">
                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>

                    <div className="relative px-6 py-3 duration-500 cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
                      <h3 className="mb-2 font-semibold uppercase">
                        Web App Development
                      </h3>

                      <span className="inline-block w-[2.2rem] h-[5px] bg-blue-500 rounded-lg absolute -left-[1.05rem] top-6 rotate-90"></span>
                      <p className="text-sm text-gray-500">
                        Cost-efficient business apps and web portals
                        custom-built for a variety of industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
