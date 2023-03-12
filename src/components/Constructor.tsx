import React from "react";
import { useAppSelector } from "../redux/hooks";
import { selectIsModeConstructor } from "../redux/mode/selectors";
import { calcNames } from "../types";
import Container from "./Container";
import { Display, Equal, Operators, Numpad } from "./Calculator";

const uiData: Array<{
  id: number;      // for drag and drop
  name: calcNames; // for drag and drop
  component: React.ReactNode;
}> = [
  {
    id: 1,
    name: "display",
    component: <Display />,
  },
  {
    id: 2,
    name: "operators",
    component: <Operators />,
  },
  {
    id: 3,
    name: "numpad",
    component: <Numpad />,
  },
  {
    id: 4,
    name: "equal",
    component: <Equal />,
  },
];

const Constructor = () => {
  const isConstructorMode = useAppSelector(selectIsModeConstructor);
  return (
    <div
      className={`${
        isConstructorMode ? "flex" : "hidden"
      } flex-col gap-3 w-[240px]`}
    >
      {uiData.map(({ id, name, component }) => (
        <Container key={id} id={id} name={name} children={component} />
      ))}
    </div>
  );
};

export default Constructor;
