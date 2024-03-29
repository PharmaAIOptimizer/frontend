"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from "next";
import ViewWrapper from "@/components/ViewWrapper";
import HomeView from "@/components/HomeView";
import LoginLink from "@/components/LoginLink";


const Page: NextPage = () => {
  const [showLogin, setShowLogin] = useState(false); // State to toggle views
  const handleSignInClick = () => {
    setShowLogin(true); // Show the LoginLink on click
  };

  const authLink = `relative flex items-center justify-center rounded-md text-center h-12 text-base bg-[#ffffff] text-black hover:bg-[#bbbbbb] disabled:bg-zinc-50 font-medium`;

  // Conditionally render views based on showLogin state
  return (
    <ViewWrapper>
      {showLogin ? (
        <LoginLink />
      ) : (
        <HomeView>
          <button className={authLink} onClick={() => setShowLogin(false)}>Sign Up</button>
          <button className={authLink} onClick={handleSignInClick}>Sign In</button>
        </HomeView>
      )}
    </ViewWrapper>
  );
};

export default Page;


// import { NextPage } from "next"
// import ViewWrapper from "@/components/ViewWrapper"
// import LoginLink from "@/components/LoginLink"

// const Login: NextPage = async () => {
//   return (
//     <ViewWrapper>
//       <LoginLink />
//     </ViewWrapper>
//   )
// }

// export default Login