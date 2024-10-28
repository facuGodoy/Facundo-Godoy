import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
          <Link href="https://instagram.com/facugodoy23/" className="underline underline-offset-2" target="_blank">
            Facundo N. Godoy
          </Link>
        </div>
        <div>
          <Link href="https://instagram.com/facugodoy23/" className="underline underline-offset-2" target="_blank">
            Say Hello
          </Link>
        </div>
      </Layout>
      <p></p>
    </footer>
  );
};

export default Footer;
