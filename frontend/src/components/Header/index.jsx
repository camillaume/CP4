import Nav from "@components/Nav";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <h1>Ma Bibliothéque</h1>
      </Link>
      <Nav />
    </SHeader>
  );
}
