import "./App.scss";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import CocktailDetails from "./pages/Details/CocktailDetails";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cocktail/:id" element={<CocktailDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
