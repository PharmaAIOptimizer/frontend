"use client"

import React, { useState } from 'react';
import { NextPage } from "next";
import Header from '@/components/Header';
import SideBarNav from '@/components/SideBarNav';
import SideBar2, { SidebarItem } from '@/components/SideBar2';
import LoginLink from '@/components/LoginLink';
import { LayoutDashboard } from 'lucide-react';


const Page: NextPage = () => {
  return (
    <div>
      <Header />
      <div className = "pt-16">
        {/* <SideBarNav /> */}
        <SideBar2>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
        </SideBar2>
      </div>
      <div className='lg:ml-[17rem] h-screen'>
        <LoginLink />
      </div>
    </div>
  );
};

export default Page;