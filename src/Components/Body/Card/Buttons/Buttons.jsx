import React from "react";
import { ButtonBlack, Content } from "./Style";
import { ButtonBlue } from "./Style";

function Buttons() {
  return (
    <Content>
      <ButtonBlue type="button" value="ASSISTIR AGORA" />
      <ButtonBlack type="button" value="TRAILER" />
    </Content>
  );
}
export default Buttons;
