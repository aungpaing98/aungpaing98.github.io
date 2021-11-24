import styled from "styled-components";

const StyledCard = styled.div`
  height: 156px;
  width: 156px;
  background-color: ${(props) => props.theme.lightBlue};
  border-radius: 10px;
  box-shadow: 5px 4px 0px ${props=>props.theme.shadow};
  display: flex;
  flex-direction: column;

  img {
    height: 108px;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  div {
    height: 48px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    background-color: ${(props) => props.theme.content};
    color: ${(props) => props.theme.background};
  }
`;

export default function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}
