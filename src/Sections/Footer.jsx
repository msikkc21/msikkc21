const Footer = () => {
  return (
    <div className="bg-slate-900 text-white h-42 mx-2">
      <ul className="px-4 flex flex-col md:flex-row md:justify-center py-8 gap-4 md:gap-16">
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="#about">About</a>
        </li>
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="#portfolio">Portofolio</a>
        </li>
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="#skills">Skills</a>
        </li>
      </ul>

      <ul className="px-4 flex md:justify-center pb-8 gap-4 md:gap-16">
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="https://wa.me/+6289509558484">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.05 4.90999C18.1331 3.9841 17.0411 3.24996 15.8376 2.75036C14.634 2.25075 13.3431 1.99568 12.04 1.99999C6.58005 1.99999 2.13005 6.44999 2.13005 11.91C2.13005 13.66 2.59005 15.36 3.45005 16.86L2.05005 22L7.30005 20.62C8.75005 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.9501 17.38 21.9501 11.92C21.9501 9.26999 20.92 6.77999 19.05 4.90999ZM12.04 20.15C10.56 20.15 9.11005 19.75 7.84005 19L7.54005 18.82L4.42005 19.64L5.25005 16.6L5.05005 16.29C4.2276 14.9771 3.79097 13.4593 3.79005 11.91C3.79005 7.36999 7.49005 3.66999 12.03 3.66999C14.23 3.66999 16.3 4.52999 17.85 6.08999C18.6177 6.85386 19.226 7.76254 19.6397 8.76332C20.0534 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.14 13.55 13.67 14.11 13.53 14.27C13.39 14.44 13.24 14.46 12.99 14.33C12.74 14.21 11.94 13.94 11 13.1C10.26 12.44 9.77005 11.63 9.62005 11.38C9.48005 11.13 9.60005 11 9.73005 10.87C9.84005 10.76 9.98005 10.58 10.1 10.44C10.22 10.3 10.27 10.19 10.35 10.03C10.43 9.85999 10.39 9.71999 10.33 9.59999C10.27 9.47999 9.77005 8.25999 9.57005 7.75999C9.37005 7.27999 9.16005 7.33999 9.01005 7.32999H8.53005C8.36005 7.32999 8.10005 7.38999 7.87005 7.63999C7.65005 7.88999 7.01005 8.48999 7.01005 9.70999C7.01005 10.93 7.90005 12.11 8.02005 12.27C8.14005 12.44 9.77005 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.69 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.03 14.27C16.96 14.16 16.81 14.11 16.56 13.99Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="https://www.instagram.com/m.s.ikkc21?igsh=OXA3NnpwbXV1aHo4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
          <a href="https://www.linkedin.com/in/m-s-izza">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>

      <p className="flex justify-center py-7 w-full border-t-2 border-white">
        © 2025 MSI. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
