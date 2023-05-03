import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 375px;
`;
export const Uber = styled.h1`
  margin: 0;
  background: linear-gradient(to right, orange, purple, lightblue);
  text-align: center;
  font: icon;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Orderli = styled.ol`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Lila = styled.li`
  text-align: center;
  text-shadow: 0px 0px 5px black;
  text-stroke: 30px black;
`;

export const NavBa = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 2px dotted #ccc;
  text-align: center;
  margin: 0 0px;
  text-decoration: none;
  color: #333;
  width: 375px;
  position: fixed;
  bottom: 0;
  background: linear-gradient(to right, orange, purple, lightblue);
`;

export const StyledLink = styled(Link)`
  color: ghostwhite;
  font: icon;
  padding: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
