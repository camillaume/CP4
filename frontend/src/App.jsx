import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Account from "@pages/Account";
import Collection from "@pages/Collection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  );
}
export default App;
