import styled from "styled-components";
import Card from "../Card";

const StyledCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 60ch) and (any-hover: none) and (any-pointer: coarse) {
    grid-auto-flow: column;
    grid-template-columns: unset;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1.25rem;

    div {
      scroll-snap-align: center;
      scroll-snap-stop: always;
    }
  }
`;

export default function Cards(props) {
  const { projects } = props;
  return (
    <StyledCards>
      {projects.map((p) => (
        <Card key={p.id} src={p.img}>
          <p>{`${p.description}`}</p>
        </Card>
      ))}
    </StyledCards>
  );
}
