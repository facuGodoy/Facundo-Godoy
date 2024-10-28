import Image from "next/image";
import Layout from "./components/Layout";
import profilePic from "../../public/image/developer-pic-1.webp";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icon";
import HireMe from "./components/HireMe";
import lightBulb from "../../public/image/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <section className="w-5/12 md:w-full">
              <Image
                src={profilePic}
                alt="Facundo Godoy"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </section>
            <section className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="!text-left !text-6xl xl:!text-5xl lg:!text=6xl md:!text-5xl sm:!text-3xl"
                text="“Convertir la visión en realidad con código y diseño.”"
              />
              <div className="my-4 text-base font-medium md:text-sm sm:text-xs">
                <p className="text-xl text-bold pb-1">
                  Mi nombre es Facundo N. Godoy
                </p>
                Como{" "}
                <span className="text-bold text-pink-500/75">
                  Desarrollador Front-end
                </span>
                , me gustaría dedicarme a convertir ideas innovadoras en
                aplicaciones web . Explora mis últimos proyectos, en los cuales
                muestro mi experiencia en React.js y desarrollo web. 😊
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://i.postimg.cc/YS3wFrn6/GODOY-FACUNDO.png"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light/90 hover:dark:text-light/90 text-lg font-semibold p-3 px-4 rounded-xl hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Curriculum
                  <LinkArrow className={"w-6 ml-1 mt-1"} />
                </Link>
                {/* //? link de boton de contacto se saco para dejar solo el del
                HireMe 
                <Link
                  href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=22&ct=1711162650&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d10cf8271-85be-fecf-fa6e-48d2aa08a088&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
                >
                  Contacto
                </Link> */}
              </div>
            </section>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="facundo" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
