import React, { useState } from "react";
import starfill from "../../../Img/star.png";
import starOut from "../../Assets/Img/starout.png";
import { StarFill } from "./Style";

const Starfill = [1, 2, 3, 4, 5];

function Star(props) {
  let stars = {
    starfill: starfill,
    starout: starOut,
  };
  const [st, setSt] = useState("starout");
  const SwapStar = () => {
    setSt((st) => (st === "starout" ? "starfill" : "starout"));
  };
  return (
    <>
      {Starfill.map((item) => (
        <StarFill src={stars[st]} alt="Star" onClick={SwapStar} />
      ))}
    </>
  );
}
export default Star;
