import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 bg-dark border border-solid border-transparent dark:border-light text-light flex items-center justify-center rounded-full text-2xl font-bold
        hover:bg-secondary
        "
      >
        JM
      </Link>
    </div>
  );
};

export default Logo;
