"use client"

import React, { useState } from 'react';
import { NextPage } from "next";
import ViewWrapper from "@/components/ViewWrapper";
import LoginLink from "@/components/LoginLink";


const Page: NextPage = () => {
  // const authLink = `relative flex items-center justify-center rounded-md text-center h-12 text-base bg-[#ffffff] text-black hover:bg-[#bbbbbb] disabled:bg-zinc-50 font-medium`;

  // Conditionally render views based on showLogin state
  return (
    <ViewWrapper>
        <LoginLink />
    </ViewWrapper>
  );
};

export default Page;