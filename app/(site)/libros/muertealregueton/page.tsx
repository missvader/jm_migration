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
                <p className="font-medium my-10 lg:my-10 mb-10">
                  Cuando la sociedad está enferma, cuando no hay valores que
                  defender y cuando hasta la música ha dejado de acompañarnos en
                  este duro viaje que es la vida, encontramos personajes que
                  intentan restablecer el equilibrio a su manera. Quizás no sea
                  la mejor, pero Braulio, nuestro protagonista, imparte
                  justicia. En su camino le acompañarán algunos amigos
                  peculiares, muy conocidos por el autor de esta novela. Si
                  odias el reguetón y aún te emocionas con algunas canciones que
                  marcaron nuestra historia, este relato te divertirá,
                  emocionará y horrorizará a partes iguales, pero seguro que no
                  te dejará indiferente.
                </p>
                <div className="grid place-content-center mt-10 ">
                  <div className="flex  space-x-8">
                    <Link
                      href="https://amzn.eu/d/cQOEG72"
                      className="flex items-center bg-amber-400 text-dark  px-6 rounded-lg text-lg font-mono   border-2 border-solid border-transparent hover:border-dark
                hover:dark:border-light hover:scale-125 transform transition duration-500
                "
                      target={"_blank"}
                    >
                      <FaShoppingCart className="mr-2" />
                      <Image alt="Amazon" src={Amazon} width={80} height={10} />
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
