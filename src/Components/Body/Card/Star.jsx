import React, { useState } from "react";
import starfill from "../../../Img/star.png";
import starOut from "../../Assets/Img/starout.png";
import { StarFill } from "./Style";

const Starfill = [1, 2, 3, 4, 5];

function Star() {
  const [avaliar, setAvaliar] = useState(0);

  function handlerSwapStar(num) {
    setAvaliar(num);
  }
  return (
    <>
      {Starfill.map((item) => (
        <StarFill
          src={item <= avaliar ? starfill : starOut}
          alt="Star"
          onClick={() => handlerSwapStar(item)}
        />
      ))}
    </>
  );
}
export default Star;
