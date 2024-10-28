"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark dark:text-dark dark:bg-light py-3 px-6 cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <section className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularDarkMd md:dark:bg-circularDarkMd sm:h-[60vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm xs:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="8.6vw" />
        <Skill name="HTML" x="-20vw" y="10vw" />
        <Skill name="JavaScript" x="-24vw" y="-6vw" />
        <Skill name="ReactJs" x="0vw" y="-12vw" />
        <Skill name="NextJs" x="-26vw" y="-15vw" />
        <Skill name="Web Design" x="30vw" y="-5vw" />
        <Skill name="FireBase" x="13vw" y="10vw" />
        <Skill name="Tailwind CSS" x="-2vw" y="18vw" />
        <Skill name="TypeScript" x="19vw" y="-14vw" />
        <Skill name="figma" x="24vw" y="12vw" />
        <Skill name="SASS" x="-1vw" y="-18vw" />
        <Skill name="GitHub" x="9vw" y="-8vw" />
        <Skill name="MUI" x="-10vw" y="0vw" />
        <Skill name="Mongo" x="10vw" y="0vw" />
        <Skill name="NodeJs" x="-12vw" y="-6vw" />
      </section>
    </>
  );
};

export default Skills;
