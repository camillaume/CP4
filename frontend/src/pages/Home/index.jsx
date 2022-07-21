import Search from "@components/Search";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="welcome">
        <h2>Bienvenue</h2>
        <p>Ici vous pourrez gérer rapidement et simplement vos collections</p>
      </div>
      <Search />
    </SHome>
  );
}
