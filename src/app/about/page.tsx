"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import profilePhoto from "../../../public/image/profile/profile_Photo.webp";
import Layout from "@/app/components/Layout";
import AnimatedText from "../components/AnimatedText";
import Skills from "../components/Skills";
import Image from "next/image";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

interface AnimatedProps {
  value: number;
}

const AnimatedNumbers: React.FC<AnimatedProps> = ({ value }) => {
  const ref = useRef<HTMLInputElement>(null);

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, { duration: 3000 });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="¡La pasión alimenta el propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <section className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biografía
              </h2>
              <p className="font-medium">
                - Hola! soy{" "}
                <span className="font-bold text-pink-800/50 dark:text-yellow-200/85">
                  Facundo N. Godoy
                </span>
                , un Desarrollador ReactJs con pasión por crear experiencias
                digitales hermosas, funcionales y centradas en el usuario. Con 4
                años de experiencia creando proyectos, sin experiencia laboral
                en el campo,{" "}
                <span className="font-bold text-pink-800/50 dark:text-yellow-200/85">
                  pero con muchas ganas y pasión por aprender cosas que me
                  ayuden a avanzar
                </span>
                . Siempre estoy buscando formas nuevas e innovadoras de crear y
                aprender realizando proyectos que me ayuden a avanzar.
              </p>
              <p className="font-medium my-4">
                - Creo que el diseño es mucho más que simplemente hacer que las
                cosas luzcan bonitas. Se trata de resolver problemas y dar vida
                a una idea o un sueño utilizando las herramientas que tenemos.
                Además,crear experiencias intuitivas y agradables para los
                usuarios.
              </p>
              <p className="font-medium">
                - Ya sea que esté trabajando en un sitio web, una aplicación
                móvil u otro producto digital, mi compromiso y dedicación están
                enfocados en lograr la excelencia en el diseño y el pensamiento
                centrado en el usuario. Espero tener la oportunidad de
                contribuir con mis habilidades y mi pasión a su próximo
                proyecto.
              </p>
            </section>
            <section className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePhoto}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Facundo Godoy"
                className="w-full h-auto rounded-2xl"
              />
            </section>
            <section className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Clientes Satisfechos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Proyectos Completados
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Años de Experiencia
                </h2>
              </div>
            </section>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
