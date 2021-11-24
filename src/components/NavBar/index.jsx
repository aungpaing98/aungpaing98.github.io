import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNav = styled.nav`
  width: 390px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter:blur(2px);

  img {
    height: 45px;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      a {
        border-radius:4px;
        padding: 8px;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.neon};
    color: ${props=>props.theme.bgDark};
  }
`;

export default function NavBar(props) {
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <img src={`${props.dark?"/embeds/dark-logo.png" : "/embeds/light-logo.png"}`} alt="Aung Paing's Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/works">Works</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
