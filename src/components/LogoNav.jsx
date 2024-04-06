import React from "react";
import { Link } from 'react-router-dom'

const LogoNav = ({ logo }) => {
  return (
    <nav className="left-0 top-8 w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8 hidden md:flex">
      <Link to={'/'} className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px] gap-2 hover:cursor-pointer no-underline">
          <img src={logo} width={32} height={32} objectFit="cover" alt="logo" />
          <p className="text-black font-semibold text-xl">PAPO</p>
      </Link>
    </nav>
  );
};

export default LogoNav;
