import './App.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Genre from './components/Genre/Genre';
import MovieInformation from './components/MovieInformation/MovieInformation'
function App() {


  return (
    <main>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/MovieInformation' element={<MovieInformation />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
