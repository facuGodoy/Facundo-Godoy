"use client";

import React, {
  EventHandler,
  LinkHTMLAttributes,
  ReactElement,
  ReactEventHandler,
  ReactNode,
  StyleHTMLAttributes,
  useRef,
} from "react";
import Layout from "@/app/components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link, { LinkProps } from "next/link";
import article1 from "../../../public/image/articles/pagination component in reactjs.webp";
import article2 from "../../../public/image/articles/create loading screen in react js.webp";
import article3 from "../../../public/image/articles/create modal component in react using react portals.webp";
import article4 from "../../../public/image/articles/form validation in reactjs using custom react hook.webp";
import article5 from "../../../public/image/articles/smooth scrolling in reactjs.webp";
import article6 from "../../../public/image/articles/What is Redux with easy explanation.webp";
import article7 from "../../../public/image/articles/What is higher order component in React.webp";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

interface MovingImgProps {
  title: string;
  img: StaticImageData;
  link: HTMLLinkElement | string;
}

const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = React.useRef<HTMLImageElement>(null);

  function handleMouse(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  }

  function handleMouseLeave(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

interface ArticleElementProps {
  title: string;
  date: string;
  img: StaticImageData;
  link: HTMLLinkElement | string;
}

const ArticleElement: React.FC<ArticleElementProps> = ({
  title,
  date,
  img,
  link,
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:border-light dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

interface FeaturedArticleProps {
  title: string;
  time: string;
  summary: string;
  img: StaticImageData;
  link: HTMLLinkElement | string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  time,
  summary,
  img,
  link,
}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border-dark dark:bg-dark dark:border-light border border-solid rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const Article = () => {
  return (
    <>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch."
              img={article1}
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
              time="9 min read"
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch."
              img={article2}
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
              time="9 min read"
            />
          </ul>
          <h2 className="w-full font-bold text-4xl text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article3}
              link=""
            />
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article4}
              link=""
            />
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article5}
              link=""
            />
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article6}
              link=""
            />
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article7}
              link=""
            />
            <ArticleElement
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              date="March 22, 2023"
              img={article3}
              link=""
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Article;
