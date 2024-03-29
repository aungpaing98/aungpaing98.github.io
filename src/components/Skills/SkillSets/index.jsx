import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSets = styled(motion.div)`
  height: 153px;
  width: max(60%, 226px);
  margin: 0 11px 0 15px;
  background-color: ${(props) => props.theme.light};

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
`;

const StyledElement = styled.div`
  height: 30px;
  margin: 0 4px;
  padding: 0 10px;
  text-align: center;
  background-color: ${(props) => props.theme.lightBlue};
  border-radius: 4px;

  font-size: 16px;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.dark};
  font-weight: bold;
`;

export default function SkillSets(props) {
  const { skills } = props;
  return (
    <StyledSets>
      {skills.map((skill, index) => (
        <StyledElement key={index}>{skill}</StyledElement>
      ))}
    </StyledSets>
  );
}
