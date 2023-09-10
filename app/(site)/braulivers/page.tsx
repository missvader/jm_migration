import React, { FC } from "react";
import TransitionEffect from "../components/TransitionEffect";
import ClientLayout from "../components/ClientLayout";
import Image from "next/image";
import UnderConstruction from "../../../public/images/svgs/under-construction.svg";
const Braulivers: FC = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-auto dark:text-light ">
        <ClientLayout className=" p-0 lg:pt-8 w-full flex flex-col justify-center items-center mb-10 ">
          <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2   ">
            <Image
              src={UnderConstruction}
              alt="Online illustrations by Storyset"
              priority
              className=""
            />
            <div className="lg:border lg:border-dashed dark:border-zinc-700 lg:border-zinc-200 rounded-md flex flex-col justify-center items-center w-full lg:w-[30%] lg:h-[30%] mx-auto text-2xl lg:text-3xl font-extrabold">
              PRÓXIMAMENTE
            </div>
          </div>
        </ClientLayout>
      </main>
    </>
  );
};

export default Braulivers;
