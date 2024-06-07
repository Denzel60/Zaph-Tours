import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home/Home'
import Destinations from './Pages/Destinations/Destinations'
import Trip from './Pages/Trip/Trip'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Trip" element={<Trip />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
