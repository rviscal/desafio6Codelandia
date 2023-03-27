import React from "react";
import starfill from "../../../Img/star.png";
import starOut from "../../../Img/starout.png";
import { StarFill } from "./Style";

const Starfill = [1, 2, 3, 4];

function Star() {
  return (
    <>
      {Starfill.map((item) => (
        <StarFill src={starfill} alt="Star" />
      ))}
      <StarFill src={starOut} alt="StarOut" />
    </>
  );
}
export default Star;
