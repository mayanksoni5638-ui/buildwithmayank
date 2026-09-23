import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import { useEffect } from 'react'

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App