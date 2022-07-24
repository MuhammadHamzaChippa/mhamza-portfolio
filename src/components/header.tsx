import React, { useState } from "react";
import { Icon } from "@iconify/react";
const Header: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between  px-2 py-3 bg-gray-900  md:fixed w-[100%] z-[999]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-[1.5rem] font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap  text-white"
                            href="#pablo"
                        >
                            m.hamza()
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <Icon icon="fa6-solid:bars" />
                        </button>
                    </div>
                    <div
                        className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
                        id="example-navbar-danger"
                    >
                        <ul
                            className={`${
                                navbarOpen ? "w-[100%] items-center	" : ""
                            }flex flex-col lg:flex-row list-none lg:ml-auto`}
                        >
                            <li className="nav-item">
                                <a
                                    className="text-[1rem] rounded-lg px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:bg-sky-500"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-[1rem] rounded-lg px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:bg-sky-500"
                                    href="/education"
                                >
                                    Education
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-[1rem] rounded-lg px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:bg-sky-500"
                                    href="/experience"
                                >
                                    Experience
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-[1rem] rounded-lg px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:bg-sky-500 "
                                    href="/projects"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="text-[1rem] rounded-lg px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white bg-sky-500 md:ml-2 hover:opacity-75"
                                    href="https://drive.google.com/file/d/18w6brAacTK9bfgfFr_Ayyqg5yuoNQYK0/view"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
