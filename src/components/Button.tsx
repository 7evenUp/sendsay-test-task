import React from "react";

const Button = ({
  children,
  isEqualsButton,
}: {
  children: React.ReactNode;
  isEqualsButton?: boolean;
}) => {
  return (
    <button
      className={`flex items-center justify-center py-4 w-full
                  rounded-md border border-outline
                  text-black text-sm font-medium leading-[15px]
                  ${isEqualsButton ? "py-6 bg-iris text-white" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
