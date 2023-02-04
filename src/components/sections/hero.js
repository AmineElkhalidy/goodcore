import React from "react";

// Next component
import Image from "next/image";
import Link from "next/link";

// Hero images
import HeroImg from "../../assets/images/peter.webp";
import YearsOfExp from "../../assets/images/yrs-of-exp.webp";
import Projects from "../../assets/images/project-delivered.webp";
import Location from "../../assets/images/location-based.webp";
import Clutch from "../../assets/images/Clutch.webp";

const Hero = () => {
  return (
    <section className="px-4 pt-24 pb-12 md:pt-32" id="hero">
      {/* Container */}
      <div className="container mx-auto space-y-16 lg:max-w-6xl">
        {/* Grid container */}
        <div className="grid lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-[27px] uppercase font-bold leading-7 mb-2 md:text-[64px] md:leading-none">
              Bespoke Software Development Company
            </h1>
            <p className="text-[#5e5f64] mb-4 md:text-[34px]">
              Software development that is Good to the Core!{" "}
            </p>
          </div>

          {/* Video */}
          <div className="max-w-xl mx-auto bg-[#175387] z-40 rounded-[3rem] md:ml-0">
            <Image src={HeroImg} alt="Hero preview" />

            <p className="text-white text-sm text-center font-semibold py-6 md:text-[20px]">
              Hear what our clients have to say!
            </p>
          </div>
        </div>

        {/* Grid container */}
        <div className="grid max-w-lg gap-10 mx-auto md:max-w-full md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="flex gap-6 text-[#5e6370] items-center pb-4 border-b-2 lg:border-b-0 lg:border-r-2 ">
            <Image src={YearsOfExp} alt="Years of experience" />
            <div>
              <h3 className="text-3xl font-bold">17+</h3>
              <p className="text-sm lg:text-base lg:leading-4">
                Years of Industry Experience
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-6 text-[#5e6370] items-center pb-4 border-b-2 lg:border-b-0 lg:border-r-2 ">
            <Image src={Projects} alt="Successful software projects" />
            <div>
              <h3 className="text-3xl font-bold">110+</h3>
              <p className="text-sm lg:text-base lg:leading-4">
                Successful Software Projects
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-6 text-[#5e6370] items-center pb-4 border-b-2 lg:border-b-0 lg:border-r-2 ">
            <Image className="lg:w-12" src={Location} alt="Location based" />
            <div>
              <p className="text-sm lg:text-base lg:leading-4">
                UK-based with Offshore Development Centres
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="inline-flex items-center pb-4 border-b-2 lg:border-b-0">
            <Link href={""}>
              <Image src={Clutch} alt="Location based" />
            </Link>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
