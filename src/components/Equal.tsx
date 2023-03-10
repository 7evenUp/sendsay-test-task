import Button from "./Button";

const Equal = ({ onDoubleClick }: { onDoubleClick?: () => void }) => {
  return (
    <div onDoubleClick={onDoubleClick}>
      <Button isEqualsButton={true}>=</Button>
    </div>
  );
};

export default Equal;
