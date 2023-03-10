const Display = ({ onDoubleClick }: { onDoubleClick?: () => void }) => {
  return (
    <div
      onDoubleClick={onDoubleClick}
      className="w-full bg-gray-bg rounded-md py-1 px-2
                font-extrabold text-display text-4xl text-right"
    >
      0
    </div>
  );
};

export default Display;
