import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recipies from './Pages/Recipies';
function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/recipes" element= {<Recipies/>} />
      </Routes>
    </Router>
  )
}

export default App
