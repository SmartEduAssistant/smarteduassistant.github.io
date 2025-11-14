import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Team from './pages/Team'
import Contact from './pages/Contact'
import './styles/index.css'

function App() {
  // Get basename from package.json homepage field
  const basename = process.env.PUBLIC_URL || ''
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

