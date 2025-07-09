import React from "react";
import clsx from "clsx";

export const Button = ({ className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-blue-700 text-white px-6 py-3 text-lg rounded-xl hover:bg-blue-800",
        className
      )}
      {...props}
    />
  );
};
