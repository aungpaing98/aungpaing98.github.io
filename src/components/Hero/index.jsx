import styled from "styled-components";

const StyledHero = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:max(84%, 350px);

  img {
    height: 100px;
    width: 100px;
    border: 3px solid black;
    border-radius: 100px;
    /* margin: 0 19px 0 15px; */
  }

  h1 {
    font-size: ${(props) => props.theme.xl};
    color : ${props=>props.theme.dark}
  }
  h2 {
    font-size: ${(props) => props.theme.lg};
    color: hsla(26, 29%, 30%, 1);
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <img src="/embeds/profile.jpeg" alt="Aung Paing's Portrait" />
      </div>
      <div>
        <h1>Aung Paing</h1>
        <h2>Software Developer</h2>
      </div>
    </StyledHero>
  );
}
