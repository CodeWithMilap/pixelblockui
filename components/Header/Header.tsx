"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BlocksIcon } from "../Icons";
import Container from "../Container";
import DarkLightModeSwitch from "../DarkLightModeSwitch";
import { StoryblokComponent } from "@storyblok/react";

const Navbar = ({ blok }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="border-b-1 sticky top-0 z-50 w-full shadow-sm border-b border-zinc-900/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200">
        <Container>
          <div className="relative items-center  justify-center md:flex md:h-20 md:justify-between">
            {/* Your logo */}
            <div className="flex h-16  justify-between">
              <Link
                className="flex items-center gap-2  text-black dark:text-zinc-200"
                href="/"
              >
                <BlocksIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">PixelBlockUI</span>
              </Link>
              <div className="flex items-center gap-4 md:hidden">
                <DarkLightModeSwitch />
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
                >
                  {!isMobileMenuOpen ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="curre"
                    >
                      <rect
                        x="4"
                        y="11"
                        width="16"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H5ZM13 17C12.4477 17 12 17.4477 12 18C12 18.5523 12.4477 19 13 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H13Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.6129 6.2097C7.22061 5.90468 6.65338 5.93241 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L10.5858 12L6.29289 16.2929L6.2097 16.3871C5.90468 16.7794 5.93241 17.3466 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L12 13.4142L16.2929 17.7071L16.3871 17.7903C16.7794 18.0953 17.3466 18.0676 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.4142 12L17.7071 7.70711L17.7903 7.6129C18.0953 7.22061 18.0676 6.65338 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L12 10.5858L7.70711 6.29289L7.6129 6.2097Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`${isMobileMenuOpen ? "block" : "hidden "}  border-t md:flex md:border-t-0`}
            >
              <div className="flex flex-col gap-4 py-5 md:flex-row">
                {/* Your menu items */}
                {blok?.header_menu?.map((nestedBlok: any) => (
                  <StoryblokComponent
                    className=""
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                  />
                ))}
                <div className="hidden md:flex">
                <DarkLightModeSwitch />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
