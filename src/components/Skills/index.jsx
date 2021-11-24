import styled from "styled-components";

import SkillSets from "./SkillSets";
import SkillBtns from "./SkillBtns";

const StyledSkill = styled.section`
  height: 190px;
  width: max(84%, 350px);
  display: flex;

  justify-content: space-around;
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
