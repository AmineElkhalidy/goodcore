import React from "react";

// Next components
import Link from "next/link";

// Icons
import {
  TvIcon,
  DevicePhoneMobileIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <section className="py-12">
      {/* Container */}
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section title and description */}
        <div className="mb-20 text-center">
          <h2 className="text-[26px] uppercase font-bold mb-4 section-heading md:text-[48px]">
            Our <span>Services</span>
          </h2>
          <p className="md:text-[24px]">
            GoodCore is a leading bespoke software development company based in
            Croydon, UK. We build robust software for startups and established
            businesses. Since 2005.
          </p>
        </div>

        {/* Grid container */}
        <div className="grid gap-6 place-items-center md:grid-cols-3">
          {/* Web apps */}
          <div className="max-w-lg py-8 px-4 border-2 border-[#f1f1f1] rounded-xl duration-500 group hover:bg-[#1a64a3] hover:cursor-pointer">
            <div className="flex items-center justify-center">
              <TvIcon className="w-20 h-20 text-[#1a64a3] duration-500 group-hover:text-white group-hover:scale-105" />
            </div>

            <div className="text-center text-[#303234] group-hover:text-white">
              <h3 className="my-[10px] font-semibold">
                Web Application Development
              </h3>
              <p className="mb-4 text-sm">
                Utilising the latest technologies, we build web applications
                that deliver remarkable functionality and user engagement from
                within a browser window.{" "}
              </p>
              <Link
                className="uppercase text-[#78bdf8] group-hover:text-white "
                href={""}
              >
                More &#62;&#62;
              </Link>
            </div>
          </div>

          {/* Mobile apps */}
          <div className="max-w-lg py-8 px-4 border-2 border-[#f1f1f1] rounded-xl duration-500 group hover:bg-[#1a64a3] hover:cursor-pointer">
            <div className="flex items-center justify-center">
              <DevicePhoneMobileIcon className="w-20 h-20 text-[#1a64a3] duration-500 group-hover:text-white group-hover:scale-105" />
            </div>

            <div className="text-center text-[#303234] group-hover:text-white">
              <h3 className="my-[10px] font-semibold">
                Mobile App Development
              </h3>
              <p className="mb-4 text-sm">
                Stunning mobile apps that work across a variety of devices and
                engage large audiences – designed with security, scalability,
                and usability in mind.
              </p>
              <Link
                className="uppercase text-[#78bdf8] group-hover:text-white "
                href={""}
              >
                More &#62;&#62;
              </Link>
            </div>
          </div>

          {/* Dev team */}
          <div className="max-w-lg py-8 px-4 border-2 border-[#f1f1f1] rounded-xl duration-500 group hover:bg-[#1a64a3] hover:cursor-pointer">
            <div className="flex items-center justify-center">
              <UserIcon className="w-20 h-20 text-[#1a64a3] duration-500 group-hover:text-white group-hover:scale-105" />
            </div>

            <div className="text-center text-[#303234] group-hover:text-white">
              <h3 className="my-[10px] font-semibold">
                Dedicated Development Team
              </h3>
              <p className="mb-4 text-sm">
                Scale your delivery capacity with a wide range of technology
                skills - leverage GoodCore’s experience in hiring, motivating
                and managing top tech professionals.
              </p>
              <Link
                className="uppercase text-[#78bdf8] group-hover:text-white "
                href={""}
              >
                More &#62;&#62;
              </Link>
            </div>
          </div>
        </div>

        {/* View all button */}
        <div className="mt-10 text-center">
          <Link
            className="px-16 py-4 text-sm font-semibold text-blue-400 uppercase duration-300 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white hover:shadow-md hover:shadow-blue-400/60"
            href={""}
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
