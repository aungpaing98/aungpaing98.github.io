import styled from "styled-components";

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
  others: ["None"],
};

const StyledSets = styled.div`
  height: 153px;
  width: 226px;
  margin: 0 11px 0 15px;
  background-color: ${(props) => props.theme.bgLight};

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border : 1px solid black;
`;

const StyledElement = styled.div`
  margin: 0 8px;
  padding: 0 10px;
  text-align: center;
  background-color: ${(props) => props.theme.lightBlue};
  height: 30px;
  border-radius: 4px;

  font-size: 16px;
  display: flex;
  align-items: center;

  color:${props=>props.theme.bgDark};
  font-weight: bold;
`;

export default function SkillSets() {
  return (
    <StyledSets>
      {skills.web.map((skill, index) => (
        <StyledElement key={index}>{skill}</StyledElement>
      ))}
    </StyledSets>
  );
}
