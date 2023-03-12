import Button from "./Button";

const Operators = ({
  onClick,
}: {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <div className="flex gap-2">
      <Button onClick={onClick}>/</Button>
      <Button onClick={onClick}>x</Button>
      <Button onClick={onClick}>-</Button>
      <Button onClick={onClick}>+</Button>
    </div>
  );
};

export default Operators;
