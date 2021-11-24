import styled from "styled-components";

const StyledExCard = styled.div`
  width: 88%;
  background-color: ${(props) => props.theme.neon};
  margin-bottom: 22px;
  border-radius: 10px;

  p {
    font-size: 16px;
  }

  h3 {
    margin-bottom: 0.8rem;
  }

  .jobHead {
    background-color: ${(props) => props.theme.dark};
    display: flex;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    * {
      color: ${(props) => props.theme.light};
    }

    > div {
      min-width: 78px;
    }
  }

  .jobBody {
    padding: 22px 22px 22px 26px;

    li {
      margin-bottom: 0.3rem;
      color: ${(props) => props.theme.dark};
    }
  }
`;

export default function ExCard(props) {
  const { exp } = props;
  return (
    <StyledExCard>
      <div className="jobHead">
        <div>
          <p>{exp.startDate}</p>
          <p>{exp.endDate}</p>
        </div>

        <div>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
        </div>
      </div>
      <div className="jobBody">
        <ul>
          {exp.description.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    </StyledExCard>
  );
}
