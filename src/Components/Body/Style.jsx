import styled from "styled-components";
import image from "../../Img/background.jpg";

export const Background = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${image});
  background-position: center top;
  background-size: 100% 100%;
`;
