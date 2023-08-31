import Link from "next/link";
import React from "react";
import ClientLayout from "./ClientLayout";

const Footer = () => {
  return (
    <footer
      className=" border-t-2 border-solid border-dark w-full font-medium text-lg
    dark:text-light dark:border-light"
    >
      <ClientLayout className="py-8 flex flex-col items-center  px-0 lg:p-8">
        <span className="pb-4">
          {new Date().getFullYear()} &copy; All Rights Reserved by Julián Moya
        </span>
        <span>
          Build with ❤️ by&nbsp;
          <Link
            href="https://github.com/missvader"
            target="_blank"
            className="text-dark hover:text-secondary underline underline-offset-2
            dark:text-light dark:hover:text-secondary"
          >
            missvader
          </Link>
        </span>
      </ClientLayout>
    </footer>
  );
};

export default Footer;
