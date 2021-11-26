import { useState } from "react";
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

const skills = {
  web: [
    "HTML",
    "CSS",
    "React",
    "Bootstrap",
    "JavaScript",
    "Redux",
    "Framer-Motion",
  ],
  ml: [
    "Python",
    "Numpy",
    "Pandas",
    "Scikit-Learn",
    "Keras",
    "Tensorflow",
    "Pytorch",
  ],
  others: ["Blender", "English", "Chinese", "Burmese", "Basketball", "Jogging"],
};

export default function Skills() {
  const [skill, setSkill] = useState('web')
  return (
    <StyledSkill>
      <SkillSets skills={skills[skill]}/>
      <SkillBtns setSkill={setSkill} />
    </StyledSkill>
  );
}
