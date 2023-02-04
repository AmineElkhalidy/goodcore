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
              <svg
                className="fill-[#1a64a3] duration-500 group-hover:fill-white group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="64.31"
                height="54.59"
                viewBox="0 0 64.31 54.59"
              >
                <path d="M61.295,46.491 L38.467,46.491 L39.974,52.557 L43.209,52.557 C43.764,52.557 44.214,53.010 44.214,53.567 C44.214,54.127 43.764,54.579 43.209,54.579 L21.104,54.579 C20.549,54.579 20.099,54.127 20.099,53.567 C20.099,53.010 20.549,52.557 21.104,52.557 L24.338,52.557 L25.846,46.491 L3.018,46.491 C1.356,46.491 0.004,45.132 0.004,43.460 L0.004,3.026 C0.004,1.353 1.356,-0.007 3.018,-0.007 L61.295,-0.007 C62.957,-0.007 64.309,1.353 64.309,3.026 L64.309,43.460 C64.309,45.132 62.957,46.491 61.295,46.491 ZM37.903,52.557 L36.396,46.491 L27.917,46.491 L26.410,52.557 L37.903,52.557 ZM62.299,3.026 C62.299,2.468 61.849,2.016 61.295,2.016 L3.018,2.016 C2.464,2.016 2.013,2.468 2.013,3.026 L2.013,36.383 L62.299,36.383 L62.299,3.026 ZM62.299,38.406 L2.013,38.406 L2.013,43.460 C2.013,44.017 2.464,44.471 3.018,44.471 L61.295,44.471 C61.849,44.471 62.299,44.017 62.299,43.460 L62.299,38.406 ZM33.161,42.449 L31.152,42.449 C30.597,42.449 30.147,41.997 30.147,41.438 C30.147,40.880 30.597,40.427 31.152,40.427 L33.161,40.427 C33.716,40.427 34.166,40.880 34.166,41.438 C34.166,41.997 33.716,42.449 33.161,42.449 ZM7.037,6.059 L57.276,6.059 C57.830,6.059 58.280,6.420 58.280,6.868 C58.280,7.314 57.830,7.677 57.276,7.677 L7.037,7.677 C6.482,7.677 6.032,7.314 6.032,6.868 C6.032,6.420 6.482,6.059 7.037,6.059 ZM7.037,11.113 L37.180,11.113 C37.735,11.113 38.185,11.474 38.185,11.922 C38.185,12.369 37.735,12.730 37.180,12.730 L7.037,12.730 C6.482,12.730 6.032,12.369 6.032,11.922 C6.032,11.474 6.482,11.113 7.037,11.113 ZM6.836,24.254 C7.280,24.254 7.640,24.706 7.640,25.265 L7.640,31.330 C7.640,31.889 7.280,32.341 6.836,32.341 C6.392,32.341 6.032,31.889 6.032,31.330 L6.032,25.265 C6.032,24.706 6.392,24.254 6.836,24.254 ZM11.860,22.233 C12.304,22.233 12.664,22.684 12.664,23.243 L12.664,31.330 C12.664,31.889 12.304,32.341 11.860,32.341 C11.416,32.341 11.056,31.889 11.056,31.330 L11.056,23.243 C11.056,22.684 11.416,22.233 11.860,22.233 ZM16.884,20.210 C17.328,20.210 17.688,20.662 17.688,21.222 L17.688,31.330 C17.688,31.889 17.328,32.341 16.884,32.341 C16.440,32.341 16.080,31.889 16.080,31.330 L16.080,21.222 C16.080,20.662 16.440,20.210 16.884,20.210 ZM21.908,18.189 C22.352,18.189 22.712,18.641 22.712,19.199 L22.712,31.330 C22.712,31.889 22.352,32.341 21.908,32.341 C21.464,32.341 21.104,31.889 21.104,31.330 L21.104,19.199 C21.104,18.641 21.464,18.189 21.908,18.189 ZM40.486,12.841 C40.305,12.649 40.195,12.385 40.195,12.125 C40.195,11.850 40.305,11.598 40.486,11.407 C40.857,11.032 41.541,11.032 41.913,11.407 C42.093,11.598 42.204,11.850 42.204,12.125 C42.204,12.396 42.093,12.649 41.913,12.841 C41.722,13.023 41.460,13.134 41.199,13.134 C40.938,13.134 40.677,13.023 40.486,12.841 ZM44.505,12.841 C44.324,12.649 44.214,12.396 44.214,12.125 C44.214,11.850 44.324,11.598 44.505,11.407 C44.876,11.032 45.560,11.032 45.932,11.407 C46.112,11.598 46.223,11.850 46.223,12.125 C46.223,12.385 46.112,12.649 45.932,12.841 C45.741,13.023 45.490,13.134 45.218,13.134 C44.957,13.134 44.696,13.023 44.505,12.841 ZM48.524,12.841 C48.343,12.649 48.233,12.385 48.233,12.125 C48.233,11.861 48.343,11.598 48.524,11.407 C48.906,11.032 49.579,11.032 49.951,11.407 C50.131,11.598 50.242,11.850 50.242,12.125 C50.242,12.396 50.131,12.649 49.951,12.841 C49.760,13.023 49.498,13.134 49.237,13.134 C48.976,13.134 48.715,13.023 48.524,12.841 ZM52.543,12.841 C52.362,12.649 52.252,12.396 52.252,12.125 C52.252,11.850 52.362,11.598 52.543,11.407 C52.915,11.042 53.588,11.032 53.970,11.407 C54.150,11.598 54.261,11.861 54.261,12.125 C54.261,12.385 54.150,12.649 53.970,12.841 C53.779,13.023 53.518,13.134 53.257,13.134 C52.995,13.134 52.734,13.023 52.543,12.841 ZM57.276,13.134 C57.014,13.134 56.753,13.023 56.562,12.841 C56.381,12.649 56.271,12.385 56.271,12.125 C56.271,11.861 56.381,11.598 56.562,11.407 C56.934,11.032 57.617,11.032 57.989,11.407 C58.170,11.598 58.280,11.861 58.280,12.125 C58.280,12.385 58.170,12.649 57.989,12.841 C57.798,13.023 57.537,13.134 57.276,13.134 ZM35.171,20.210 L57.276,20.210 C57.830,20.210 58.280,20.572 58.280,21.019 C58.280,21.465 57.830,21.827 57.276,21.827 L35.171,21.827 C34.616,21.827 34.166,21.465 34.166,21.019 C34.166,20.572 34.616,20.210 35.171,20.210 ZM35.171,25.265 L57.276,25.265 C57.830,25.265 58.280,25.626 58.280,26.073 C58.280,26.521 57.830,26.882 57.276,26.882 L35.171,26.882 C34.616,26.882 34.166,26.521 34.166,26.073 C34.166,25.626 34.616,25.265 35.171,25.265 ZM35.171,30.319 L45.218,30.319 C45.773,30.319 46.223,30.680 46.223,31.127 C46.223,31.574 45.773,31.935 45.218,31.935 L35.171,31.935 C34.616,31.935 34.166,31.574 34.166,31.127 C34.166,30.680 34.616,30.319 35.171,30.319 ZM49.951,30.612 C50.131,30.803 50.242,31.067 50.242,31.330 C50.242,31.592 50.131,31.855 49.951,32.047 C49.760,32.229 49.498,32.341 49.237,32.341 C48.976,32.341 48.715,32.229 48.524,32.047 C48.343,31.855 48.233,31.601 48.233,31.330 C48.233,31.056 48.343,30.803 48.524,30.612 C48.896,30.238 49.569,30.238 49.951,30.612 ZM53.970,30.612 C54.150,30.803 54.261,31.067 54.261,31.330 C54.261,31.592 54.150,31.855 53.970,32.047 C53.779,32.229 53.518,32.341 53.257,32.341 C52.995,32.341 52.734,32.229 52.543,32.047 C52.362,31.855 52.252,31.592 52.252,31.330 C52.252,31.067 52.362,30.803 52.543,30.612 C52.925,30.238 53.588,30.238 53.970,30.612 ZM57.989,30.612 C58.170,30.803 58.280,31.067 58.280,31.330 C58.280,31.592 58.170,31.855 57.989,32.047 C57.798,32.229 57.537,32.341 57.276,32.341 C57.014,32.341 56.753,32.229 56.562,32.047 C56.381,31.855 56.271,31.592 56.271,31.330 C56.271,31.067 56.381,30.803 56.562,30.612 C56.944,30.238 57.617,30.238 57.989,30.612 Z"></path>
              </svg>
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
              <svg
                className="fill-[#1a64a3] duration-500 group-hover:fill-white group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                width="31.5"
                height="56"
                viewBox="0 0 31.5 56"
              >
                <svg
                  className="fill-[#1a64a3] duration-500 group-hover:fill-white group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                  width="64.31"
                  height="54.59"
                  viewBox="0 0 64.31 54.59"
                >
                  <path d="M27.125,56.000 L4.375,56.000 C1.963,56.000 -0.000,54.038 -0.000,51.625 L-0.000,4.375 C-0.000,1.963 1.963,-0.001 4.375,-0.001 L27.125,-0.001 C29.537,-0.001 31.500,1.963 31.500,4.375 L31.500,51.625 C31.500,54.038 29.537,56.000 27.125,56.000 ZM29.750,4.375 C29.750,2.927 28.572,1.750 27.125,1.750 L4.375,1.750 C2.927,1.750 1.750,2.927 1.750,4.375 L1.750,51.625 C1.750,53.073 2.927,54.250 4.375,54.250 L27.125,54.250 C28.572,54.250 29.750,53.073 29.750,51.625 L29.750,4.375 ZM27.125,47.250 L4.375,47.250 C3.892,47.250 3.500,46.858 3.500,46.374 L3.500,7.874 C3.500,7.391 3.892,6.999 4.375,6.999 L27.125,6.999 C27.608,6.999 28.000,7.391 28.000,7.874 L28.000,46.374 C28.000,46.858 27.608,47.250 27.125,47.250 ZM26.250,8.750 L5.250,8.750 L5.250,45.500 L26.250,45.500 L26.250,8.750 ZM7.255,25.633 L14.240,18.618 C14.581,18.274 15.135,18.274 15.478,18.615 C15.820,18.956 15.821,19.510 15.480,19.853 L8.495,26.867 C8.324,27.039 8.100,27.125 7.875,27.125 C7.652,27.125 7.429,27.040 7.258,26.870 C6.915,26.529 6.914,25.974 7.255,25.633 ZM15.496,14.621 C15.330,14.779 15.102,14.874 14.875,14.874 C14.647,14.874 14.420,14.779 14.254,14.621 C14.096,14.455 14.000,14.236 14.000,13.999 C14.000,13.772 14.096,13.545 14.254,13.379 C14.577,13.055 15.172,13.055 15.496,13.379 C15.653,13.545 15.750,13.772 15.750,13.999 C15.750,14.236 15.653,14.455 15.496,14.621 ZM16.879,10.754 C17.211,10.429 17.797,10.429 18.121,10.754 C18.278,10.919 18.375,11.147 18.375,11.375 C18.375,11.602 18.278,11.830 18.121,11.996 C17.955,12.154 17.727,12.250 17.500,12.250 C17.272,12.250 17.045,12.154 16.879,11.996 C16.721,11.830 16.625,11.602 16.625,11.375 C16.625,11.147 16.721,10.919 16.879,10.754 ZM16.879,16.004 C17.211,15.680 17.797,15.680 18.121,16.004 C18.278,16.170 18.375,16.397 18.375,16.625 C18.375,16.853 18.278,17.080 18.121,17.245 C17.955,17.403 17.727,17.499 17.500,17.499 C17.272,17.499 17.045,17.403 16.879,17.245 C16.721,17.080 16.625,16.853 16.625,16.625 C16.625,16.397 16.721,16.170 16.879,16.004 ZM19.504,13.379 C19.827,13.055 20.422,13.055 20.746,13.387 C20.903,13.545 21.000,13.772 21.000,13.999 C21.000,14.227 20.903,14.455 20.746,14.621 C20.580,14.779 20.352,14.874 20.125,14.874 C19.897,14.874 19.670,14.779 19.504,14.621 C19.346,14.455 19.250,14.227 19.250,13.999 C19.250,13.772 19.346,13.545 19.504,13.379 ZM22.129,10.754 C22.452,10.429 23.047,10.429 23.371,10.754 C23.528,10.919 23.625,11.147 23.625,11.375 C23.625,11.602 23.528,11.830 23.371,11.996 C23.205,12.154 22.977,12.250 22.750,12.250 C22.522,12.250 22.295,12.154 22.129,11.996 C21.971,11.830 21.875,11.602 21.875,11.375 C21.875,11.147 21.971,10.919 22.129,10.754 ZM12.871,11.996 C12.705,12.154 12.477,12.250 12.250,12.250 C12.022,12.250 11.795,12.154 11.629,11.996 C11.471,11.830 11.375,11.602 11.375,11.375 C11.375,11.138 11.471,10.919 11.629,10.754 C11.952,10.429 12.538,10.429 12.871,10.754 C13.028,10.919 13.125,11.147 13.125,11.375 C13.125,11.602 13.028,11.830 12.871,11.996 ZM7.256,20.382 L11.631,16.007 C11.973,15.664 12.527,15.664 12.869,16.007 C13.210,16.348 13.210,16.902 12.869,17.244 L8.494,21.618 C8.323,21.789 8.099,21.875 7.875,21.875 C7.651,21.875 7.427,21.789 7.256,21.618 C6.914,21.276 6.914,20.722 7.256,20.382 ZM10.244,14.618 L8.494,16.369 C8.323,16.539 8.099,16.625 7.875,16.625 C7.651,16.625 7.427,16.539 7.256,16.369 C6.914,16.027 6.914,15.473 7.256,15.131 L9.006,13.382 C9.348,13.040 9.902,13.040 10.244,13.382 C10.585,13.722 10.585,14.276 10.244,14.618 ZM19.250,5.250 L15.750,5.250 C15.267,5.250 14.875,4.858 14.875,4.375 C14.875,3.892 15.267,3.499 15.750,3.499 L19.250,3.499 C19.733,3.499 20.125,3.892 20.125,4.375 C20.125,4.858 19.733,5.250 19.250,5.250 ZM12.871,4.996 C12.705,5.153 12.477,5.250 12.250,5.250 C12.022,5.250 11.795,5.153 11.629,4.996 C11.471,4.830 11.375,4.602 11.375,4.375 C11.375,4.138 11.471,3.919 11.629,3.754 C11.952,3.429 12.538,3.429 12.871,3.754 C13.028,3.919 13.125,4.147 13.125,4.375 C13.125,4.602 13.028,4.830 12.871,4.996 ZM15.750,48.124 C17.198,48.124 18.375,49.302 18.375,50.749 C18.375,52.197 17.198,53.374 15.750,53.374 C14.302,53.374 13.125,52.197 13.125,50.749 C13.125,49.302 14.302,48.124 15.750,48.124 ZM15.750,51.625 C16.232,51.625 16.625,51.232 16.625,50.749 C16.625,50.267 16.232,49.875 15.750,49.875 C15.268,49.875 14.875,50.267 14.875,50.749 C14.875,51.232 15.268,51.625 15.750,51.625 Z"></path>
                </svg>
              </svg>
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
              <svg
                className="fill-[#1a64a3] duration-500 group-hover:fill-white group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="60px"
                x="0px"
                y="0px"
                viewBox="0 0 505.4 505.4"
                space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7
			c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6
			c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2
			c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7
			c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8
			c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6
			C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7
			c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35
			c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0
			C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7
			c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3
			c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95
			c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1
			s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7
			c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z"
                    ></path>
                  </g>
                </g>
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g>
              </svg>
            </div>

            <div className="text-center text-[#303234] group-hover:text-white">
              <h3 className="my-[9px] font-semibold">
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
