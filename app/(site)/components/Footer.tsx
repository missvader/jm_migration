import Link from "next/link";
import React from "react";
import ClientLayout from "./ClientLayout";

const Footer = () => {
  return (
    <footer
      className=" border-t-2 border-solid border-dark w-full text-sm sm:text-base font-medium md:text-lg 
    dark:text-light dark:border-light h-16 "
    >
      <ClientLayout className="py-4  flex flex-col items-center md:pt-4 px-4 lg:p-8">
        <span className="pb-4">
          {new Date().getFullYear()} &copy; All Rights Reserved by&nbsp;
          <Link href="/admin">Julián Moya</Link>
        </span>
        <span>
          Build with ❤️ by&nbsp;
          <Link
            href="https://github.com/missvader"
            target="_blank"
            className="text-dark hover:text-secondary underline underline-offset-2
            dark:text-light dark:hover:text-secondary "
          >
            missvader
          </Link>
        </span>
      </ClientLayout>
    </footer>
  );
};

export default Footer;
