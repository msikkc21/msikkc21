import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState("light");

  React.useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <div className="font-poppins w-full p-4 container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between">
        <img src="assets/LogoMSI.png" alt="Logo" className="w-14" />
        <div className="hidden lg:flex justify-between w-2/3">
          <ul className="flex justify-center gap-16 w-1/3">
            <li className="font-semibold text-lg my-auto relative">
              <a href="#about" className="navbar-item dark:after:bg-[#57A8FF]">
                About
              </a>
            </li>
            <li className="font-semibold text-lg my-auto relative">
              <a
                href="#portfolio"
                className="navbar-item dark:after:bg-[#57A8FF]"
              >
                Portofolio
              </a>
            </li>
            <li className="font-semibold text-lg my-auto relative">
              <a href="#skills" className="navbar-item dark:after:bg-[#57A8FF]">
                Skills
              </a>
            </li>
          </ul>
          <div className="flex gap-3 w-1/3">
            <div className="items-center gap-3 hidden lg:flex">
              <span className="text-sm font-medium text-slate-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9.199H18.02C17.467 9.199 17.02 9.558 17.02 10C17.02 10.441 17.467 10.799 18.02 10.799H19C19.552 10.799 20 10.442 20 10C20 9.559 19.551 9.199 19 9.199ZM10 4.5C9.2771 4.49776 8.56089 4.63848 7.89259 4.91409C7.22428 5.1897 6.61708 5.59474 6.10591 6.10591C5.59474 6.61708 5.1897 7.22428 4.91409 7.89259C4.63848 8.56089 4.49776 9.2771 4.5 10C4.5 13.051 6.949 15.5 10 15.5C13.05 15.5 15.5 13.051 15.5 10C15.5 6.949 13.049 4.5 10 4.5ZM10 14C7.789 14 6 12.209 6 10C6 7.789 7.789 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14ZM3 10C3 9.559 2.551 9.199 2 9.199H1C0.447 9.199 0 9.558 0 10C0 10.441 0.447 10.799 1 10.799H2C2.551 10.799 3 10.441 3 10ZM10 3C10.441 3 10.799 2.553 10.799 2V1C10.799 0.447 10.441 0 10 0C9.559 0 9.199 0.447 9.199 1V2C9.199 2.553 9.558 3 10 3ZM10 17C9.558 17 9.199 17.447 9.199 18V19C9.199 19.553 9.558 20 10 20C10.441 20 10.799 19.553 10.799 19V18C10.799 17.447 10.441 17 10 17ZM17.365 3.766C17.756 3.375 17.819 2.805 17.507 2.493C17.195 2.181 16.624 2.245 16.235 2.636L15.535 3.335C15.144 3.726 15.081 4.296 15.393 4.608C15.705 4.92 16.276 4.856 16.666 4.465L17.365 3.766ZM3.334 15.533L2.634 16.234C2.243 16.625 2.18 17.193 2.492 17.505C2.804 17.817 3.375 17.755 3.764 17.364L4.464 16.665C4.855 16.274 4.918 15.704 4.606 15.391C4.294 15.078 3.723 15.144 3.334 15.533ZM3.765 2.635C3.375 2.244 2.804 2.18 2.492 2.492C2.18 2.804 2.244 3.375 2.633 3.766L3.333 4.465C3.724 4.856 4.293 4.92 4.605 4.608C4.917 4.296 4.854 3.725 4.464 3.335L3.765 2.635ZM15.534 16.666L16.234 17.365C16.625 17.756 17.194 17.818 17.506 17.508C17.818 17.196 17.755 16.625 17.364 16.235L16.665 15.536C16.274 15.145 15.704 15.081 15.391 15.393C15.078 15.705 15.143 16.275 15.534 16.666Z"
                    fill={darkMode === "dark" ? "white" : "black"}
                  />
                </svg>
              </span>
              <input
                type="checkbox"
                id="switch"
                className="hidden"
                onClick={toggleDarkMode}
              />
              <label for="switch">
                <div className="w-10 h-6 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer">
                  <div className="circle-toggle w-4 h-4 bg-white rounded-full shadow-md  transition-all duration-300 ease-in-out"></div>
                </div>
              </label>
              <span className="text-sm font-medium text-slate-500">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.60148 19C9.20188 18.9986 8.80273 18.973 8.40625 18.9234C6.2952 18.649 4.33432 17.6856 2.82899 16.1831C1.32365 14.6807 0.35837 12.7236 0.0834744 10.6166C-0.234006 8.23525 0.361093 5.82205 1.74972 3.8598C3.13834 1.89756 5.21808 0.530962 7.57287 0.033419C7.83103 -0.0250902 8.10074 -0.0064773 8.34838 0.0869378C8.59601 0.180353 8.81063 0.344439 8.96548 0.558748C9.12416 0.780633 9.21396 1.04419 9.22371 1.31662C9.23346 1.58906 9.16272 1.85834 9.02031 2.09096C8.35109 3.23702 8.09566 4.5774 8.29659 5.88865C8.48277 7.09341 9.04874 8.20762 9.91237 9.0696C10.776 9.93157 11.8924 10.4965 13.0995 10.6823C14.4147 10.8887 15.7608 10.6293 16.9045 9.949C17.1396 9.81 17.4106 9.74314 17.6836 9.75677C17.9566 9.77039 18.2195 9.86389 18.4396 10.0256C18.6545 10.1774 18.8193 10.3896 18.9131 10.6352C19.0068 10.8807 19.0252 11.1486 18.966 11.4046C18.5212 13.5538 17.3461 15.4837 15.6397 16.8677C13.9333 18.2518 11.8003 19.005 9.60148 19ZM7.3097 1.86113C5.98634 2.24928 4.78694 2.97439 3.82935 3.96523C2.87176 4.95606 2.18893 6.1785 1.84797 7.51244C1.50701 8.84638 1.51964 10.2459 1.88463 11.5735C2.24962 12.9011 2.95441 14.1111 3.92973 15.0845C4.90505 16.058 6.11735 16.7614 7.4475 17.1257C8.77765 17.49 10.1799 17.5026 11.5164 17.1623C12.8529 16.822 14.0777 16.1404 15.0704 15.1847C16.0632 14.2289 16.7897 13.0319 17.1786 11.711C16.1405 12.2162 14.9981 12.4715 13.8433 12.4564C12.6884 12.4414 11.5532 12.1564 10.5286 11.6243C9.50403 11.0923 8.61865 10.328 7.94349 9.39271C7.26832 8.45746 6.82217 7.3773 6.64081 6.23886C6.41001 4.74568 6.64346 3.21777 7.3097 1.86113Z"
                    fill={darkMode === "dark" ? "white" : "black"}
                  />
                </svg>
              </span>
            </div>
            <a
              href="https://wa.me/+6289509558484"
              className="my-auto font-bold text-md text-white bg-green-600 hover:bg-green-500 transition-all duration-200 ease-in-out rounded-full py-2 px-5"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex lg:hidden gap-5 my-auto w-1/3 justify-end">
          <button onClick={toggleDarkMode} type="button" className={`transform transition-transform ${
              darkMode === "dark" ? "rotate-180" : "rotate-0"
            }`}
            style={{ transition: "transform 0.5s ease, rotate 0.5s ease" }}>
            {darkMode === "dark" ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9.199H18.02C17.467 9.199 17.02 9.558 17.02 10C17.02 10.441 17.467 10.799 18.02 10.799H19C19.552 10.799 20 10.442 20 10C20 9.559 19.551 9.199 19 9.199ZM10 4.5C9.2771 4.49776 8.56089 4.63848 7.89259 4.91409C7.22428 5.1897 6.61708 5.59474 6.10591 6.10591C5.59474 6.61708 5.1897 7.22428 4.91409 7.89259C4.63848 8.56089 4.49776 9.2771 4.5 10C4.5 13.051 6.949 15.5 10 15.5C13.05 15.5 15.5 13.051 15.5 10C15.5 6.949 13.049 4.5 10 4.5ZM10 14C7.789 14 6 12.209 6 10C6 7.789 7.789 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14ZM3 10C3 9.559 2.551 9.199 2 9.199H1C0.447 9.199 0 9.558 0 10C0 10.441 0.447 10.799 1 10.799H2C2.551 10.799 3 10.441 3 10ZM10 3C10.441 3 10.799 2.553 10.799 2V1C10.799 0.447 10.441 0 10 0C9.559 0 9.199 0.447 9.199 1V2C9.199 2.553 9.558 3 10 3ZM10 17C9.558 17 9.199 17.447 9.199 18V19C9.199 19.553 9.558 20 10 20C10.441 20 10.799 19.553 10.799 19V18C10.799 17.447 10.441 17 10 17ZM17.365 3.766C17.756 3.375 17.819 2.805 17.507 2.493C17.195 2.181 16.624 2.245 16.235 2.636L15.535 3.335C15.144 3.726 15.081 4.296 15.393 4.608C15.705 4.92 16.276 4.856 16.666 4.465L17.365 3.766ZM3.334 15.533L2.634 16.234C2.243 16.625 2.18 17.193 2.492 17.505C2.804 17.817 3.375 17.755 3.764 17.364L4.464 16.665C4.855 16.274 4.918 15.704 4.606 15.391C4.294 15.078 3.723 15.144 3.334 15.533ZM3.765 2.635C3.375 2.244 2.804 2.18 2.492 2.492C2.18 2.804 2.244 3.375 2.633 3.766L3.333 4.465C3.724 4.856 4.293 4.92 4.605 4.608C4.917 4.296 4.854 3.725 4.464 3.335L3.765 2.635ZM15.534 16.666L16.234 17.365C16.625 17.756 17.194 17.818 17.506 17.508C17.818 17.196 17.755 16.625 17.364 16.235L16.665 15.536C16.274 15.145 15.704 15.081 15.391 15.393C15.078 15.705 15.143 16.275 15.534 16.666Z"
                  fill={darkMode === "dark" ? "white" : "black"}
                />
              </svg>
            ) : (
              <svg
                width="27"
                height="27"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.60148 19C9.20188 18.9986 8.80273 18.973 8.40625 18.9234C6.2952 18.649 4.33432 17.6856 2.82899 16.1831C1.32365 14.6807 0.35837 12.7236 0.0834744 10.6166C-0.234006 8.23525 0.361093 5.82205 1.74972 3.8598C3.13834 1.89756 5.21808 0.530962 7.57287 0.033419C7.83103 -0.0250902 8.10074 -0.0064773 8.34838 0.0869378C8.59601 0.180353 8.81063 0.344439 8.96548 0.558748C9.12416 0.780633 9.21396 1.04419 9.22371 1.31662C9.23346 1.58906 9.16272 1.85834 9.02031 2.09096C8.35109 3.23702 8.09566 4.5774 8.29659 5.88865C8.48277 7.09341 9.04874 8.20762 9.91237 9.0696C10.776 9.93157 11.8924 10.4965 13.0995 10.6823C14.4147 10.8887 15.7608 10.6293 16.9045 9.949C17.1396 9.81 17.4106 9.74314 17.6836 9.75677C17.9566 9.77039 18.2195 9.86389 18.4396 10.0256C18.6545 10.1774 18.8193 10.3896 18.9131 10.6352C19.0068 10.8807 19.0252 11.1486 18.966 11.4046C18.5212 13.5538 17.3461 15.4837 15.6397 16.8677C13.9333 18.2518 11.8003 19.005 9.60148 19ZM7.3097 1.86113C5.98634 2.24928 4.78694 2.97439 3.82935 3.96523C2.87176 4.95606 2.18893 6.1785 1.84797 7.51244C1.50701 8.84638 1.51964 10.2459 1.88463 11.5735C2.24962 12.9011 2.95441 14.1111 3.92973 15.0845C4.90505 16.058 6.11735 16.7614 7.4475 17.1257C8.77765 17.49 10.1799 17.5026 11.5164 17.1623C12.8529 16.822 14.0777 16.1404 15.0704 15.1847C16.0632 14.2289 16.7897 13.0319 17.1786 11.711C16.1405 12.2162 14.9981 12.4715 13.8433 12.4564C12.6884 12.4414 11.5532 12.1564 10.5286 11.6243C9.50403 11.0923 8.61865 10.328 7.94349 9.39271C7.26832 8.45746 6.82217 7.3773 6.64081 6.23886C6.41001 4.74568 6.64346 3.21777 7.3097 1.86113Z"
                  fill={darkMode === "dark" ? "white" : "black"}
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            className={`transform transition-transform ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
            style={{ transition: "transform 0.5s ease, rotate 0.5s ease" }}
          >
            {isOpen ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6743 15L5.89871 7.22624C5.81155 7.13908 5.74241 7.0356 5.69523 6.92171C5.64806 6.80783 5.62378 6.68576 5.62378 6.56249C5.62378 6.43922 5.64806 6.31716 5.69523 6.20328C5.74241 6.08939 5.81155 5.98591 5.89871 5.89874C5.98588 5.81158 6.08936 5.74244 6.20324 5.69526C6.31713 5.64809 6.43919 5.62381 6.56246 5.62381C6.68573 5.62381 6.8078 5.64809 6.92168 5.69526C7.03557 5.74244 7.13905 5.81158 7.22621 5.89874L15 13.6744L22.7737 5.89874C22.9498 5.72271 23.1885 5.62381 23.4375 5.62381C23.6864 5.62381 23.9252 5.72271 24.1012 5.89874C24.2773 6.07478 24.3761 6.31354 24.3761 6.56249C24.3761 6.81145 24.2773 7.05021 24.1012 7.22624L16.3256 15L24.1012 22.7737C24.2773 22.9498 24.3761 23.1885 24.3761 23.4375C24.3761 23.6864 24.2773 23.9252 24.1012 24.1012C23.9252 24.2773 23.6864 24.3762 23.4375 24.3762C23.1885 24.3762 22.9498 24.2773 22.7737 24.1012L15 16.3256L7.22621 24.1012C7.05018 24.2773 6.81142 24.3762 6.56246 24.3762C6.31351 24.3762 6.07475 24.2773 5.89871 24.1012C5.72268 23.9252 5.62378 23.6864 5.62378 23.4375C5.62378 23.1885 5.72268 22.9498 5.89871 22.7737L13.6743 15Z"
                  fill={darkMode === "dark" ? "white" : "black"}
                />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H10M20 5H4M20 19H4"
                  stroke={darkMode === "dark" ? "white" : "black"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`absolute dark:bg-[#030E3B] py-2 left-0 bg-white w-full lg:hidden transform transition-transform ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.6s ease" }}
      >
        <ul className="py-4">
          <li>
            <a href="#about" className="block w-full font-semibold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">About</a>
          </li>
          <li>
            <a href="#portfolio" className="block w-full font-semibold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">Portofolio</a>
          </li>
          <li>
            <a href="#skills" className="block w-full font-semibold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">Skills</a>
          </li>
        </ul>
        <a
          href="http://wa.me/+6289509558484"
          className="my-auto font-bold text-md text-white bg-green-600 hover:bg-green-500 transition-all duration-200 ease-in-out rounded-full py-2 w-[95%] flex justify-center mx-auto"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
