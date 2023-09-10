"use client";
import TransitionEffect from "./components/TransitionEffect";
import ClientLayout from "./components/ClientLayout";
import Image from "next/image";
import maquina from "../../public/images/home/maquinaescribir.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { introHeaderVariants } from "./components/FramerMotion";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-auto dark:text-light ">
        <ClientLayout className="  p-0 lg:pt-0 w-full flex flex-col justify-center items-center ">
          <div className="w-80 sm:w-96  md:w-screen flex flex-col    lg:flex-row  ">
            <motion.div
              initial="hide"
              whileInView={"show"}
              exit={"hide"}
              variants={introHeaderVariants}
              className=" dark:text-light/75  mt-12 w-full  "
            >
              <Image
                src={maquina}
                alt="typewritter"
                className="xl:w-2/3 lg:w-3/5 lg:pl-20 lg:ml-20 "
                priority
              />
            </motion.div>

            <div className="   flex flex-col items-center  self-center  w-full h-[400px] lg:h-auto justify-center mt-0 mb-6 md:mb-6">
              <AnimatedText
                text={"Julián Moya"}
                className="!text-5xl my-4
             md:!text-6xl 
            "
              />
              <p className="text-xl  ">Creador de historias.</p>
              <p className="text-xl text-center xl:p-6">
                De izquierdas, politicamente incorrecto y devorador de libros
              </p>
              <div className="grid place-content-center mt-10 ">
                <Link
                  href="/libros"
                  className="flex items-center  bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light 
                "
                >
                  Descúbre mis libros
                </Link>
              </div>
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
}
