"use client";

import React, { FC } from "react";
import ClientLayout from "../components/ClientLayout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import book1 from "../../public/images/books/book1.jpg";
import book2 from "../../public/images/books/book2.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

type BookCardProps = {
  title: string;
  img: string;
  link: string;
  width: number;
  height: number;
};
const BookCard: FC<BookCardProps> = ({ title, img, width, height, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.7rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          width={width}
          height={height}
          alt={title}
          className="w-full h-auto "
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          priority
          sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};
const Libros: FC = () => {
  const book1Src = book1.src;
  const book2Src = book2.src;
  return (
    <>
      <TransitionEffect />
      <main className="w-full  flex flex-col items-center justify-center">
        <ClientLayout className="pt-16 pb-16">
          <AnimatedText
            text={"Pasen, lean y disfruten..."}
            className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl text-primary mb-16 "
          />
          <div className="flex flex-col  lg:grid  lg:grid-cols-12 gap-24 flex justify-between">
            <div className="xl:col-start-3 col-span-4">
              <BookCard
                title={"Muerte al reguetón "}
                img={book1Src}
                link={"/muertealregueton"}
                width={0}
                height={0}
              />
            </div>
            <div className=" col-span-4">
              <BookCard
                title={"Muerte al reguetón 2"}
                img={book2Src}
                link={"/muertealregueton2"}
                width={0}
                height={0}
              />
            </div>
          </div>
          <AnimatedText
            text={"Próximamente..."}
            className="!text-4xl text-primary mt-16"
          />
        </ClientLayout>
      </main>
    </>
  );
};

export default Libros;
