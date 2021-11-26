import { useState } from "react";

import { motion } from "framer-motion";
import containerAnimation from "../../animation/containerAnimation";
import styled from "styled-components";

import SkillSets from "./SkillSets";
import SkillBtns from "./SkillBtns";

const StyledSkill = styled(motion.section)`
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
  others: [
    "Blender",
    "Git & GitHub",
    "English",
    "Chinese",
    "Burmese",
    "Basketball",
    "Jogging",
  ],
};

export default function Skills() {
  const [skill, setSkill] = useState("web");
  return (
    <StyledSkill
      key="skills"
      initial="hidden"
      animate="animate"
      transition="transition"
      exit="exit"
      variants={containerAnimation}
    >
      <SkillSets skills={skills[skill]} />
      <SkillBtns setSkill={setSkill} />
    </StyledSkill>
  );
}
