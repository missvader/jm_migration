"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import AnimatedText from "../../components/AnimatedText";
import ClientLayout from "../../components/ClientLayout";
import TransitionEffect from "../../components/TransitionEffect";
import { introHeaderVariants } from "../../components/FramerMotion";
import Video from "../../components/Video";
import Image from "next/image";
import CasaDelLibro from "../../../../public/casadellibro.svg";
import Amazon from "../../../../public/amazon.svg";
const Muertealregueton: FC = () => {
  const defaultVideoId = "LaT-2ummL84";
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center flex-col justify-center w-full ">
        <ClientLayout className="pt-16 lg:pt-8 ">
          <AnimatedText
            text={"Estás a punto de conocer a Braulio..."}
            className="!text-4xl md:!text-5xl lg:!text-5xl my-4"
          />
          <div className="flex flex-col lg:flex-row">
            <div className="flex justify-center  ">
              <Video videoId={defaultVideoId} />
            </div>
            <div className="flex flex-col cols-6 lg:grid">
              <motion.div
                initial="hide"
                whileInView={"show"}
                exit={"hide"}
                variants={introHeaderVariants}
                className="cols-3 dark:text-light/75 m-10 mt-12  text-justify"
              >
                <p className="font-medium my-10 lg:my-0 mb-10">
                  A Braulio no hay cosa que le guste más que matar. La lista de
                  candidatos a probar su hacha es muy larga, se rige por unos
                  ideales y gustos musicales, desde violadores, maltratadores,
                  toreros, portadores de sotana, de coronas, fascistas y
                  homófobos. No penséis que me olvido de los reguetoneros ellos
                  son los afortunados de ocupar el primer puesto en la lista. En
                  su 30 cumpleaños decide salir a celebrar que por fin ha
                  llegado el día para el que tanto tiempo se ha estado
                  preparando, lo que Braulio no sabe es que está a punto de
                  cruzarse con dos personajes muy peculiares, con los que
                  forjará una extraña relación a la que se podría llamar
                  amistad. La conversación que mantienen y la camiseta de uno de
                  ellos son la causa de que se decida a dirigirse a Julián y
                  Ramón. Se deja llevar por los locales de Mollet que
                  frecuentan. El nivel de alcohol que alcanza al llegar la noche
                  le hace desistir de matar a nadie, aunque al despertar no
                  estará tan seguro de ello ya que no recuerda nada y parece
                  haber alguien muy quieto junto a él. Mientras Braulio imparte
                  su justicia y acumula cuerpos desmembrados Julián y Ramón
                  siguen con su día a día ajenos a lo que se les viene encima.
                  Tras aquel encuentro casual ya nada volverá a ser lo mismo
                  para nuestros tres protagonistas.
                </p>
                <div className="grid place-content-center mt-10 ">
                  <div className=" flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8">
                    <Link
                      href="https://amzn.eu/d/cQOEG72"
                      className="flex items-center bg-amber-400 text-dark  px-6 rounded-lg text-lg font-mono   border-2 border-solid border-transparent hover:border-dark
                hover:dark:border-light hover:scale-125 transform transition duration-500 h-10
                "
                      target={"_blank"}
                    >
                      <FaShoppingCart className="mr-2" size={20} />
                      <Image
                        alt="Amazon"
                        src={Amazon}
                        height={10}
                        width={100}
                        className=" mx-auto"
                      />
                    </Link>
                    <Link
                      href="https://www.casadellibro.com/libro-muerte-al-regueton/9788411554008/13313822"
                      className="flex items-center bg-amber-400 text-dark p-2.5 px-6 rounded-lg  font-mono   border-2 border-solid border-transparent hover:border-dark
                hover:dark:border-light hover:scale-125 transform transition duration-500
                "
                      target={"_blank"}
                    >
                      <FaShoppingCart className="mr-2" size={20} />
                      <Image
                        alt="Casa del libro"
                        src={CasaDelLibro}
                        className="ml-2"
                        width={100}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
};

export default Muertealregueton;
