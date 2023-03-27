import React from "react";
import { Bd, Content, Header, H1 } from "./Style";
import Card from "./Card/Card";

function Body() {
  return (
    <>
      <Bd>
        <Content>
          <Header>ESTÁ DISPONÍVEL AGORA!</Header>
          <H1>LOKI</H1>
          <Card />
        </Content>
      </Bd>
    </>
  );
}

export default Body;
