import React from "react";
import CardPhoto from "../../Assets/Img/cover.png";
import Time from "../../../Img/Time.png";
import { Img, Content, Datail } from "./Style";
import Buttons from "./Buttons/Buttons";
import Star from "./Star";

function Card() {
  return (
    <Content>
      <Img src={CardPhoto} alt="Card" />
      <div style={{ width: 722, paddingLeft: 50 }}>
        <p style={{ fontSize: 20 }}>
          Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
          retoma seu papel como o Deus do Mal em uma nova série que ocorre após
          os eventos de “Vingadores: Endgame”
        </p>
        <Datail>
          <img src={Time} width={30} height={30} alt="Time" />
          <p style={{ paddingLeft: 15 }}>51min </p>
          <div style={{ paddingLeft: 150 }}></div>
          <Star />
          <p style={{ paddingLeft: 100 }}>2021</p>
        </Datail>
        <Buttons />
      </div>
    </Content>
  );
}
export default Card;
