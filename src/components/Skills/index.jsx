import styled from "styled-components";

import SkillSets from "./SkillSets";
import SkillBtns from "./SkillBtns";

const StyledSkill = styled.section`
  height: 190px;
  display: flex;

  align-items: center;
`;

export default function Skills() {
  return (
    <StyledSkill>
      <SkillSets />
      <SkillBtns />
    </StyledSkill>
  );
}
