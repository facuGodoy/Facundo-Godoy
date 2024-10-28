"use client";

import React, { ReactElement, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
  link: ReactElement;
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info, link }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
        <button className="font-mono text-sm text-primary mt-2 sm:mt-1 sm:text-xl xs:text-lg  dark:text-yellow-100 ">{link}</button>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Curso de HTML y CSS3"
            time="Abril - 2022"
            link={<a href="https://www.coderhouse.com/ar/certificados/62916ef18aab83001a521df5?lang=es" target="_blank">Certificado</a>}
            place="Curso online CODERHOUSE - Carrera Front-End"
            info="Aprendizaje de lo básico de HTML y CSS3, para poder crear páginas web dinámicas y atractivas."
          />
          <Details
            type="Curso de JavaScript"
            link={<a href="https://www.coderhouse.com/ar/certificados/62e60e84a623b60024da791f?lang=es" target="_blank">Certificado</a>}
            time="Julio - 2022"
            place="Curso online CODERHOUSE - Carrera Front-End"
            info="Aprendiendo conceptos básicos de JavaScript, para poder crear páginas web dinámicas y atractivas, usando ES6 y vanillaJs."
          />
          <Details
            type="Curso ReactJs"
            link={<a href="https://www.coderhouse.com/ar/certificados/634f54143b3c0d000f00f2a0?lang=es" target="_blank">Certificado</a>}
            time="Septiembre - 2022"
            place="Curso online CODERHOUSE - Carrera Front-End"
            info="Curso en el cual te enseñaran todo lo que necesitas saber para poder crear aplicaciones web con ReactJs y distintos Frameworks."
          />
          <Details
            type="Curso TypeScript"
            link={<a href="https://i.postimg.cc/NGxtmVRB/Certificado-Type-Script.png" target="_blank">Certificado</a>}
            time="Mayo - 2024"
            place="Curso online de Fernando Herrera - Udemy"
            info="Curso en el cual te enseñaran todo sobre el uso de typescript en el desarrollo de aplicaciones web y también aprenderás a usar el framework."
          />
          <Details
            type="Curso Software Testing"
            link={<a href="https://i.postimg.cc/pXLzfw5H/UC-6ca506a9-d0f6-40fe-b4d9-4049aaaa8f88.png" target="_blank">Certificado</a>}
            time="Agosto - 2024"
            place="Curso online de Esteban Balvin - Udemy"
            info="Curso en el cual te enseñaran aprende sobre pruebas ágiles, APIs, automatización con Selenium, Cypress, y más."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
