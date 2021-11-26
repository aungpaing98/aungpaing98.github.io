import styled from "styled-components";

const StyledSection = styled.section`
  width: max(84%, 350px);
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0;
  margin-top: 0.8rem;
`;

export default StyledSection;
