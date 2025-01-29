import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper