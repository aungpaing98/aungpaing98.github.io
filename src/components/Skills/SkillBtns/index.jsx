import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSkillBtns = styled(motion.div)`
  height: 148px;
  width: max(30%, 84px);

  div:not(:first-child) {
    margin-top: 17px;
  }

  button {
    height: 38px;
    width: max(90%, 84px);
    background-color: ${(props) => props.theme.neon};
    border-radius: 6px;
    border: 2px dashed ${(props) => props.theme.dark};
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: ${(props) => props.theme.dark};
  }
`;

export default function SkillBtns(props) {
  const { setSkill } = props;
  const handleClick = (skill) => {
    return () => {
      setSkill(skill);
    };
  };
  return (
    <StyledSkillBtns>
      <div>
        <button onClick={handleClick("web")}>Web Dev</button>
      </div>
      <div>
        <button onClick={handleClick("ml")}>ML And DL</button>
      </div>
      <div>
        <button onClick={handleClick("others")}>Others</button>
      </div>
    </StyledSkillBtns>
  );
}
