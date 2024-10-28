import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className: string;
}

const layout: React.FC<LayoutProps> = ({ children, className }) => {
  return <div className={`${className} w-full h-full inline-block z-0 dark:bg-dark bg-light p-32`}>{children}</div>;
};

export default layout;
