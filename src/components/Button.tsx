import React from "react";

const Button = ({
  children,
  isEqualsButton,
  onClick
}: {
  children: React.ReactNode;
  isEqualsButton?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center py-4 w-full
                  rounded-md border border-outline active:border-iris
                  text-black text-sm font-medium leading-[15px]
                  ${isEqualsButton ? "py-6 bg-iris text-white" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
