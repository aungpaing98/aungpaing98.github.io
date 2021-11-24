import styled from "styled-components";

const StyledSkillBtns = styled.div`
  height: 148px;
  width: 84px;

  div:not(:first-child) {
    margin-top: 17px;
  }

  button {
    height: 38px;
    width: 84px;
    background-color: ${(props) => props.theme.neon};
    border-radius: 6px;
    border: 0;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    
    color:${props=>props.theme.bgDark};
  }
`;

export default function SkillBtns() {
  return (
    <StyledSkillBtns>
      <div>
        <button>Web Dev</button>
      </div>
      <div>
        <button>ML And DL</button>
      </div>
      <div>
        <button>Others</button>
      </div>
    </StyledSkillBtns>
  );
}
