import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  width: 84%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 1;

  div {
    min-width: 22ch;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    height: 28px;
    width: 28px;
    background-color: ${(props) => props.theme.content};
    border: 0;
    border-radius: 28px;

    outline: 2px ${(props) => props.theme.content} solid;
    outline-offset: 0.2rem;
  }

  img {
    height: 45px;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 4px;
      a {
        border-radius: 4px;
        padding: 8px;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.neon};
    color: ${(props) => props.theme.dark};
  }
`;

export default function NavBar(props) {
  const changeTheme = () => {
    props.setDark((pre) => !pre);
  };
  return (
    <StyledNav>
      <Link to="/">
        <motion.img
          whileHover={{ scale: 1.1, rotate:20 }}
          src={`${
            props.dark ? "/embeds/dark-logo.png" : "/embeds/light-logo.png"
          }`}
          alt="Aung Paing's Logo"
        />
      </Link>
      <div>
        <motion.ul>
          <motion.li whileHover={{ scale: 1.1, rotate: 10 }}>
            <NavLink to="/works">Works</NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, rotate: 10 }}>
            <NavLink to="/contact">Contact</NavLink>
          </motion.li>
        </motion.ul>
        <button onClick={changeTheme}></button>
      </div>
    </StyledNav>
  );
}
