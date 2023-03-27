import styled from "styled-components";
import image from "../../Img/background.jpg";

export const Bd = styled.body`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: 100% 100%;
`;
export const Content = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.header`
  font-size: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 70px;
`;
export const H1 = styled.h1`
  font-size: 96px;
`;
