import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recipies from './Pages/Recipies';
import Dashboard from './Pages/Dashboard';
import VegFood from './Pages/VegFood';
import NonVegFood from './Pages/NonVegFood';
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/recipes" element= {<Recipies/>} />
         <Route path="/dashboard" element= {<Dashboard/>} />
         <Route path="/veg" element= {<VegFood/>} />
          <Route path="/nonveg" element= {<NonVegFood/>} />
      </Routes>
    </Router>
  )
}

export default App
