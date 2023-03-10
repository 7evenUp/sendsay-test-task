import Button from "./Button";

const Operators = ({ onDoubleClick }: { onDoubleClick?: () => void }) => {
  return (
    <div onDoubleClick={onDoubleClick} className="flex gap-2">
      <Button>/</Button>
      <Button>х</Button>
      <Button>-</Button>
      <Button>+</Button>
    </div>
  );
};

export default Operators;
