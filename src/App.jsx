
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './context/Context'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  const [theme, setTheme] = useState(false)
  const [loading, setLoading] = useState()

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },4000)
  },[])

  return (
    <>
    <section className={theme ? 'dark' : ""}>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={loading ? <Loader /> : <Home />} />
            <Route path='/about' element={loading ? <Loader /> : <About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </section>
    </>
  )
}

export default App
