import Header from "./componant/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import Destination from "./screen/Destination";
import CrewScreen from "./screen/CrewScreen";
import TechnologyScreen from "./screen/TechnologyScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/dstination/:id" element={<Destination />} />
        <Route path="/crew/:id" element={<CrewScreen />} />
        <Route path="/technology/:id" element={<TechnologyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
