import React from "react";
import { Link } from 'react-router-dom'

const LogoNavLight = ({ logo }) => {
  return (
    <nav className="left-0 top-8 w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8 hidden md:flex">
      <Link to={'/'}>
        <a className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px] gap-2 hover:cursor-pointer">
          <img src={logo} width={32} height={32} objectFit="cover" alt="logo" />
          <p className="text-neutral-200 font-semibold text-xl">PAPO</p>
        </a>
      </Link>
    </nav>
  );
};

export default LogoNavLight;
