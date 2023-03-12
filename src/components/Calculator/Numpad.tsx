import React from "react";
import Button from "../Button";

const Numpad = ({
  onClick,
}: {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button onClick={onClick}>7</Button>
      <Button onClick={onClick}>8</Button>
      <Button onClick={onClick}>9</Button>
      <Button onClick={onClick}>4</Button>
      <Button onClick={onClick}>5</Button>
      <Button onClick={onClick}>6</Button>
      <Button onClick={onClick}>1</Button>
      <Button onClick={onClick}>2</Button>
      <Button onClick={onClick}>3</Button>
      <div className="col-start-1 col-end-3">
        <Button onClick={onClick}>0</Button>
      </div>
      <Button onClick={onClick}>,</Button>
    </div>
  );
};

export default Numpad;
