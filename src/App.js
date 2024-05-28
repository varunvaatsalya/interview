import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Scanner from "./pages/Scanner";
function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/leaderboard" Component={Leaderboard} />
              <Route path="/scanner" Component={Scanner} />
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
