import styled from "styled-components";
import image from "../Assets/Img/background.jpg";

export const Bd = styled.body`
  width: auto;
  height: auto;
  background-image: url(${image});
  background-size: 100% 100%;
`;
export const Content = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Header = styled.header`
  font-size: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 70px;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 96px;
  text-align: center;
`;
