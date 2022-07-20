import accountMiddleGreen from "@assets/Nav/accountMiddleGreen.png";
import bookshelfMiddleGreen from "@assets/Nav/bookshelfMiddleGreen.png";
import { Link } from "react-router-dom";
import SNav from "./style";

export default function Nav() {
  return (
    <SNav>
      <div className="navbar">
        <div>
          <Link to="/account">
            <img src={accountMiddleGreen} alt="logo compte" />
          </Link>
          <p>Mon Compte</p>
        </div>
        <div>
          <Link to="/collection">
            <img src={bookshelfMiddleGreen} alt="logo collection" />
          </Link>
          <p>Mes Collections</p>
        </div>
      </div>
    </SNav>
  );
}
