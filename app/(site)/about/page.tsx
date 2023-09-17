"use client";
import React from "react";
import AnimatedText from "../components/AnimatedText";
import ClientLayout from "../components/ClientLayout";
import autor from "../../../public/images/profile/autor.jpg";
import animalets from "../../../public/images/profile/animalets.png";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { introHeaderVariants } from "../components/FramerMotion";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center flex-col justify-center w-full ">
        <ClientLayout className="pt-16 lg:pt-8 px-8 pb-8">
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
                src={autor}
                alt="Julian Moya "
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
              />
            </div>
            <div className="lg:col-span-3 lg:mt-10 xl:col-span-3 flex flex-col items-start text-justify lg:justify-start dark:text-light/75  mt-12 lg:mt-0">
              <p className="font-medium my-4">
                Nacido en 1968 en Terrassa (Barcelona). pero llevo toda mi vida
                en Mollet del Vallés . Me defino como una persona de izquierdas,
                politicamente incorrecto y devorador de libros.
              </p>
              <p className="font-medium">
                Amante de los animales, en especial de los gatetes. Es muy
                probable que si vas a la&nbsp;
                <Link
                  href="https://animaletslallagosta.org/"
                  target="_blank"
                  className="hover:underline hover:underline-offset-2"
                >
                  protectora de La LLagosta
                </Link>
                , me encuentres allí echando una mano
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
              <button className="flex items-center self-center mt-10 ">
                <Link
                  href="mailto:julianmomu68@gmail.com"
                  target={"_blank"}
                  className=" flex justify-center items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light"
                >
                  <span>CONTACTA CONMIGO</span>
                  <FaEnvelope className="self-center ml-4" />
                </Link>
              </button>
              {/*<div className="mt-10 text-xl font-bold text-secondary">
                AMIGOS:{" "}
              </div>
              <div className=" w-full border border-dashed flex items-center justify-end relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/images/profile/bg_cats.jpg")',
                    opacity: "0.3", // Establece la opacidad del fondo aquí
                  }}
                ></div>
                <div className="relative z-10 mr-10 flex flex-col items-center ">
                  <Link href="https://animaletslallagosta.org/" target="_blank">
                    <Image
                      src={animalets}
                      alt="animalets"
                      width={100}
                      height={100}
                    />
                  </Link>

                  <div className="text-2xl font-bold ">ANIMALETS</div>
                </div>
              </div>*/}
            </div>
          </div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            exit={"hide"}
            variants={introHeaderVariants}
            className="w-full lg:w-5/6 lg:mx-auto"
          >
            <div className="mt-10 text-xl font-bold text-secondary">
              AMIGOS:{" "}
            </div>
            <div className="  border  rounded-lg border-dashed flex lg:mx-auto items-center justify-end relative">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: 'url("/images/profile/bg_cats.jpg")',
                  opacity: "0.3", // Establece la opacidad del fondo aquí
                }}
              ></div>
              <div className="relative z-10 mr-10 lg:mr-40 flex flex-col items-center ">
                <Link
                  href="https://animaletslallagosta.org/"
                  target="_blank"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={animalets}
                    alt="animalets"
                    width={100}
                    height={100}
                  />
                </Link>

                <div className="text-2xl font-bold dark:text-light/75 ">
                  ANIMALETS
                </div>
              </div>
            </div>
          </motion.div>
        </ClientLayout>
      </main>
    </>
  );
};

export default About;
