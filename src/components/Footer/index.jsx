import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 48px;
  width: 100vw;
  background-color: ${(props) => props.theme.content};
  color: ${(props) => props.theme.background};

  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      This is Design by Aung Paing and created with React.
    </StyledFooter>
  );
}
