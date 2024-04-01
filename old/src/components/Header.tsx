import React from 'react';
import { NextPage } from "next";
import LogoNav from '@/components/LogoNav';
import logo from "../../public/logo.svg";

const Header: NextPage = () => {
    return (
        <section className="fixed top-0 left-0 right-0 z-10 bg-primaryGray">
            <div className="flex-1 flex-col justify-center px-5 pt-8 md:flex md:px-6 md:py-[22px] lg:px-8">
                <LogoNav logo={logo} />
            </div>
        </section>
    );
};

export default Header;
