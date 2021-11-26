import styled from "styled-components";

const StyledCard = styled.div`
  height: 156px;
  min-width: 156px;
  border-radius: 10px;
  box-shadow: 5px 4px 0px ${(props) => props.theme.shadow};
  background-image: url("embeds/project1.jpg");
  background-size: cover;

  p {
    color: black;
  }

  :nth-child(1) {
    grid-column: span 2;
  }
  :nth-child(4) {
    grid-column: span 2;
  }
`;

export default function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}
