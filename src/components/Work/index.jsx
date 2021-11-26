import StyledSection from "../../styled/StyledSection";

import Cards from "../Cards";

export default function Work(props) {
  const { projects } = props;
  return (
    <>
      <StyledSection>
        <h1>Works</h1>
        <Cards projects={projects} />
      </StyledSection>
    </>
  );
}
