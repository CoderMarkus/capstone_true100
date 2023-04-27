import Link from "next/link";
import { NavBa, StyledLink } from "../components/styles";

export default function Navigation() {
  return (
    <NavBa>
      <li>
        <StyledLink href="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink href="/newdownload">Uploaded DJ Playlists</StyledLink>
      </li>
    </NavBa>
  );
}
