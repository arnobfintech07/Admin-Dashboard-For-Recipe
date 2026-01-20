import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recipies from "./Pages/Recipies";
import Dashboard from "./Pages/Dashboard";
import VegFood from "./Pages/VegFood";
import NonVegFood from "./Pages/NonVegFood";
import Settings from "./Pages/Settings";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Pie from "./Components/Pie";
import Test from "./Components/Test";
import AboutMeComponent from "./Pages/AboutMeComponent"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/veg" element={<VegFood />} />
        <Route path="/nonveg" element={<NonVegFood />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutme" element={<AboutMeComponent />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
