import Image from "next/image";
import React from "react";
import next3 from "public/images/next3.jpg";

const Leaders = () => {
  return (
    <div className="p-5">
      <div className="uppercase text-white font-bold pt-6  pb-6 text-2xl">
        Leaders
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="">
          <p className="text-white font-bold uppercase font-medium">
            Lorem ipsum dolor
          </p>
          <p className="text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 11.5L11 13.5L15.5 8.99999M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.21759C4 6.41808 4 6.01833 4.13076 5.6747C4.24627 5.37113 4.43398 5.10027 4.67766 4.88552C4.9535 4.64243 5.3278 4.50207 6.0764 4.22134L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12Z"
                stroke="#20AB76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <p className="text-white font-bold uppercase font-medium">
            dolor sit amet
          </p>
          <p className="text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 4.5H18.3C19.4201 4.5 19.9802 4.5 20.408 4.71799C20.7843 4.90973 21.0903 5.21569 21.282 5.59202C21.5 6.01984 21.5 6.57989 21.5 7.7V9C21.5 9.93188 21.5 10.3978 21.3478 10.7654C21.1448 11.2554 20.7554 11.6448 20.2654 11.8478C19.8978 12 19.4319 12 18.5 12M13 19.5H5.7C4.5799 19.5 4.01984 19.5 3.59202 19.282C3.21569 19.0903 2.90973 18.7843 2.71799 18.408C2.5 17.9802 2.5 17.4201 2.5 16.3V15C2.5 14.0681 2.5 13.6022 2.65224 13.2346C2.85523 12.7446 3.24458 12.3552 3.73463 12.1522C4.10218 12 4.56812 12 5.5 12M10.3 14.5H13.7C13.98 14.5 14.12 14.5 14.227 14.4455C14.3211 14.3976 14.3976 14.3211 14.4455 14.227C14.5 14.12 14.5 13.98 14.5 13.7V10.3C14.5 10.02 14.5 9.87996 14.4455 9.773C14.3976 9.67892 14.3211 9.60243 14.227 9.5545C14.12 9.5 13.98 9.5 13.7 9.5H10.3C10.02 9.5 9.87996 9.5 9.773 9.5545C9.67892 9.60243 9.60243 9.67892 9.5545 9.773C9.5 9.87996 9.5 10.02 9.5 10.3V13.7C9.5 13.98 9.5 14.12 9.5545 14.227C9.60243 14.3211 9.67892 14.3976 9.773 14.4455C9.87996 14.5 10.02 14.5 10.3 14.5ZM17.8 22H21.2C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V17.8C22 17.52 22 17.38 21.9455 17.273C21.8976 17.1789 21.8211 17.1024 21.727 17.0545C21.62 17 21.48 17 21.2 17H17.8C17.52 17 17.38 17 17.273 17.0545C17.1789 17.1024 17.1024 17.1789 17.0545 17.273C17 17.38 17 17.52 17 17.8V21.2C17 21.48 17 21.62 17.0545 21.727C17.1024 21.8211 17.1789 21.8976 17.273 21.9455C17.38 22 17.52 22 17.8 22ZM2.8 7H6.2C6.48003 7 6.62004 7 6.727 6.9455C6.82108 6.89757 6.89757 6.82108 6.9455 6.727C7 6.62004 7 6.48003 7 6.2V2.8C7 2.51997 7 2.37996 6.9455 2.273C6.89757 2.17892 6.82108 2.10243 6.727 2.0545C6.62004 2 6.48003 2 6.2 2H2.8C2.51997 2 2.37996 2 2.273 2.0545C2.17892 2.10243 2.10243 2.17892 2.0545 2.273C2 2.37996 2 2.51997 2 2.8V6.2C2 6.48003 2 6.62004 2.0545 6.727C2.10243 6.82108 2.17892 6.89757 2.273 6.9455C2.37996 7 2.51997 7 2.8 7Z"
                stroke="#20AB76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <div className="">
            <Image src={next3} alt="about" className="h-350 w-350" />
          </div>
        </div>
        <div className="">
          <p className="text-white font-bold uppercase font-medium">
            Lorem ipsum
          </p>
          <p className="text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 13V17M16 11V17M12 7V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#20AB76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
