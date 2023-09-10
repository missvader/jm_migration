"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../components/AnimatedText";
import ClientLayout from "../../components/ClientLayout";
import TransitionEffect from "../../components/TransitionEffect";
import { introHeaderVariants } from "../../components/FramerMotion";
import Video from "../../components/Video";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Muertealregueton2: FC = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center flex-col justify-center w-full ">
        <ClientLayout className="pt-16 lg:pt-8 ">
          <AnimatedText
            text={"Braulio ha vuelto..."}
            className="!text-4xl md:!text-5xl lg:!text-5xl my-4"
          />
          <div className="flex flex-col lg:flex-row">
            <div className="flex justify-center  ">
              <Video videoId="Cv6MPWZvcFY" />
            </div>
            <div className="flex flex-col cols-6 lg:grid">
              <motion.div
                initial="hide"
                whileInView={"show"}
                exit={"hide"}
                variants={introHeaderVariants}
                className="cols-3 dark:text-light/75 m-10 mt-12  text-justify"
              >
                <p className="font-medium my-10 lg:my-10">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit erat eu
                  elementum hendrerit curabitur lobortis, pharetra porta turpis
                  per vehicula facilisis risus nullam suspendisse class euismod
                  neque. Rutrum eleifend himenaeos nam iaculis auctor metus
                  taciti, nunc in porta dis pellentesque risus tempus, nostra
                  bibendum morbi dui faucibus tincidunt. Congue est hac curae
                  nam nec et interdum ante auctor mus, aliquam donec at nunc
                  volutpat urna consequat hendrerit inceptos eget iaculis, lacus
                  nisl laoreet vivamus libero vel himenaeos primis id. Senectus
                  phasellus sem laoreet quisque vivamus, leo torquent praesent
                  mauris magnis vestibulum, quis rhoncus porttitor class.
                </p>
                <div className="grid place-content-center mt-10 ">
                  <Link
                    href="mailto:julianmomu68@gmail.com"
                    target={"_blank"}
                    className="flex items-center bg-amber-400 text-dark p-2.5 px-6 rounded-lg  font-mono   border-2 border-solid border-transparent hover:border-dark
                  hover:dark:border-light hover:scale-125 transform transition duration-500 text-sm font-semibold
                  "
                  >
                    LO QUIERO
                    <FaEnvelope className="self-center ml-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
};

export default Muertealregueton2;
