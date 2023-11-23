import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
  <nav>
    <Link to='/'>Home 🏠</Link>
    <Link to='/profile'>Profile 🙋</Link>
  </nav>
  <Routes>
    <Route path='/' element={<h1>Home 🏠</h1>} />
    <Route path='/profile' element={<h1>Profile 🙋</h1>} />
  </Routes>
    </>
  )
}

export default App
