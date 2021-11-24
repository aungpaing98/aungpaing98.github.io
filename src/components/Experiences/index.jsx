import styled from "styled-components";

import StyledSection from "../../styled/StyledSection";
import ExCards from "../ExCards";

const StyledExperience = styled.div`
  width: 325px;
  margin: 0 auto;
  padding-top: 22px;
  background-color: ${(props) => props.theme.lightBlue};
  border-radius: 10px;
  box-shadow: 5px 4px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Experiences(props) {
  const { experiences } = props;
  return (
    <StyledSection>
      <h1>Experiences</h1>
      <StyledExperience>
        <ExCards experiences={experiences} />
      </StyledExperience>
    </StyledSection>
  );
}
