import styled from "styled-components";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../index";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { useState } from "react";

export function Menuhambur() {
  const [click, setClick] = useState(false);
  return (
    <Container>
      <NavBar>
        <section>
          <HamburgerMenu onClick={() => setClick(!click)}>
            <label
              className={click ? "toggle active" : "toggle"}
              for="checkbox"
            >
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </HamburgerMenu>
        </section>

        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div onClick={() => setClick(!click)} className="LinkContainer">
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <ToggleTema />
          <Divider />
        </Menu>
      </NavBar>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
// const HamburgerMenu = styled.span`

// `;
const HamburgerMenu = styled.span`
  position: fixed;
  top: 2rem;
  z-index: 100;

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: 0.3s;
    &.active {
      .bars {
        margin-left: 13px;
      }
      #bar2 {
        transform: rotate(135deg);
        margin-left: 0;
        transform-origin: center;
        transition-duration: 0.3s;
      }
      #bar1 {
        transform: rotate(45deg);
        transition-duration: 0.3s;
        transform-origin: left center;
      }

      #bar3 {
        transform: rotate(-45deg);
        transition-duration: 0.3s;
        transform-origin: left center;
      }
    }
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.text};
    border-radius: 5px;
    transition-duration: 0.3s;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
  backdrop-filter: blur(3px);
  transform: ${(props) =>
    props.$click == "true" ? `translateY(0)` : `translateY(1000%)`};
  transition: all 0.3s ease;

  .LinkContainer{
    &:hover{
        background-color: ${(props) => props.theme.bgAlpha};
    }
    .Links{
        width: 100vw;
        display: flex;
        align-items: center;
        text-decoration:none;
        color: ${(props) => props.theme.text};
        height:80px;

        .Linkicon{
            padding: ${v.mdSpacing} ${v.mdSpacing};
            svg{
                font-size: 25px;
            }

        }
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
