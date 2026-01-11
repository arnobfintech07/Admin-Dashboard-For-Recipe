import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recipies from './Pages/Recipies';
import Dashboard from './Pages/Dashboard';
import RecipeModal from './Pages/RecipeModal';
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/recipes" element= {<Recipies/>} />
         <Route path="/dashboard" element= {<Dashboard/>} />
          <Route path="/modal" element= {<RecipeModal/>} />
      </Routes>
    </Router>
  )
}

export default App
