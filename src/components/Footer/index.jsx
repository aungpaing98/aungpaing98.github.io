import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 60px;
  width: 100vw;
  background-color: ${props=>props.dark ? props.theme.bgDark : props.theme.bgLight};
  color: ${props=>props.dark ? props.theme.bgLight : props.theme.bgDark};

  font-size : 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      This is Design by Aung Paing and created with React.
    </StyledFooter>
  );
}
