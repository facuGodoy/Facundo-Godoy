"use client";

import React from "react";
import Layout from "@/app/components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "../components/Icon";
import chanchitofeliz from "../../../public/image/projects/chanchito-feliz.png";
import teslaLanding from "../../../public/image/projects/Landing Tesla.webp";
import airbnb from "../../../public/image/projects/Airbnb-clone.png";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

interface FeaturedProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject: React.FC<FeaturedProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid dark:bg-dark dark:border-light border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon className="" />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-xl dark:bg-light dark:text-dark bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface ProjectsProps {
  type: string;
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const ProjectElement: React.FC<ProjectsProps> = ({
  type,
  title,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-bold text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-semibold lg:text-xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination Trumps Knowledge!"
          />
          <section className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
              <FeaturedProject
                title="E-commerce Chanchito Feliz"
                summary="Esta es una página de un e-commerce que realicé para el proyecto final de mi curso de React.js. Se basa en una página web de una pastelería, con carrito de compra y cálculo del total gastado."
                type="Proyecto E-commerce"
                link="https://navbar-react-rust.vercel.app/"
                github="/"
                img={chanchitofeliz}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectElement
                title="Aplicación de Airbnb con todas sus funcionalidades tales como iniciar sesión para ingresar, buscar mediante filtro, reservar, ver reservas, etc."
                type="App Airbnb Clone"
                link="https://github.com/facuGodoy/Airbnb-Clone"
                github="https://github.com/facuGodoy/Airbnb-Clone"
                img={airbnb}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectElement
                title="Este proyecto se basa en la pagina de Tesla en la cual la uso como ejemplo para practicar todo los conocimientos para crear una landing funcional."
                type="Clone de la Landing de Tesla"
                link="https://github.com/facuGodoy/Landing-Tesla/tree/main"
                github="https://github.com/facuGodoy/Landing-Tesla/tree/main"
                img={teslaLanding}
              />
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
