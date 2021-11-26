import styled from "styled-components";
import { motion } from "framer-motion";
import containerAnimation from "../animation/containerAnimation";

const PlainStyledSection = styled(motion.section)`
  width: max(84%, 350px);
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0;
  margin-top: 0.8rem;
`;

export default function StyledSection(props) {
  return (
    <PlainStyledSection
      layout
      variants={containerAnimation}
      initial="hidden"
      animate="animate"
      transition="transition"
      exit="exit"
    >
      {props.children}
    </PlainStyledSection>
  );
}
