import React from "react";
import AnimatedText from "../components/AnimatedText";
import ClientLayout from "../components/ClientLayout";
import perfilJulian from "../../public/images/profile/perfilJulian.jpg";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julian Moya | Sobre mi",
  description: "About page of Julian Moya website",
};
const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center flex-col justify-center w-full ">
        <ClientLayout className="pt-16  ">
          <AnimatedText
            text={"Un poco sobre mí"}
            className="!text-2xl md:!text-3xl lg:!text-4xl text-primary"
          />
          <AnimatedText
            text={"Julián Moya Muñoz"}
            className="!text-4xl md:!text-5xl lg:!text-6xl my-4"
          />
          <div className="flex flex-col  lg:grid w-full lg:grid-cols-6 lg:gap-8 xl:gap-16 ">
            <div className="lg:order-last lg:col-span-3 xl:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 mt-4 dark:bg-dark dark:border-light ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.7rem] bg-dark dark:bg-light " />
              <Image
                src={perfilJulian}
                alt="Julian Moya "
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
              />
            </div>
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start text-justify lg:justify-start dark:text-light/75  mt-12 lg:mt-0">
              <p className="font-medium my-4">
                Nacido en 1968 en Terrassa (Barcelona). pero llevo toda mi vida
                en Mollet del Vallés . Me defino como una persona de izquierdas,
                politicamente incorrecto y devorador de libros.
              </p>
              <p className="font-medium">
                Amante de los animales, en especial de los gatetes. Es muy
                probable que si vas a la protectora de La LLagosta, me
                encuentres allí echando una mano
              </p>
              <p className="font-medium my-4">
                Todas las experiencias que he vivido a lo largo de mi vida, que
                no son pocas, me han ayudado a construir mi universo literario
                personal.
              </p>
              <p className="font-medium">
                Mis libros son historias de ficción, una mezcla de novela negra
                y humor con muchas dosis de crítica social.{" "}
              </p>
              <div className="mt-12 ">
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className=" text-lg font-medium capitalize text-dark underline dark:text-light/75"
                >
                  Escríbeme
                </Link>
              </div>
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
};

export default About;
