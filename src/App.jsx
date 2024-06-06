import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header'
import Home from './assets/Pages/Home/Home'
import Destinations from './assets/Pages/Destinations/Destinations'
import Trip from './assets/Pages/Trip/Trip'
import Contact from './assets/Pages/Contact/Contact'

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
