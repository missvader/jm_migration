import React, { FC } from "react";
import TransitionEffect from "../components/TransitionEffect";
import ClientLayout from "../components/ClientLayout";

const Braulivers: FC = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-auto dark:text-light ">
        <ClientLayout className="  p-0 w-full flex flex-col justify-center items-center ">
          <div>BRAULIVERS</div>
        </ClientLayout>
      </main>
    </>
  );
};

export default Braulivers;
