"use client";
import Logo from "@/components/Logo";
import React, { useState } from "react";
import MenuLink from "../MenuLink";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <nav
                    className="mx-auto flex md:flex-row flex-col max-w-screen-xl gap-x-12 md:items-center justify-between lg:p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1 justify-between px-6 py-4 lg:p-0">
                        <Logo />

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    className="h-6 w-6 stroke-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`w-full lg:flex lg:w-auto lg:items-center px-6 lg:px-0 lg:bg-transparent bg-primary-500 ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="lg:flex  lg:flex-row lg:gap-x-12 items-start lg:items-center">
                            <MenuLink label="Home" href="#" />
                            <MenuLink label="Solutions" href="#" />
                            <MenuLink
                                label="Product"
                                href="/product"
                                menuItems={[
                                    { label: "Analytics", href: "/analytics" },
                                    { label: "Engagement", href: "/engagement" },
                                    { label: "Security", href: "/security" },
                                    // Add more menu items as needed
                                ]}
                            />
                            <MenuLink label="Blog" href="#" />
                            <MenuLink label="Contacts" href="#" />
                        </div>
                    </div>
                </nav>
            </header>
            <div className="min-h-40"></div>
        </>
    );
};

export default Header;
