"use client";
import React, { useState, FC, useRef } from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MoonIcon, SunIcon } from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};
type CustomMobileLinkProps = {
  href: string;
  title: string;
  className?: string;
  onClick: () => void; // Agrega la prop onClick de tipo función sin argumentos
  isOpen: boolean; // Agrega la prop isOpen de tipo boolean
};
const CustomLink: FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`} scroll={false}>
      {title}
      <span
        className={`h-[1px] inline-block dark:bg-light bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full duration-300 transition-[width] ease
      ${href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink: FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = "",
  onClick,
  isOpen,
}) => {
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      scroll={false}
      onClick={onClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block dark:bg-dark bg-light absolute left-0 -bottom-0.5
      group-hover:w-full duration-300 transition-[width] ease
      ${href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar: FC = () => {
  const navbarRef = useRef(null);
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={navbarRef}
      className="w-full p-10  2xl:px-48 pfont-medium flex items-center justify-between
    dark:text-light relative "
    >
      <button
        className=" flex flex-col justify-center items-center  lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transform transition-all ease-in-out duration-300 
      ${isOpen ? "rotate-45 translate-y-1.5" : "rotate-0 "}
      `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-1 transform transition-all ease-in-out duration-300  
        ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transform transition-all ease-in-out duration-300
      ${isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0 "}
      `}
        ></span>
      </button>
      <div className=" hidden lg:w-full lg:flex lg:justify-between lg:items-center ">
        <nav>
          <CustomLink href="/" title="Inicio" className="mr-4" />
          <CustomLink href="/libros " title="Libros" className="mx-4" />
          <CustomLink href="/about" title="Sobre mi" className="mx-4" />
          <CustomLink href="/braulivers" title="Braulivers" className="mx-4" />
          <CustomLink href="/blog" title="Blog" className="mx-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.facebook.com/julian.moya.58958343"
            target={"_blank"}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-9 mr-3 h-9 text-dark/90 dark:text-light/90"
          >
            <FacebookIcon className={undefined} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/brauliver?igshid=MzRIODBiNWFIZA"
            target={"_blank"}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-9 ml-6 mr-6 h-9 text-dark/90 dark:text-light/90"
          >
            <InstagramIcon className={undefined} />
          </motion.a>
          <motion.button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </motion.button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-16  "
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/"
              title="Inicio"
              className=""
              onClick={handleClick}
              isOpen={isOpen}
            />
            <CustomMobileLink
              href="/libros "
              title="Libros"
              className=""
              onClick={handleClick}
              isOpen={isOpen}
            />
            <CustomMobileLink
              href="/about"
              title="Sobre mi"
              className=""
              onClick={handleClick}
              isOpen={isOpen}
            />
            <CustomMobileLink
              href="/braulivers"
              title="Braulivers"
              className=""
              onClick={handleClick}
              isOpen={isOpen}
            />
            <CustomMobileLink
              href="/blog"
              title="Blog"
              className=""
              onClick={handleClick}
              isOpen={isOpen}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap pt-10">
            <motion.a
              href="https://www.facebook.com/julian.moya.58958343"
              target={"_blank"}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="w-9 mr-3 h-9 text-light dark:text-dark"
            >
              <FacebookIcon className={undefined} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/brauliver?igshid=MzRIODBiNWFIZA"
              target={"_blank"}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="w-9 ml-6 mr-5 h-9 text-light dark:text-dark"
            >
              <InstagramIcon className={undefined} />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}
        `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
