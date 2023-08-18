import React from "react";
import About from "@components/components/about";
import Contact from "./contact";
import Leaders from "./leaders";
import Faq from "./faq";

const menus = [
  { title: "About Us", link: "#about" },
  { title: "Contact Us", link: "#contact" },
  { title: "Leaders", link: "#leaders" },
  { title: "FAQ", link: "#faq" },
];
const Home = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="  grid grid-cols-2 gap-4">
            <div className="p-4">
              <a href="/" className="text-white ">
                  <svg className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="22"
                    viewBox="0 0 34 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.0792 3.09301C13.2036 1.59953 11.0147 1.59953 10.1391 3.09302L2.30816 16.4504C1.43258 17.9439 2.52706 19.8107 4.27821 19.8107H14.0599H19.9401H29.7218C31.4729 19.8107 32.5674 17.9439 31.6918 16.4504L23.8609 3.09301C22.9853 1.59953 20.7964 1.59953 19.9208 3.09302L17 8.07509L14.0792 3.09301Z"
                      stroke="url(#paint0_linear_8_243)"
                      strokeWidth="3"
                    />
                    <path
                      d="M17.3378 13.5779C17.3378 13.959 17.2075 14.2328 17.0885 14.3752C17.0505 14.4205 17.0206 14.4466 16.9999 14.4611C16.9793 14.4466 16.9494 14.4205 16.9114 14.3752C16.7924 14.2328 16.6621 13.959 16.6621 13.5779C16.6621 13.5944 16.6624 13.5931 16.6671 13.5726C16.6801 13.5157 16.7268 13.3109 16.8945 12.9291C16.9274 12.8542 16.9626 12.7776 16.9999 12.6996C17.0373 12.7776 17.0725 12.8542 17.1054 12.9291C17.2731 13.3109 17.3198 13.5157 17.3328 13.5726C17.3375 13.5931 17.3378 13.5944 17.3378 13.5779ZM16.9673 14.478C16.9672 14.4775 16.9705 14.4759 16.9774 14.4747C16.9708 14.4778 16.9674 14.4784 16.9673 14.478ZM17.0225 14.4747C17.0294 14.4759 17.0327 14.4775 17.0326 14.478C17.0325 14.4784 17.0291 14.4778 17.0225 14.4747Z"
                      stroke="url(#paint1_linear_8_243)"
                      strokeWidth="5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_8_243"
                        x1="17"
                        y1="1.9729"
                        x2="17"
                        y2="19.8107"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5B3962" />
                        <stop offset="1" stopColor="#1CB174" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_8_243"
                        x1="17"
                        y1="8.5"
                        x2="16.9999"
                        y2="16.9729"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#446568" />
                        <stop offset="1" stopColor="#21A672" />
                      </linearGradient>
                    </defs>
                  </svg>
                <span className="">&nbsp;&nbsp;Home</span>
              </a>
            </div>
            <div className="lg:hidden">
              <button className="relative group dropdown  place-content-center">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-0 duration-200 shadow-md">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                    <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                  </div>
                </div>
                <ul className="dropdown-menu absolute  text-white pt-1 w-150">
                  {menus.map((link, index) => (
                    <li className="bg-gray-700">
                      <a
                        key={index}
                        className="rounded-t bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href={link.link}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div id="about"><About /></div>
        <div id="contact" ><Contact /></div>
        <div id="leaders"><Leaders /></div>
        <div id="faq"><Faq /></div>
      </div>
    </>
  );
};

export default Home;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
