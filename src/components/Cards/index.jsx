import styled from "styled-components";
import Card from "../Card";

const StyledCards = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  gap: 8px;
`

export default function Cards(props) {
  const { projects } = props;
  return (
    <StyledCards>
      {projects.map((p) => (
        <Card key={p.id}>
            <img src={`/embeds/${p.img}`} alt="Project Screenshot" />
            <p>{`${p.description}`}</p>
        </Card>
      ))}
    </StyledCards>
  );
}
