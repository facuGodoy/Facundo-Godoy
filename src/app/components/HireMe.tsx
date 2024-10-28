import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=22&ct=1711162650&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d10cf8271-85be-fecf-fa6e-48d2aa08a088&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 md:w-12 md:h-12 md:text-[10px] rounded-full font-semibold hover:bg-violet-200 hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light/90 hover:font-bold"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
