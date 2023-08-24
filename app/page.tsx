import type { Metadata } from "next";
import TransitionEffect from "./components/TransitionEffect";
import ClientLayout from "./components/ClientLayout";
import Image from "next/image";
import home from "../public/images/home/typewritter-PhotoRoom.png-PhotoRoom.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Julian Moya",
  description: "Julian Moya website HomePage",
};
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-auto dark:text-light ">
        <ClientLayout className="  p-0 w-full flex flex-col justify-center items-center ">
          <div className="w-80 sm:w-96  md:w-screen flex flex-col  lg:justify-between   lg:flex-row lg:items-center ">
            <div className=" w-full lg:w-1/2 lg:self-center items-center  justify-center  relative lg:h-[500px] h-[400px]">
              <Image
                src={home}
                alt="typewritter"
                className=" top-0 left-0 w-full h-full object-cover animate-pulse-animation transition-all ease-in-out delay-150  "
                priority
              />
            </div>
            <div className="lg:w-1/2  flex flex-col items-center self-center pl-6 w-full h-[400px] lg:h-auto justify-center mt-0 mb-6 md:mb-6">
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
              <div className="flex items-center self-center mt-10 ">
                <Link
                  href="/books"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                "
                >
                  Descúbre sus libros
                </Link>
              </div>
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
}
