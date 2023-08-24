import React, { FC, ReactNode } from "react";

const ClientLayout: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark md:p-16 lg:p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default ClientLayout;
