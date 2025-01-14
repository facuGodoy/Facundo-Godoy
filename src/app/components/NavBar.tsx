"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

type LinksProps = {
  href: string;
  title: string;
  className: string;
};

const CustomLink = ({ href, title, className }: LinksProps) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={() => router.push(`${href}`)}
    >
      {title}

      <button
        className={`${
          pathName === href ? "w-full" : "w-0"
        } h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300`}
      >
        &nbsp;
      </button>
    </Link>
  );
};

type LinksMobileProps = {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
};

const CustomMobileLink = ({
  href,
  title,
  className,
  toggle,
}: LinksMobileProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
      {...toggle}
    >
      {title}

      <button
        className={`${
          pathName === href ? "w-full" : "w-0"
        } h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300`}
      >
        &nbsp;
      </button>
    </Link>
  );
};

const NavBar = () => {
  const { mode, setMode } = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <section className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <button></button>
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon className="" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="" />
          </motion.a>
          <motion.a
            href="https://dribbble.com/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon className="" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </nav>
      </section>

      {isOpen ? (
        <motion.section
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30 bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md py-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col justify-center items-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/article"
              title="Article"
              className=""
              toggle={handleClick}
            />
            <button></button>
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon className="" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className="" />
            </motion.a>
            <motion.a
              href="https://dribbble.com/"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon className="" />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.section>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
