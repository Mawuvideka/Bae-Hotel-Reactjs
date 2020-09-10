import styled from "styled-components";
import defaultImg from "../images/ext3.png";

const StyledHero = styled.header`
  min-height: calc(60vh);
  background: url(${(props) => (props.img ? props.img : defaultImg)}) center/
    cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
