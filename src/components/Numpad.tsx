import React from "react";
import Button from "./Button";

const Numpad = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <div className="col-start-1 col-end-3">
        <Button>0</Button>
      </div>
      <Button>,</Button>
    </div>
  );
};

export default Numpad;
