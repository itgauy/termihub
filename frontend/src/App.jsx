import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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